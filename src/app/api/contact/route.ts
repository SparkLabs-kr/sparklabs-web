import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * Contact form submit endpoint.
 *
 * 1) Resend REST API로 담당팀에게 알림 이메일 발송
 * 2) Notion REST API로 Contact 데이터베이스에 문의 레코드 추가
 *
 * 필요한 환경 변수 (Vercel Project Settings > Environment Variables에 등록):
 *   RESEND_API_KEY
 *   CONTACT_FROM_EMAIL          (예: notifications@sparklabs.co.kr)
 *   CONTACT_INBOX_EMAIL         (fallback 수신함)
 *   CONTACT_INBOX_FOUNDERS      (apply@sparklabs.co.kr)
 *   CONTACT_INBOX_PARTNERSHIP   (partnership@sparklabs.co.kr)
 *   CONTACT_INBOX_PRESS         (press@sparklabs.co.kr)
 *   CONTACT_INBOX_GENERAL       (hello@sparklabs.co.kr)
 *   NOTION_TOKEN
 *   NOTION_CONTACT_DATABASE_ID
 */

type Category = 'founders' | 'partnership' | 'press' | 'general';

type Payload = {
  name?: string;
  email?: string;
  organization?: string;
  category?: Category;
  subject?: string;
  message?: string;
  locale?: 'ko' | 'en';
  // honeypot — 봇이 채우는 숨김 필드
  website?: string;
};

const CATEGORY_LABEL: Record<Category, string> = {
  founders: 'For Founders',
  partnership: 'Partnership & Open Innovation',
  press: 'Press & Media',
  general: 'General Inquiry',
};

function routeInbox(category: Category): string {
  const map: Record<Category, string | undefined> = {
    founders: process.env.CONTACT_INBOX_FOUNDERS,
    partnership: process.env.CONTACT_INBOX_PARTNERSHIP,
    press: process.env.CONTACT_INBOX_PRESS,
    general: process.env.CONTACT_INBOX_GENERAL,
  };
  return (
    map[category] || process.env.CONTACT_INBOX_EMAIL || 'hello@sparklabs.co.kr'
  );
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendViaResend(args: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY not configured');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: args.from,
      to: [args.to],
      reply_to: args.replyTo,
      subject: args.subject,
      html: args.html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend ${res.status}: ${text.slice(0, 200)}`);
  }
}

async function saveToNotion(args: {
  name: string;
  email: string;
  organization: string;
  categoryLabel: string;
  subject: string;
  message: string;
  locale: 'ko' | 'en';
  submittedAt: string;
}): Promise<void> {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_CONTACT_DATABASE_ID;
  if (!token || !databaseId) {
    throw new Error('NOTION_TOKEN / NOTION_CONTACT_DATABASE_ID not configured');
  }

  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: args.name } }] },
    Email: { email: args.email },
    Category: { select: { name: args.categoryLabel } },
    Locale: { select: { name: args.locale } },
    SubmittedAt: { date: { start: args.submittedAt } },
    Status: { select: { name: 'New' } },
  };
  if (args.organization) {
    properties.Organization = {
      rich_text: [{ text: { content: args.organization } }],
    };
  }
  if (args.subject) {
    properties.Subject = {
      rich_text: [{ text: { content: args.subject } }],
    };
  }

  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties,
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [{ type: 'text', text: { content: args.message } }],
          },
        },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion ${res.status}: ${text.slice(0, 200)}`);
  }
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: 봇이 채웠으면 성공처럼 보이게 반환하고 무시
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const organization = (body.organization || '').trim();
  const category: Category = (body.category as Category) || 'general';
  const subject = (body.subject || '').trim();
  const message = (body.message || '').trim();
  const locale: 'ko' | 'en' = body.locale === 'en' ? 'en' : 'ko';

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'name, email, message are required' },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  if (!(category in CATEGORY_LABEL)) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
  }
  if (message.length > 5000 || subject.length > 200) {
    return NextResponse.json({ error: 'Payload too long' }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const toEmail = routeInbox(category);
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || 'notifications@sparklabs.co.kr';
  const subjectLine =
    subject || `[${CATEGORY_LABEL[category]}] SparkLabs Contact Form`;

  const emailHtml = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
      <div style="padding: 24px; background: #0b1226; color: #fff;">
        <div style="font-size: 12px; letter-spacing: 0.14em; color: #FFD200; text-transform: uppercase;">
          SparkLabs Contact Form
        </div>
        <div style="margin-top: 8px; font-size: 20px; font-weight: 600;">
          ${escapeHtml(CATEGORY_LABEL[category])}
        </div>
      </div>
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 6px 0; color: #666; width: 120px;">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          ${organization ? `<tr><td style="padding: 6px 0; color: #666;">Organization</td><td>${escapeHtml(organization)}</td></tr>` : ''}
          <tr><td style="padding: 6px 0; color: #666;">Locale</td><td>${locale}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Submitted</td><td>${submittedAt}</td></tr>
          ${subject ? `<tr><td style="padding: 6px 0; color: #666;">Subject</td><td>${escapeHtml(subject)}</td></tr>` : ''}
        </table>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <div style="white-space: pre-wrap; line-height: 1.6; font-size: 14px;">
          ${escapeHtml(message)}
        </div>
      </div>
    </div>
  `;

  let emailError: string | undefined;
  try {
    await sendViaResend({
      from: `SparkLabs Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: subjectLine,
      html: emailHtml,
    });
  } catch (err) {
    emailError = err instanceof Error ? err.message : 'email send failed';
  }

  let notionError: string | undefined;
  try {
    await saveToNotion({
      name,
      email,
      organization,
      categoryLabel: CATEGORY_LABEL[category],
      subject,
      message,
      locale,
      submittedAt,
    });
  } catch (err) {
    notionError = err instanceof Error ? err.message : 'notion save failed';
  }

  if (emailError && notionError) {
    // eslint-disable-next-line no-console
    console.error('[contact] both channels failed', {
      emailError,
      notionError,
    });
    return NextResponse.json(
      { error: 'Submission temporarily unavailable' },
      { status: 502 }
    );
  }
  if (emailError || notionError) {
    // eslint-disable-next-line no-console
    console.warn('[contact] partial failure', { emailError, notionError });
  }

  return NextResponse.json({ ok: true });
}
