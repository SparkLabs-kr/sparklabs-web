import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getAllEntries, getEntry, type Locale } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import type { NewsKind } from '@/components/newsroom/news-card';

interface Frontmatter {
  title?: string;
  date?: string;
  summary?: string;
  entity?: string;
  tags?: string[];
  outlet?: string;
  sourceUrl?: string;
  author?: string;
}

const validKinds: NewsKind[] = ['press', 'media', 'insights', 'announcements'];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; kind: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, kind, slug } = await params;
  const locale = rawLocale as Locale;
  if (!validKinds.includes(kind as NewsKind)) {
    return {};
  }
  const entry = getEntry<Frontmatter>(kind as NewsKind, locale, slug);
  if (!entry) return {};

  const title = entry.frontmatter.title ?? slug;
  const description =
    entry.frontmatter.summary ??
    (locale === 'ko'
      ? '스파크랩 뉴스룸의 콘텐츠입니다.'
      : 'A SparkLabs Newsroom article.');
  const path = `/newsroom/${kind}/${slug}`;
  const publishedTime = entry.frontmatter.date;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        ko: `/ko${path}`,
        en: `/en${path}`,
        'x-default': `/ko${path}`,
      },
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `/${locale}${path}`,
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export async function generateStaticParams() {
  const locales: Locale[] = ['ko', 'en'];
  const out: Array<{ locale: string; kind: string; slug: string }> = [];
  for (const locale of locales) {
    for (const kind of validKinds) {
      const entries = getAllEntries(kind, locale);
      for (const e of entries) {
        out.push({ locale, kind, slug: e.slug });
      }
    }
  }
  return out;
}

function formatDate(iso: string | undefined, locale: Locale): string {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; kind: string; slug: string }>;
}) {
  const { locale: rawLocale, kind, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  if (!validKinds.includes(kind as NewsKind)) {
    notFound();
  }

  const entry = getEntry<Frontmatter>(kind as NewsKind, locale, slug);
  if (!entry) notFound();

  const t = await getTranslations('newsroom');
  const html = renderMarkdown(entry.body);

  const kindLabel: Record<NewsKind, string> = {
    press: t('press'),
    media: t('media'),
    insights: t('insights'),
    announcements: t('announcements'),
  };

  const copy =
    locale === 'ko'
      ? { back: '뉴스룸으로', openSource: '원문 기사 보기' }
      : { back: 'Back to Newsroom', openSource: 'Read full article' };

  const { frontmatter } = entry;

  return (
    <article className="section">
      <div className="container-narrow max-w-3xl">
        <Link
          href="/newsroom"
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" /> {copy.back}
        </Link>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-ink/60">
            <span className="rounded-full bg-surface-subtle px-2.5 py-1 font-semibold uppercase tracking-wider text-ink">
              {kindLabel[kind as NewsKind]}
            </span>
            {frontmatter.date && (
              <time dateTime={frontmatter.date}>
                {formatDate(frontmatter.date, locale)}
              </time>
            )}
            {frontmatter.outlet && <span>· {frontmatter.outlet}</span>}
            {frontmatter.author && <span>· {frontmatter.author}</span>}
          </div>
          <h1 className="mt-5 text-display-md leading-tight text-ink">
            {frontmatter.title ?? entry.slug}
          </h1>
          {frontmatter.summary && (
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {frontmatter.summary}
            </p>
          )}
        </header>

        <div
          className="mt-10 text-ink"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {frontmatter.sourceUrl && (
          <a
            href={frontmatter.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-12"
          >
            {copy.openSource} <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
