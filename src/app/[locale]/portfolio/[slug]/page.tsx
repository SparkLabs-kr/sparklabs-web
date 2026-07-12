import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { portfolio, categoryLabel, type PortfolioCompany } from '@/lib/portfolio';
import { getPortfolioDetail } from '@/lib/portfolio-details';
import { entities } from '@/lib/entities';
import type { Locale } from '@/lib/content';

export async function generateStaticParams() {
  const locales: Locale[] = ['ko', 'en'];
  const out: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const company of portfolio) {
      out.push({ locale, slug: company.slug });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const detail = getPortfolioDetail(slug);

  if (!detail) {
    return {};
  }

  const title = detail.company.name;
  const description = summarize(detail.description[locale]);
  const path = `/portfolio/${slug}`;

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
      title,
      description,
      url: `/${locale}${path}`,
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
    },
    twitter: { title, description },
  };
}

/** 소개문 첫 문장 위주로 ~160자 발췌 (메타 description용). */
function summarize(text: string): string {
  const flat = text.replace(/\s+/g, ' ').trim();
  return flat.length > 160 ? `${flat.slice(0, 157)}…` : flat;
}

/**
 * 스크랩 데이터의 tagline 일부는 카테고리 단어("foodtech", "Media" 등)뿐이라
 * 헤드라인 아래 lede로 쓰기에 부적절 — 그런 경우 표시하지 않는다.
 */
function displayTagline(company: PortfolioCompany, locale: Locale): string | null {
  const tagline = company.tagline[locale]?.trim();
  if (!tagline) return null;
  const cat = categoryLabel[company.category][locale];
  if (tagline.toLowerCase() === cat.toLowerCase()) return null;
  if (locale === 'en' && tagline.length < 12) return null;
  return tagline;
}

function CompanyLogo({ company }: { company: PortfolioCompany }) {
  if (!company.logoFile) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-surface-subtle">
        <span className="text-xl font-bold text-ink-soft">
          {company.name.charAt(0)}
        </span>
      </div>
    );
  }
  return company.logoFile.endsWith('.svg') ? (
    <Image
      src={`/portfolio/logos/${company.logoFile}`}
      alt={company.name}
      width={150}
      height={48}
      className="h-12 w-auto max-w-[150px] object-contain"
      unoptimized
    />
  ) : (
    <Image
      src={`/portfolio/logos/${company.logoFile}`}
      alt={company.name}
      width={176}
      height={88}
      className="h-[88px] w-auto scale-[1.2] object-contain"
      unoptimized
    />
  );
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const detail = getPortfolioDetail(slug);
  if (!detail) {
    notFound();
  }

  const { company, description } = detail;
  const copy = content[locale];
  const entityMeta = entities.find((e) => e.slug === company.entity);
  const accent = entityMeta?.accent ?? 'pink';
  const tagline = displayTagline(company, locale);

  const related = portfolio
    .filter((p) => p.category === company.category && p.slug !== company.slug)
    .sort(
      (a, b) =>
        Number(Boolean(b.featured || b.aiPick)) -
        Number(Boolean(a.featured || a.aiPick))
    )
    .slice(0, 3);

  const chips = [
    categoryLabel[company.category][locale],
    entityMeta?.shortName ?? company.entity,
    company.country,
    company.stage,
    company.year,
  ].filter(Boolean) as string[];

  return (
    <>
      {/* Header */}
      <section className="border-b border-surface-border">
        <div className="container-narrow py-14 md:py-20">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> {copy.back}
          </Link>

          <div className="mt-10 flex h-20 w-fit max-w-full items-center overflow-hidden">
            <CompanyLogo company={company} />
          </div>

          <div className={`mt-8 h-[3px] w-12 bg-spark-${accent}`} />

          <h1 className="mt-6 text-display-lg max-w-3xl text-ink">
            {company.name}
          </h1>

          {tagline && (
            <p className="mt-4 max-w-2xl text-lg text-ink-soft leading-relaxed">
              {tagline}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-ink/50">
            {chips.map((chip) => (
              <span
                key={chip}
                className="border border-surface-border px-2.5 py-0.5"
              >
                {chip}
              </span>
            ))}
          </div>

          {company.highlight && (
            <div className={`mt-8 max-w-2xl border-l-2 border-spark-${accent} bg-surface-subtle px-4 py-3`}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/50">
                {copy.highlightLabel}
              </span>
              <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                {company.highlight[locale]}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About */}
      <section className="section border-b border-surface-border">
        <div className="container-narrow">
          <span className="eyebrow">{copy.aboutEyebrow}</span>
          <h2 className="mt-3 text-display-sm text-ink">{copy.aboutTitle}</h2>
          <p className="mt-6 max-w-3xl text-ink-soft leading-relaxed whitespace-pre-line">
            {description[locale]}
          </p>
        </div>
      </section>

      {/* Related + CTA */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          {related.length > 0 && (
            <>
              <span className="eyebrow">{copy.relatedEyebrow}</span>
              <h2 className="mt-3 text-display-sm text-ink">
                {copy.relatedTitle.replace(
                  '{category}',
                  categoryLabel[company.category][locale]
                )}
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => {
                  const relatedAccent =
                    entities.find((e) => e.slug === p.entity)?.accent ?? 'pink';
                  return (
                    <Link
                      key={p.slug}
                      href={`/portfolio/${p.slug}`}
                      className="group flex h-full flex-col gap-2 border border-surface-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-ink"
                    >
                      <div className={`h-[3px] w-10 bg-spark-${relatedAccent}`} />
                      <h3 className="mt-2 font-semibold text-ink">{p.name}</h3>
                      <p className="text-sm text-ink-soft leading-relaxed">
                        {displayTagline(p, locale) ??
                          categoryLabel[p.category][locale]}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </>
          )}

          <div className={related.length > 0 ? 'mt-12' : ''}>
            <Link href="/portfolio" className="btn-ghost-light">
              {copy.browseAll} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const content = {
  ko: {
    back: '전체 포트폴리오로',
    highlightLabel: '주요 이력',
    aboutEyebrow: 'About',
    aboutTitle: '회사 소개',
    relatedEyebrow: 'More Portfolio',
    relatedTitle: '{category} 분야의 다른 포트폴리오',
    browseAll: '전체 포트폴리오 보기',
  },
  en: {
    back: 'Back to Portfolio',
    highlightLabel: 'Milestone',
    aboutEyebrow: 'About',
    aboutTitle: 'About the company',
    relatedEyebrow: 'More Portfolio',
    relatedTitle: 'More in {category}',
    browseAll: 'Browse all portfolio',
  },
} as const;
