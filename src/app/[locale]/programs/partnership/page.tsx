import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    key: 'programsPartnership',
    path: '/programs/partnership',
  });
}

export default async function PartnershipProgramPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const copy = content[locale];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-spark-blue/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-[520px] w-[520px] rounded-full bg-spark-violet/30 blur-3xl"
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

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:partnership@sparklabs.co.kr"
              className="inline-flex items-center rounded-full bg-spark-yellow px-6 py-3 text-sm font-semibold text-ink hover:bg-spark-yellow/90 transition"
            >
              {copy.ctaCollaborate}
            </a>
            <Link
              href={`/${locale}/programs/batch`}
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
            >
              {copy.ctaBatch}
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="section">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] items-start">
            <div>
              <span className="eyebrow">{copy.vsEyebrow}</span>
              <h2 className="mt-3 text-display-md text-ink">{copy.vsTitle}</h2>
              <p className="mt-5 text-ink-soft leading-relaxed">{copy.vsSubcopy}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {copy.vsCards.map((card, i) => {
                const isBatch = i === 0;
                return (
                  <article
                    key={card.title}
                    className={
                      isBatch
                        ? 'rounded-2xl border border-surface-border bg-white p-6'
                        : 'rounded-2xl bg-ink text-white p-6 border border-ink'
                    }
                  >
                    <p
                      className={
                        'text-xs uppercase tracking-[0.14em] ' +
                        (isBatch ? 'text-ink/50' : 'text-spark-yellow')
                      }
                    >
                      {card.kicker}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                      {card.points.map((p) => (
                        <li
                          key={p}
                          className={
                            'flex gap-2 ' +
                            (isBatch ? 'text-ink-soft' : 'text-white/80')
                          }
                        >
                          <span
                            className={
                              isBatch
                                ? 'text-ink/40'
                                : 'text-spark-yellow'
                            }
                          >
                            ›
                          </span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4 THRUSTS */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <span className="eyebrow">{copy.thrustsEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.thrustsTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.thrustsSubcopy}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {copy.thrusts.map((t, i) => {
              const accents = ['blue', 'violet', 'green', 'orange'] as const;
              const accent = accents[i];
              return (
                <article
                  key={t.title}
                  className="card-light p-8 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`h-1.5 w-12 rounded-full bg-spark-${accent}`} />
                      <h3 className="mt-4 text-xl font-semibold text-ink">
                        {t.title}
                      </h3>
                    </div>
                    <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-ink/50">
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-ink-soft leading-relaxed">{t.body}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {t.examples.map((ex) => (
                      <li
                        key={ex}
                        className="rounded-full border border-surface-border bg-white px-3 py-1 text-xs text-ink-soft"
                      >
                        {ex}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.howEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.howTitle}
          </h2>

          <ol className="mt-12 grid gap-5 md:grid-cols-4">
            {copy.howSteps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl border border-surface-border bg-white p-6"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white text-sm font-semibold">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section bg-hero-navy text-white">
        <div className="container-narrow">
          <span className="eyebrow !text-spark-yellow">{copy.partnersEyebrow}</span>
          <h2 className="mt-3 text-display-md max-w-3xl leading-[1.1]">
            {copy.partnersTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
            {copy.partnersSubcopy}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {copy.partnerGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-spark-yellow">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {group.names.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-narrow">
          <div className="rounded-3xl bg-ink text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-display-sm leading-tight max-w-xl">
                {copy.ctaTitle}
              </h2>
              <p className="mt-3 text-white/70 max-w-xl leading-relaxed">
                {copy.ctaBody}
              </p>
            </div>
            <a
              href="mailto:partnership@sparklabs.co.kr"
              className="inline-flex items-center rounded-full bg-spark-yellow px-6 py-3 text-sm font-semibold text-ink hover:bg-spark-yellow/90 transition"
            >
              {copy.ctaCollaborate}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const content = {
  ko: {
    eyebrow: 'Partnership Program · 기업·정부·대학 파트너',
    heroTitle:
      '기업·정부·대학과 함께 만드는, 오픈 이노베이션 파트너십 프로그램.',
    heroSubcopy:
      '단일한 표준 프로그램이 아니라, 파트너사의 혁신 목표에 맞춰 스파크랩이 공동 설계·운영하는 맞춤형 액셀러레이션. 글로벌 기술 기업부터 정부 부처, 대학까지 50+ 파트너와 프로그램을 운영해왔습니다.',
    ctaCollaborate: 'Collaborate with Us',
    ctaBatch: 'Batch Program 보기',

    vsEyebrow: 'Batch vs. Partnership',
    vsTitle: 'Batch와는 시작점이 다릅니다.',
    vsSubcopy:
      'Batch Program이 스파크랩이 직접 창업가를 발굴해 투자·액셀러레이션하는 프로그램이라면, Partnership Program은 기업·정부·대학의 혁신 과제로부터 출발해 함께 창업가를 찾고, 함께 키우는 협업형 프로그램입니다.',
    vsCards: [
      {
        kicker: 'Batch Program',
        title: 'For Founders',
        points: [
          '창업가 본인이 직접 지원',
          '스파크랩의 자본과 파트너 네트워크 중심',
          '22주 / PMF 달성이 목표',
          '표준화된 프로그램 구조',
        ],
      },
      {
        kicker: 'Partnership Program',
        title: 'For Corporates · Gov · Universities',
        points: [
          '파트너사의 혁신 목표에 맞춰 공동 설계',
          '파트너 자원·채널·데이터와 결합된 오픈이노베이션',
          '기간·규모·포맷 모두 맞춤 설계',
          '글로벌 시장 진출·규제 대응까지 연계',
        ],
      },
    ],

    thrustsEyebrow: 'Four Partnership Thrusts',
    thrustsTitle: '4가지 트랙으로 파트너사의 혁신 목표에 맞게 프로그램을 설계합니다.',
    thrustsSubcopy:
      '같은 목표를 가진 파트너는 없습니다. 각 파트너사의 산업·단계·목표에 따라 4가지 트랙 중 하나, 혹은 혼합형으로 프로그램을 설계합니다.',
    thrusts: [
      {
        title: 'Global Partnership',
        tag: 'Go-to-Market',
        body:
          '글로벌 진출이 필요한 스타트업과 해외 파트너를 연결합니다. 스파크랩의 6대륙 엔티티 네트워크와 현지 고객·투자자 풀을 활용한 시장 진입 프로그램.',
        examples: ['Google for Startups', 'Mercedes-Benz', 'Meta'],
      },
      {
        title: 'Open Innovation',
        tag: 'Corporate',
        body:
          '대기업의 기술·사업 과제에 맞는 스타트업을 발굴·검증하고, PoC부터 전략적 투자까지 이어지는 구조. 산업별 맞춤 오픈이노베이션.',
        examples: ['Samsung', 'LG', '대기업 CVC'],
      },
      {
        title: 'Local & Regional',
        tag: 'Government',
        body:
          '지자체·정부 부처와 함께 지역 거점 스타트업 생태계를 구축. 지역 산업과 스파크랩의 글로벌 네트워크를 연결하는 브릿지 프로그램.',
        examples: ['포항시', 'Saudi MCIT', '지역 TIPS'],
      },
      {
        title: 'Scale-Up',
        tag: 'Universities · Labs',
        body:
          '대학·연구기관의 기술과 창업가를 연결해 스케일업 단계까지 지원. 기술창업·딥테크에 특화된 공동 운영 프로그램.',
        examples: ['KAIST', 'Handong', 'SNUH'],
      },
    ],

    howEyebrow: 'How We Work Together',
    howTitle: '목표 정렬부터 프로그램 런칭까지, 4단계 협업 프레임워크.',
    howSteps: [
      {
        title: '① 전략 얼라인먼트',
        body: '파트너사의 혁신 목표·산업 범위·성공 지표를 함께 정의합니다.',
      },
      {
        title: '② 프로그램 설계',
        body: '트랙·기간·지원 규모·선발 기준을 공동 설계하고 운영 구조를 확정합니다.',
      },
      {
        title: '③ 모집 & 선발',
        body: '스파크랩 포트폴리오·글로벌 네트워크와 파트너 채널을 통해 스타트업을 모집·선발합니다.',
      },
      {
        title: '④ 실행 & 성과 관리',
        body: '프로그램 운영, 주간 리포팅, PoC·투자·채용 성과를 추적하고 리뷰합니다.',
      },
    ],

    partnersEyebrow: 'Trusted By',
    partnersTitle: '글로벌 기업, 정부, 대학과 함께해 왔습니다.',
    partnersSubcopy:
      '지난 10+년간 산업·지역·섹터별로 스타트업과 파트너를 연결한 프로그램을 운영해왔습니다. 대표 파트너사를 소개합니다.',
    partnerGroups: [
      {
        label: 'Global Corporates',
        names: [
          'Google for Startups',
          'Mercedes-Benz',
          'Meta',
          'Salesforce',
          'AWS',
        ],
      },
      {
        label: 'Korean Conglomerates',
        names: ['Samsung', 'LG', 'SK', 'Hyundai', 'KB Financial Group'],
      },
      {
        label: 'Government & Academia',
        names: [
          'Saudi MCIT',
          '포항시 · Pohang TP',
          'KAIST',
          'Handong Global University',
          'SNUH · Yonsei',
        ],
      },
    ],

    ctaTitle: '우리 조직의 혁신 과제를 스타트업과 함께 풀고 싶다면.',
    ctaBody:
      '스파크랩 파트너십 팀이 30분 안에 초기 협의 미팅을 잡아 드립니다. 아직 프로그램 형태가 정해지지 않았어도 괜찮습니다.',
  },
  en: {
    eyebrow: 'Partnership Program · Corporates · Gov · Universities',
    heroTitle:
      'Open-innovation programs we co-design with corporates, governments and universities.',
    heroSubcopy:
      'Not a single templated program — each partnership is custom-built around your innovation goals and powered by SparkLabs\' global network. We have co-run programs with 50+ partners over the past decade.',
    ctaCollaborate: 'Collaborate with Us',
    ctaBatch: 'View Batch Program',

    vsEyebrow: 'Batch vs. Partnership',
    vsTitle: 'Where Batch ends, Partnership begins.',
    vsSubcopy:
      'Batch is founder-first: we source, invest and accelerate. Partnership is organization-first: your innovation agenda is the starting point, and together we find and build the right startups around it.',
    vsCards: [
      {
        kicker: 'Batch Program',
        title: 'For Founders',
        points: [
          'Founders apply directly',
          'Powered by SparkLabs capital and partner network',
          '22 weeks, focused on PMF',
          'Standardized program structure',
        ],
      },
      {
        kicker: 'Partnership Program',
        title: 'For Corporates · Gov · Universities',
        points: [
          'Co-designed around your innovation goals',
          'Open innovation powered by your assets and channels',
          'Length, scale and format fully customized',
          'Connected to global market entry and regulatory pathways',
        ],
      },
    ],

    thrustsEyebrow: 'Four Partnership Thrusts',
    thrustsTitle:
      'Four tracks to match the shape of your innovation agenda.',
    thrustsSubcopy:
      'No two partners have the same goal. We design programs along four tracks — standalone or combined — based on your industry, stage, and objectives.',
    thrusts: [
      {
        title: 'Global Partnership',
        tag: 'Go-to-Market',
        body:
          'Connect startups to global partners. Market-entry programs powered by SparkLabs\' 6-continent entity network and local customer / investor access.',
        examples: ['Google for Startups', 'Mercedes-Benz', 'Meta'],
      },
      {
        title: 'Open Innovation',
        tag: 'Corporate',
        body:
          'Source and validate startups for corporate innovation agendas — from PoC through strategic investment. Industry-tailored open-innovation programs.',
        examples: ['Samsung', 'LG', 'Corporate CVCs'],
      },
      {
        title: 'Local & Regional',
        tag: 'Government',
        body:
          'Build regional startup ecosystems with local governments. A bridge between regional industry and the SparkLabs global network.',
        examples: ['Pohang City', 'Saudi MCIT', 'Regional TIPS'],
      },
      {
        title: 'Scale-Up',
        tag: 'Universities · Labs',
        body:
          'Bring university IP and founder talent to scale-up stage. Jointly operated programs specialized in deep-tech and research-originated ventures.',
        examples: ['KAIST', 'Handong', 'SNUH'],
      },
    ],

    howEyebrow: 'How We Work Together',
    howTitle: 'A 4-step partnership framework — from alignment to launch.',
    howSteps: [
      {
        title: '① Strategic Alignment',
        body: 'Define your innovation goals, industry scope, and success metrics together.',
      },
      {
        title: '② Program Design',
        body: 'Co-design the track, timeline, funding scale and selection criteria. Lock the operating model.',
      },
      {
        title: '③ Sourcing & Selection',
        body: 'Recruit and select startups through the SparkLabs portfolio, our global network, and your partner channels.',
      },
      {
        title: '④ Execution & Outcomes',
        body: 'Run the program, weekly reporting, and track real outcomes — PoCs, investments, hires.',
      },
    ],

    partnersEyebrow: 'Trusted By',
    partnersTitle: 'Global corporates, governments, and universities.',
    partnersSubcopy:
      'Over the past 10+ years, we have run programs across industries, regions, and sectors. A snapshot of our partners.',
    partnerGroups: [
      {
        label: 'Global Corporates',
        names: [
          'Google for Startups',
          'Mercedes-Benz',
          'Meta',
          'Salesforce',
          'AWS',
        ],
      },
      {
        label: 'Korean Conglomerates',
        names: ['Samsung', 'LG', 'SK', 'Hyundai', 'KB Financial Group'],
      },
      {
        label: 'Government & Academia',
        names: [
          'Saudi MCIT',
          'Pohang City · Pohang TP',
          'KAIST',
          'Handong Global University',
          'SNUH · Yonsei',
        ],
      },
    ],

    ctaTitle: 'Want to solve an innovation agenda with startups?',
    ctaBody:
      'Our partnership team can set up a 30-minute discovery call. No formal program shape required yet — ideas are enough.',
  },
} as const;
