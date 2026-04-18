import { setRequestLocale } from 'next-intl/server';
import { coFounders, entityPartners } from '@/lib/team';
import { entities } from '@/lib/entities';
import type { Locale } from '@/lib/content';

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

  return (
    <>
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
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">{copy.coFoundersEyebrow}</span>
              <h2 className="mt-3 text-display-md text-ink">
                {copy.coFoundersTitle}
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {coFounders.map((p) => (
              <article
                key={p.slug}
                className="card-light flex flex-col gap-4 p-8"
              >
                <div className={`h-1.5 w-12 rounded-full bg-spark-${accentFor(p.entity)}`} />
                <div>
                  <h3 className="text-xl font-semibold text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {p.title[locale]}
                  </p>
                </div>
                <p className="text-ink-soft leading-relaxed">
                  {p.bio[locale]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <span className="eyebrow">{copy.partnersEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">
            {copy.partnersTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.partnersSubcopy}
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {entityPartners.map((p) => (
              <article
                key={p.slug}
                className="rounded-2xl border border-surface-border bg-white p-6 transition hover:shadow-card"
              >
                <div className={`h-1 w-10 rounded-full bg-spark-${accentFor(p.entity)}`} />
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/50">
                  {p.title[locale]}
                </p>
                <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                  {p.bio[locale]}
                </p>
              </article>
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
    heroTitle: '창업가를 가장 잘 이해하는 팀.',
    heroSubcopy:
      '스파크랩의 모든 파트너는 직접 회사를 세워본 창업가입니다. 투자 판단 뒤에는 성공과 실패를 함께 겪어온 경험의 무게가 실려 있습니다.',
    coFoundersEyebrow: 'Co-founders',
    coFoundersTitle: '스파크랩을 만든 네 명의 창업가',
    partnersEyebrow: 'Regional Partners',
    partnersTitle: '각 지역을 이끄는 매니징 파트너',
    partnersSubcopy:
      '스파크랩의 글로벌 네트워크는 각 지역을 깊이 이해하는 현지 파트너가 독립적으로 운영합니다. 대만·사우디·호주 등 각 시장의 관록 있는 운영자들이 포트폴리오사의 해외 진출을 직접 뒷받침합니다.',
  },
  en: {
    eyebrow: 'Team',
    heroTitle: 'Operators who understand founders best.',
    heroSubcopy:
      "Every SparkLabs partner has been a founder. Every investment decision carries the weight of having built and scaled companies through both success and failure.",
    coFoundersEyebrow: 'Co-founders',
    coFoundersTitle: 'The four founders who built SparkLabs',
    partnersEyebrow: 'Regional Partners',
    partnersTitle: 'Managing partners leading each region',
    partnersSubcopy:
      "Our global network is run by local partners who know their markets deeply. Seasoned operators across Taiwan, Saudi Arabia, Australia, and beyond directly back our portfolio companies' expansion into each region.",
  },
} as const;
