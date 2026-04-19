import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import {
  boardOfAdvisors,
  fundAdvisors,
  featuredAdvisors,
} from '@/lib/team';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'advisors', path: '/about/advisors' });
}

export default async function AboutAdvisorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const copy = content[locale];

  // Group featured advisors by affiliation
  const featuredGroups = featuredAdvisors.reduce<
    Record<string, typeof featuredAdvisors>
  >((acc, advisor) => {
    (acc[advisor.affiliation] ||= []).push(advisor);
    return acc;
  }, {});
  const affiliationOrder = Object.keys(featuredGroups);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-spark-ray blur-3xl opacity-75"
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
              <div className="text-4xl font-semibold">150+</div>
              <p className="mt-1 text-white/70">{copy.stat1}</p>
            </div>
            <div>
              <div className="text-4xl font-semibold">20+</div>
              <p className="mt-1 text-white/70">{copy.stat2}</p>
            </div>
            <div>
              <div className="text-4xl font-semibold">8</div>
              <p className="mt-1 text-white/70">{copy.stat3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Advisors */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.boardEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">{copy.boardTitle}</h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.boardSubcopy}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {boardOfAdvisors.map((a) => (
              <article
                key={a.name}
                className="card-light p-6"
              >
                <div className="h-1 w-10 rounded-full bg-spark-yellow" />
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {a.name}
                  {a.koName && (
                    <span className="ml-2 text-sm font-normal text-ink-soft">
                      {a.koName}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                  {a.role[locale]}
                </p>
                {a.bio && (
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                    {a.bio[locale]}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Advisors */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <span className="eyebrow">{copy.fundEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">{copy.fundTitle}</h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.fundSubcopy}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {fundAdvisors.map((a) => (
              <article
                key={a.name}
                className="rounded-2xl border border-surface-border bg-white p-6"
              >
                <div className="h-1 w-8 rounded-full bg-spark-teal" />
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {a.name}
                  {a.koName && (
                    <span className="ml-2 text-sm font-normal text-ink-soft">
                      {a.koName}
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
                  {a.role[locale]}
                </p>
                {a.bio && (
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                    {a.bio[locale]}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured global advisors (150+ network highlights) */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.featuredEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">
            {copy.featuredTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.featuredSubcopy}
          </p>

          <div className="mt-12 space-y-12">
            {affiliationOrder.map((aff) => (
              <div key={aff}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
                  {aff}
                </h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {featuredGroups[aff].map((a) => (
                    <article
                      key={a.name}
                      className="rounded-2xl border border-surface-border bg-white p-5 transition hover:shadow-card"
                    >
                      <h4 className="text-base font-semibold text-ink">
                        {a.name}
                      </h4>
                      <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                        {a.role[locale]}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <div className="rounded-3xl bg-hero-navy text-white p-10 md:p-14">
            <h2 className="text-display-md max-w-2xl">{copy.ctaTitle}</h2>
            <p className="mt-4 max-w-xl text-white/75 leading-relaxed">
              {copy.ctaSubcopy}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const content = {
  ko: {
    eyebrow: 'Advisors & LPs',
    heroTitle: '스파크랩을 받쳐주는 세계적 네트워크.',
    heroSubcopy:
      '150명을 넘는 글로벌 어드바이저와 LP가 스파크랩의 투자 판단과 포트폴리오사의 성장을 지원합니다. 이들은 단순한 후원자가 아닌, 창업가와 직접 연결되는 멘토·고객·파트너입니다.',
    stat1: '글로벌 어드바이저',
    stat2: '참여 국가',
    stat3: '엔티티 공유 자산',
    boardEyebrow: 'Board of Advisors',
    boardTitle: '스파크랩 코리아 Board of Advisors',
    boardSubcopy:
      '스파크랩 코리아가 공식 자문 보드로 함께하는 다섯 명의 리더입니다. 구글·MIT·아리조나주립대 등 각 분야의 상징적 인물이 장기 자문으로 연결되어 있습니다.',
    fundEyebrow: 'Fund Advisors',
    fundTitle: '펀드 어드바이저',
    fundSubcopy:
      '스파크랩 코리아의 투자 전략·거버넌스를 함께 고민하는 여섯 명의 펀드 어드바이저입니다.',
    featuredEyebrow: 'Featured Network',
    featuredTitle: '글로벌 어드바이저 네트워크 (일부)',
    featuredSubcopy:
      '실리콘밸리 베테랑부터 MENA 테크 리더, 아카데미아 석학까지 — 150명 이상의 스파크랩 글로벌 네트워크 중 대표 인물을 소개합니다.',
    ctaTitle: '스파크랩 어드바이저·LP 네트워크에 함께하시겠습니까?',
    ctaSubcopy:
      '어드바이저·LP·파트너십 문의는 marketing@sparklabs.co.kr로 연락 바랍니다. 글로벌 창업가 생태계에 함께 기여할 동반자를 찾습니다.',
  },
  en: {
    eyebrow: 'Advisors & LPs',
    heroTitle: 'A world-class network behind every founder.',
    heroSubcopy:
      "Over 150 global advisors and LPs shape SparkLabs' investment decisions and accelerate our portfolio. These are not passive supporters — they are mentors, customers, and partners directly connected to our founders.",
    stat1: 'Global advisors',
    stat2: 'Countries represented',
    stat3: 'Entities shared across',
    boardEyebrow: 'Board of Advisors',
    boardTitle: 'SparkLabs Korea Board of Advisors',
    boardSubcopy:
      "The five figures who sit on SparkLabs Korea's official advisory board — long-term counsel spanning Google, MIT, Arizona State, and beyond.",
    fundEyebrow: 'Fund Advisors',
    fundTitle: 'Fund advisors',
    fundSubcopy:
      "Six advisors who help shape SparkLabs Korea's investment strategy and fund governance.",
    featuredEyebrow: 'Featured Network',
    featuredTitle: 'Global advisor network (a selection)',
    featuredSubcopy:
      'From Silicon Valley veterans to MENA tech leaders and academic luminaries — a curated view of our 150+ global advisor network.',
    ctaTitle: 'Interested in joining our advisor or LP network?',
    ctaSubcopy:
      'For advisor, LP, or partnership inquiries, please reach out to marketing@sparklabs.co.kr. We are always looking for partners who can contribute to the global founder ecosystem.',
  },
} as const;
