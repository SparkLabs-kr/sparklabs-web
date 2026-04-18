import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { entities } from '@/lib/entities';
import { getNewsByKind } from '@/lib/newsroom';
import { NewsCard, type NewsKind } from '@/components/newsroom/news-card';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'programsGlobal', path: '/programs/global' });
}

const regionOrder: Array<'APAC' | 'Americas' | 'MENA' | 'ANZ'> = [
  'APAC',
  'Americas',
  'MENA',
  'ANZ',
];

const regionLabel: Record<
  'APAC' | 'Americas' | 'MENA' | 'ANZ',
  { ko: string; en: string }
> = {
  APAC: { ko: '아시아·태평양', en: 'Asia-Pacific' },
  Americas: { ko: '미주', en: 'Americas' },
  MENA: { ko: '중동·북아프리카', en: 'Middle East & North Africa' },
  ANZ: { ko: '호주·뉴질랜드', en: 'Australia & New Zealand' },
};

export default async function GlobalProgramPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const copy = content[locale];

  const tNews = await getTranslations({ locale, namespace: 'newsroom' });
  const kindLabel: Record<NewsKind, string> = {
    press: tNews('press'),
    media: tNews('media'),
    insights: tNews('insights'),
    announcements: tNews('announcements'),
  };

  // Rolling open-call announcements pulled from Newsroom → Announcements.
  // Tag-driven: items tagged 'open-call' or 'program' show up here.
  const announcements = getNewsByKind('announcements', locale)
    .filter((item) =>
      item.tags?.some((t) =>
        ['open-call', 'program', 'apply', '모집'].includes(t.toLowerCase())
      )
    )
    .slice(0, 6);

  const grouped = regionOrder
    .map((region) => ({
      region,
      label: regionLabel[region][locale],
      items: entities.filter((e) => e.region === region),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-[560px] w-[560px] rounded-full bg-spark-blue/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-[560px] w-[560px] rounded-full bg-spark-green/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-20 md:py-28">
          <span className="eyebrow !text-spark-yellow">{copy.eyebrow}</span>
          <h1 className="mt-4 text-display-lg max-w-4xl leading-[1.05]">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {copy.heroSubcopy}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-semibold text-spark-yellow">
                {entities.length}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60">
                {copy.statEntities}
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-spark-yellow">6</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60">
                {copy.statContinents}
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-spark-yellow">550+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60">
                {copy.statPortfolio}
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-spark-yellow">2013</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60">
                {copy.statFounded}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN CALLS (rolling from Newsroom Announcements) */}
      <section className="section">
        <div className="container-narrow">
          <div className="flex items-baseline justify-between gap-6">
            <div>
              <span className="eyebrow">{copy.openCallsEyebrow}</span>
              <h2 className="mt-3 text-display-md text-ink max-w-3xl">
                {copy.openCallsTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
                {copy.openCallsSubcopy}
              </p>
            </div>
            <Link
              href={`/${locale}/newsroom/announcements`}
              className="hidden md:inline-flex items-center text-sm font-semibold text-ink underline-offset-4 hover:underline"
            >
              {copy.viewAllAnnouncements} →
            </Link>
          </div>

          {announcements.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {announcements.map((item) => (
                <NewsCard
                  key={`${item.kind}-${item.slug}`}
                  item={item}
                  locale={locale}
                  kindLabel={kindLabel}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-surface-border bg-surface-subtle p-12 text-center">
              <p className="text-ink-soft leading-relaxed max-w-xl mx-auto">
                {copy.openCallsEmpty}
              </p>
              <Link
                href={`/${locale}/newsroom/announcements`}
                className="mt-6 inline-flex items-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-subtle transition"
              >
                {copy.viewAllAnnouncements}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ENTITY DIRECTORY */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <span className="eyebrow">{copy.directoryEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.directoryTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.directorySubcopy}
          </p>

          <div className="mt-12 space-y-12">
            {grouped.map((group) => (
              <div key={group.region}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold text-ink">
                    {group.label}
                  </h3>
                  <span className="text-sm text-ink-soft">
                    {group.items.length} {copy.entityWord}
                  </span>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((e) => (
                    <article
                      key={e.slug}
                      className="card-light flex flex-col gap-3 p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className={`h-1.5 w-10 rounded-full bg-spark-${e.accent}`} />
                        {e.founded && (
                          <span className="text-xs text-ink/50">
                            Est. {e.founded}
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-ink">
                          {e.name[locale]}
                        </h4>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/50">
                          {e.location[locale]}
                        </p>
                      </div>
                      <p className="text-sm text-ink-soft leading-relaxed">
                        {e.focus[locale]}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href={`/${locale}/about/entities`}
              className="inline-flex items-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-white/80 transition"
            >
              {copy.viewAllEntities} →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-narrow">
          <div className="rounded-3xl bg-ink text-white p-10 md:p-14 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="text-display-sm leading-tight">
                {copy.ctaTitle}
              </h2>
              <p className="mt-3 text-white/70 max-w-xl leading-relaxed">
                {copy.ctaBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href={`/${locale}/programs/batch`}
                className="inline-flex items-center rounded-full bg-spark-yellow px-6 py-3 text-sm font-semibold text-ink hover:bg-spark-yellow/90 transition"
              >
                {copy.ctaBatch}
              </Link>
              <Link
                href={`/${locale}/programs/partnership`}
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
              >
                {copy.ctaPartnership}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const content = {
  ko: {
    eyebrow: 'Global Program · 6대륙 네트워크',
    heroTitle: '6대륙에서 동시에 움직이는 스파크랩 글로벌 프로그램.',
    heroSubcopy:
      '한국 본사의 단일 프로그램이 아닙니다. 6대륙 8개 엔티티가 각 지역에서 독립적으로 운영하는 액셀러레이터·펀드·오픈콜을 한눈에 확인할 수 있는 통합 허브입니다.',
    statEntities: '글로벌 엔티티',
    statContinents: '대륙',
    statPortfolio: '포트폴리오',
    statFounded: '설립',

    openCallsEyebrow: 'Open Calls',
    openCallsTitle: '지금 모집 중인 글로벌 프로그램.',
    openCallsSubcopy:
      '각 엔티티가 운영하는 프로그램의 현재 모집 공고입니다. 모집 소식은 수시로 업데이트되며, 지원 기한·조건은 각 공고에서 확인해주세요.',
    openCallsEmpty:
      '현재 예정된 오픈콜이 없습니다. 새로운 모집 소식은 Announcements 채널을 통해 가장 먼저 공유됩니다.',
    viewAllAnnouncements: '모든 Announcements 보기',

    directoryEyebrow: 'Entity Directory',
    directoryTitle: '각 엔티티가 운영하는 프로그램을 살펴보세요.',
    directorySubcopy:
      '지역·산업·단계별로 각자의 강점을 가진 엔티티들이 독립적으로 프로그램을 운영합니다. 자세한 엔티티 소개는 About 페이지에서 확인할 수 있습니다.',
    entityWord: '개 엔티티',
    viewAllEntities: '엔티티 상세 페이지로',

    ctaTitle: '어떤 프로그램이 우리 팀에 맞을까요?',
    ctaBody:
      '창업가라면 Batch Program, 조직이라면 Partnership Program이 시작점입니다. 글로벌 엔티티의 특수 트랙이 필요하다면 각 엔티티로 직접 연결해 드립니다.',
    ctaBatch: 'Batch Program',
    ctaPartnership: 'Partnership Program',
  },
  en: {
    eyebrow: 'Global Program · 6-Continent Network',
    heroTitle: 'SparkLabs programs, running on six continents simultaneously.',
    heroSubcopy:
      'Not a single HQ program. 8 entities across 6 continents each run their own accelerators, funds, and open calls — this page is the unified hub where you can see them all.',
    statEntities: 'Global entities',
    statContinents: 'Continents',
    statPortfolio: 'Portfolio',
    statFounded: 'Founded',

    openCallsEyebrow: 'Open Calls',
    openCallsTitle: 'Programs currently open for applications.',
    openCallsSubcopy:
      'Active open calls across our entities. Updated continuously — check each announcement for deadlines and eligibility.',
    openCallsEmpty:
      'No open calls at the moment. New calls are shared first on our Announcements channel.',
    viewAllAnnouncements: 'View all announcements',

    directoryEyebrow: 'Entity Directory',
    directoryTitle: 'Explore the programs each entity runs.',
    directorySubcopy:
      'Each entity runs programs independently, shaped by their region, industry, and stage specialties. For deeper entity profiles, head to the About page.',
    entityWord: 'entities',
    viewAllEntities: 'Go to entity details',

    ctaTitle: 'Which program is right for your team?',
    ctaBody:
      'Founders start with Batch. Organizations start with Partnership. Need a specialized track from a specific entity? We\'ll route you directly.',
    ctaBatch: 'Batch Program',
    ctaPartnership: 'Partnership Program',
  },
} as const;
