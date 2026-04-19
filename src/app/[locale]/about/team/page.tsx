import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import {
  coFounders,
  entityPartners,
  venturePartners,
  teamByDivision,
} from '@/lib/team';
import { entities } from '@/lib/entities';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';
import PersonCard from '@/components/team/PersonCard';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'team', path: '/about/team' });
}

export default async function AboutTeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const copy = content[locale];

  const accentFor = (slug: string) =>
    entities.find((e) => e.slug === slug)?.accent ?? 'blue';

  // Total count across all divisions (for stat display)
  const fullTeamCount =
    coFounders.length +
    venturePartners.length +
    teamByDivision.reduce((sum, div) => sum + div.members.length, 0);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-spark-ray blur-3xl opacity-80"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-20 md:py-24">
          <span className="eyebrow !text-spark-yellow">{copy.eyebrow}</span>
          <h1 className="mt-4 text-display-lg max-w-3xl leading-[1.05]">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {copy.heroSubcopy}
          </p>
          <div className="mt-10 flex flex-wrap gap-8 text-sm">
            <div>
              <div className="text-4xl font-semibold">
                {coFounders.length + entityPartners.length}
              </div>
              <p className="mt-1 text-white/70">{copy.stat1}</p>
            </div>
            <div>
              <div className="text-4xl font-semibold">
                {venturePartners.length}
              </div>
              <p className="mt-1 text-white/70">{copy.stat2}</p>
            </div>
            <div>
              <div className="text-4xl font-semibold">{fullTeamCount}+</div>
              <p className="mt-1 text-white/70">{copy.stat3}</p>
            </div>
          </div>
          <p className="mt-8 text-xs text-white/50">{copy.clickHint}</p>
        </div>
      </section>

      {/* Co-founders & Partners */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.coFoundersEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">
            {copy.coFoundersTitle}
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {coFounders.map((p) => (
              <PersonCard
                key={p.slug}
                name={p.name}
                koName={p.koName}
                title={p.title[locale]}
                bio={p.bio?.[locale]}
                photo={p.photo}
                slug={p.slug}
                accent={accentFor(p.entity)}
                size="sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Regional / Entity Partners */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <span className="eyebrow">{copy.partnersEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">
            {copy.partnersTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.partnersSubcopy}
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {entityPartners.map((p) => (
              <PersonCard
                key={p.slug}
                name={p.name}
                koName={p.koName}
                title={p.title[locale]}
                bio={p.bio?.[locale]}
                photo={p.photo}
                slug={p.slug}
                accent={accentFor(p.entity)}
                size="sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Venture Partners */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.ventureEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">{copy.ventureTitle}</h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.ventureSubcopy}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {venturePartners.map((p) => (
              <PersonCard
                key={p.slug}
                name={p.name}
                koName={p.koName}
                title={p.title[locale]}
                bio={p.bio?.[locale]}
                photo={p.photo}
                slug={p.slug}
                accent="orange"
                size="sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full Team by Division */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <span className="eyebrow">{copy.fullTeamEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">
            {copy.fullTeamTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.fullTeamSubcopy}
          </p>

          <div className="mt-12 space-y-12">
            {teamByDivision.map((div) => (
              <div key={div.slug}>
                <div className="border-b border-surface-border pb-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/70">
                    {div.title[locale]}
                  </h3>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {div.members.map((m) => (
                    <PersonCard
                      key={m.slug}
                      name={m.name}
                      koName={m.koName}
                      title={m.title[locale]}
                      bio={m.bio?.[locale]}
                      photo={m.photo}
                      slug={m.slug}
                      accent="yellow"
                      size="sm"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const content = {
  ko: {
    eyebrow: 'Team',
    heroTitle: '스파크랩의 목표는 스타트업 모든 스테이지의 동반자가 되는 것입니다.',
    heroSubcopy:
      '공동창업자·파트너부터 벤처 파트너, 투자·액셀러레이션·혁신·운영 실무진까지 — 40여 명의 스파크랩 팀이 각 포트폴리오사의 성장을 끝까지 함께합니다.',
    clickHint: '사진을 클릭하면 상세 약력을 확인할 수 있습니다.',
    stat1: '파트너',
    stat2: '벤처 파트너',
    stat3: '전체 팀',
    coFoundersEyebrow: 'Partners',
    coFoundersTitle: '스파크랩을 이끄는 파트너',
    partnersEyebrow: 'Regional Partners',
    partnersTitle: '각 지역을 이끄는 매니징 파트너',
    partnersSubcopy:
      '스파크랩의 글로벌 네트워크는 각 지역을 깊이 이해하는 현지 파트너가 독립적으로 운영합니다. 대만·사우디·호주 등 각 시장의 관록 있는 운영자들이 포트폴리오사의 해외 진출을 직접 뒷받침합니다.',
    ventureEyebrow: 'Venture Partners',
    ventureTitle: '벤처 파트너',
    ventureSubcopy:
      '산업·기능별 전문성을 바탕으로 스파크랩의 투자 판단과 포트폴리오사 성장에 깊이 관여하는 벤처 파트너입니다.',
    fullTeamEyebrow: 'Full Team',
    fullTeamTitle: '투자·액셀러레이션·운영을 함께 만드는 실무진',
    fullTeamSubcopy:
      '스파크랩 코리아의 일상적인 투자·액셀러레이션·운영은 전담 디비전 팀이 함께 만들어 갑니다. 직접 만나보는 실무진들의 현업 전문성이 스파크랩의 실행력을 만듭니다.',
    peopleWord: '명',
  },
  en: {
    eyebrow: 'Team',
    heroTitle: 'SparkLabs exists to stand with founders at every stage.',
    heroSubcopy:
      'From co-founders and partners to venture partners and the working teams across investment, acceleration, innovation, and operations — the 40+ people of SparkLabs show up for every portfolio company.',
    clickHint: 'Click any photo to read the full bio.',
    stat1: 'Partners',
    stat2: 'Venture partners',
    stat3: 'Team members',
    coFoundersEyebrow: 'Partners',
    coFoundersTitle: 'The partners leading SparkLabs',
    partnersEyebrow: 'Regional Partners',
    partnersTitle: 'Managing partners leading each region',
    partnersSubcopy:
      "Our global network is run by local partners who know their markets deeply. Seasoned operators across Taiwan, Saudi Arabia, Australia, and beyond directly back our portfolio companies' expansion into each region.",
    ventureEyebrow: 'Venture Partners',
    ventureTitle: 'Venture partners',
    ventureSubcopy:
      "Industry and functional experts deeply engaged in SparkLabs' investment decisions and portfolio support.",
    fullTeamEyebrow: 'Full Team',
    fullTeamTitle: 'The working teams that deliver every day',
    fullTeamSubcopy:
      "SparkLabs Korea's day-to-day investment, acceleration, and operations are delivered by dedicated divisions. The operators you'll actually work with — organized by the teams they run.",
    peopleWord: 'people',
  },
} as const;
