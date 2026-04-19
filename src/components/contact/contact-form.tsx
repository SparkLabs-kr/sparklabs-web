'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/content';

type Category = 'founders' | 'partnership' | 'press' | 'general';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const copy = {
  ko: {
    labelName: '이름',
    labelEmail: '이메일',
    labelOrg: '소속 (선택)',
    labelCategory: '문의 유형',
    labelSubject: '제목 (선택)',
    labelMessage: '문의 내용',
    placeholderName: '홍길동',
    placeholderEmail: 'you@company.com',
    placeholderOrg: '회사 · 기관 · 소속',
    placeholderSubject: '한 줄로 요약해주세요',
    placeholderMessage: '구체적인 배경과 원하는 결과를 적어주시면 담당팀이 더 빠르게 회신드릴 수 있어요.',
    categories: {
      founders: '창업가 지원 (배치 · 투자 · 포트폴리오)',
      partnership: '파트너십 · 오픈이노베이션',
      press: '언론 · 미디어',
      general: '기타 일반 문의',
    } as Record<Category, string>,
    submit: '문의 보내기',
    submitting: '보내는 중…',
    success: '문의가 접수되었습니다. 담당팀이 영업일 기준 2일 이내에 회신드릴게요.',
    error: '전송에 실패했습니다. 잠시 후 다시 시도하거나 이메일로 직접 연락주세요.',
    required: '* 필수',
    consent: '제출 시 개인정보 처리방침에 동의하는 것으로 간주됩니다.',
  },
  en: {
    labelName: 'Name',
    labelEmail: 'Email',
    labelOrg: 'Organization (optional)',
    labelCategory: 'Inquiry type',
    labelSubject: 'Subject (optional)',
    labelMessage: 'Message',
    placeholderName: 'Your full name',
    placeholderEmail: 'you@company.com',
    placeholderOrg: 'Company, institution, or affiliation',
    placeholderSubject: 'One-line summary',
    placeholderMessage: 'Share the context and what you\u2019re looking for — this helps us reply faster.',
    categories: {
      founders: 'For Founders (Batch · Investment · Portfolio)',
      partnership: 'Partnership & Open Innovation',
      press: 'Press & Media',
      general: 'General Inquiry',
    } as Record<Category, string>,
    submit: 'Send inquiry',
    submitting: 'Sending…',
    success: 'Got it. We\u2019ll reply within 2 business days.',
    error: 'Something went wrong. Please try again, or email us directly.',
    required: '* required',
    consent: 'By submitting, you agree to our privacy policy.',
  },
} as const;

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      organization: String(data.get('organization') || ''),
      category: String(data.get('category') || 'general') as Category,
      subject: String(data.get('subject') || ''),
      message: String(data.get('message') || ''),
      website: String(data.get('website') || ''), // honeypot
      locale,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(body?.error || 'Request failed');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      {/* honeypot — 사람에겐 안 보이고 봇만 채움 */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium text-ink">
            {t.labelName} <span className="text-spark-red">*</span>
          </span>
          <input
            required
            name="name"
            type="text"
            placeholder={t.placeholderName}
            className="rounded-2xl border border-surface-border bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium text-ink">
            {t.labelEmail} <span className="text-spark-red">*</span>
          </span>
          <input
            required
            name="email"
            type="email"
            placeholder={t.placeholderEmail}
            className="rounded-2xl border border-surface-border bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium text-ink">{t.labelOrg}</span>
        <input
          name="organization"
          type="text"
          placeholder={t.placeholderOrg}
          className="rounded-2xl border border-surface-border bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium text-ink">
          {t.labelCategory} <span className="text-spark-red">*</span>
        </span>
        <select
          name="category"
          required
          defaultValue="general"
          className="rounded-2xl border border-surface-border bg-white px-4 py-3 text-ink focus:border-ink focus:outline-none"
        >
          {(Object.keys(t.categories) as Category[]).map((key) => (
            <option key={key} value={key}>
              {t.categories[key]}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium text-ink">{t.labelSubject}</span>
        <input
          name="subject"
          type="text"
          placeholder={t.placeholderSubject}
          className="rounded-2xl border border-surface-border bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium text-ink">
          {t.labelMessage} <span className="text-spark-red">*</span>
        </span>
        <textarea
          required
          name="message"
          rows={6}
          placeholder={t.placeholderMessage}
          className="rounded-2xl border border-surface-border bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none resize-y"
        />
      </label>

      <p className="text-xs text-ink/50">{t.consent}</p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? t.submitting : t.submit}
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </button>

        {status === 'success' && (
          <p className="text-sm text-spark-green" role="status">
            {t.success}
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-spark-red" role="alert">
            {t.error}
            {errorMsg ? ` (${errorMsg})` : ''}
          </p>
        )}
      </div>
    </form>
  );
}
