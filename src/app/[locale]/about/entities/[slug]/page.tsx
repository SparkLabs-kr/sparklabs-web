import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowLeft, ArrowUpRight, Globe, Linkedin, Newspaper } from 'lucide-react';
import { entities } from '@/lib/entities';
import { entityDetails, getEntityDetail } from '@/lib/entity-details';
import type { Locale } from '@/lib/content';

export async function generateStaticParams() {
  const locales: Locale[] = ['ko', 'en'];
  const out: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const slug of Object.keys(entityDetails)) {
      out.push({ locale, slug });
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
  const meta = entities.find((e) => e.slug === slug);
  const detail = getEntityDetail(slug);

  if (!meta || !detail) {
    return {};
  }

  const title = meta.name[locale];
  const description = meta.focus[locale];
  const path = `/about/entities/${slug}`;

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

export default async function EntityDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const meta = entities.find((e) => e.slug === slug);
  const detail = getEntityDetail(slug);

  if (!meta || !detail) {
    notFound();
  }

  const copy = content[locale];
  const accent = meta.accent;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className={`pointer-events-none absolute -top-32 -right-28 h-[520px] w-[520px] rounded-full bg-spark-${accent}/40 blur-3xl`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-32 h-[420px] w-[420px] rounded-full bg-spark-ray blur-3xl opacity-50"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-20 md:py-24">
          <Link
            href="/about/entities"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> {copy.back}
          </Link>

          <div className="mt-10 flex items-start gap-4">
            <div className={`h-1.5 w-12 rounded-full bg-spark-${accent}`} />
          </div>

          <h1 className="mt-6 text-display-lg max-w-3xl leading-[1.05]">
            {meta.name[locale]}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span>{meta.location[locale]}</span>
            {meta.founded && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  {copy.founded} {meta.founded}
                </span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{regionLabel[meta.region][locale]}</span>
          </div>

          <p className="mt-8 max-w-2xl text-lg text-white/80 leading-relaxed whitespace-pre-line">
            {detail.story[locale]}
          </p>

          {detail.stats && detail.stats.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl">
              {detail.stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <div className="text-3xl font-semibold">{s.value}</div>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60">
                    {s.label[locale]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Leadership */}
      {detail.leaders && detail.leaders.length > 0 && (
        <section className="section border-b border-surface-border">
          <div className="container-narrow">
            <span className="eyebrow">{copy.leadershipEyebrow}</span>
            <h2 className="mt-3 text-display-md text-ink">
              {copy.leadershipTitle}
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {detail.leaders.map((l) => (
                <article
                  key={l.name}
                  className="card-light flex flex-col gap-3 p-6"
                >
                  <div className={`h-1 w-10 rounded-full bg-spark-${accent}`} />
                  <h3 className="mt-2 text-lg font-semibold text-ink">
                    {l.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
                    {l.role[locale]}
                  </p>
                  {l.bio && (
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {l.bio[locale]}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Programs */}
      {detail.programs && detail.programs.length > 0 && (
        <section className="section bg-surface-subtle border-b border-surface-border">
          <div className="container-narrow">
            <span className="eyebrow">{copy.programsEyebrow}</span>
            <h2 className="mt-3 text-display-md text-ink">{copy.programsTitle}</h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {detail.programs.map((p, i) => (
                <article
                  key={i}
                  className="card-light flex flex-col gap-3 p-8"
                >
                  <div className={`h-1 w-10 rounded-full bg-spark-${accent}`} />
                  <h3 className="mt-2 text-xl font-semibold text-ink">
                    {p.title[locale]}
                  </h3>
                  <p className="text-ink-soft leading-relaxed">
                    {p.body[locale]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio */}
      {detail.portfolio && detail.portfolio.length > 0 && (
        <section className="section border-b border-surface-border">
          <div className="container-narrow">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <span className="eyebrow">{copy.portfolioEyebrow}</span>
                <h2 className="mt-3 text-display-md text-ink">
                  {copy.portfolioTitle}
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink/70"
              >
                {copy.portfolioCta} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {detail.portfolio.map((p) => (
                <article
                  key={p.name}
                  className="card-light flex h-full flex-col gap-3 p-6"
                >
                  <div className={`h-1 w-10 rounded-full bg-spark-${accent}`} />
                  <h3 className="mt-2 text-lg font-semibold text-ink">
                    {p.name}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {p.blurb[locale]}
                  </p>
                  {p.tag && (
                    <span className="mt-auto inline-flex w-fit rounded-full border border-surface-border px-2.5 py-0.5 text-xs text-ink/60">
                      {p.tag[locale]}
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Milestones */}
      {detail.milestones && detail.milestones.length > 0 && (
        <section className="section bg-surface-subtle border-b border-surface-border">
          <div className="container-narrow">
            <span className="eyebrow">{copy.milestonesEyebrow}</span>
            <h2 className="mt-3 text-display-md text-ink">
              {copy.milestonesTitle}
            </h2>

            <ol className="mt-10 space-y-6 max-w-3xl">
              {detail.milestones.map((m, i) => (
                <li
                  key={i}
                  className="flex gap-6 border-l-2 border-surface-border pl-6 relative"
                >
                  <span
                    className={`absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-spark-${accent}`}
                    aria-hidden="true"
                  />
                  <div className="min-w-24 shrink-0 text-sm font-medium text-ink-soft">
                    {m.date}
                  </div>
                  <div>
                    <p className="text-ink font-medium leading-snug">
                      {m.title[locale]}
                    </p>
                    {m.body && (
                      <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                        {m.body[locale]}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Partners */}
      {detail.partners && (
        <section className="section border-b border-surface-border">
          <div className="container-narrow">
            <span className="eyebrow">{copy.partnersEyebrow}</span>
            <h2 className="mt-3 text-display-md text-ink">
              {copy.partnersTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-ink-soft leading-relaxed">
              {detail.partners[locale]}
            </p>
          </div>
        </section>
      )}

      {/* Links + Other entities */}
      <section className="section">
        <div className="container-narrow">
          {detail.links && (
            <div className="flex flex-wrap gap-3">
              {detail.links.website && (
                <a
                  href={detail.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Globe className="h-4 w-4" /> {copy.visitWebsite}
                </a>
              )}
              {detail.links.linkedin && (
                <a
                  href={detail.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
              {detail.links.press && (
                <a
                  href={detail.links.press}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  <Newspaper className="h-4 w-4" /> {copy.pressRoom}
                </a>
              )}
            </div>
          )}

          <div className="mt-16 pt-10 border-t border-surface-border">
            <span className="eyebrow">{copy.otherEyebrow}</span>
            <h2 className="mt-3 text-display-sm text-ink">
              {copy.otherTitle}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {entities
                .filter((e) => e.slug !== slug)
                .map((e) => (
                  <Link
                    key={e.slug}
                    href={`/about/entities/${e.slug}`}
                    className="group flex flex-col gap-2 rounded-2xl border border-surface-border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-card"
                  >
                    <div className={`h-1 w-10 rounded-full bg-spark-${e.accent}`} />
                    <h3 className="mt-2 font-semibold text-ink group-hover:text-ink">
                      {e.name[locale]}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
                      {e.location[locale]}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const regionLabel: Record<
  'APAC' | 'Americas' | 'MENA' | 'ANZ',
  { ko: string; en: string }
> = {
  APAC: { ko: '아시아·태평양', en: 'Asia-Pacific' },
  Americas: { ko: '미주', en: 'Americas' },
  MENA: { ko: '중동·북아프리카', en: 'Middle East & North Africa' },
  ANZ: { ko: '호주·뉴질랜드', en: 'Australia & New Zealand' },
};

const content = {
  ko: {
    back: '글로벌 엔티티로',
    founded: '설립',
    leadershipEyebrow: 'Leadership',
    leadershipTitle: '운영을 이끄는 사람들',
    programsEyebrow: 'Programs',
    programsTitle: '대표 프로그램·펀드',
    portfolioEyebrow: 'Portfolio',
    portfolioTitle: '대표 포트폴리오',
    portfolioCta: '전체 포트폴리오 보기',
    milestonesEyebrow: 'Milestones',
    milestonesTitle: '주요 이력',
    partnersEyebrow: 'Partners',
    partnersTitle: '전략 파트너',
    visitWebsite: '엔티티 웹사이트',
    pressRoom: '프레스룸',
    otherEyebrow: 'Global Network',
    otherTitle: '다른 엔티티도 살펴보세요',
  },
  en: {
    back: 'Back to Global Entities',
    founded: 'Est.',
    leadershipEyebrow: 'Leadership',
    leadershipTitle: 'The people running the show',
    programsEyebrow: 'Programs',
    programsTitle: 'Flagship programs & funds',
    portfolioEyebrow: 'Portfolio',
    portfolioTitle: 'Selected portfolio',
    portfolioCta: 'Browse all portfolio',
    milestonesEyebrow: 'Milestones',
    milestonesTitle: 'Key moments',
    partnersEyebrow: 'Partners',
    partnersTitle: 'Strategic partners',
    visitWebsite: 'Entity website',
    pressRoom: 'Press room',
    otherEyebrow: 'Global Network',
    otherTitle: 'Explore other entities',
  },
} as const;
