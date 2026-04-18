import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/lib/content';

export default async function SparkClawPage({
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
          className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-spark-yellow/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-[520px] w-[520px] rounded-full bg-spark-orange/20 blur-3xl"
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

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-spark-yellow/30 bg-spark-yellow/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-spark-yellow animate-pulse" />
            <span className="text-sm font-medium text-spark-yellow">
              {copy.statusBadge}
            </span>
          </div>
        </div>
      </section>

      {/* TEASER / 3 PILLARS */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.teaserEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.teaserTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.teaserSubcopy}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {copy.pillars.map((p, i) => {
              const accents = ['orange', 'yellow', 'red'] as const;
              const accent = accents[i];
              return (
                <article
                  key={p.title}
                  className="card-light p-8 flex flex-col gap-4"
                >
                  <div className={`h-1.5 w-12 rounded-full bg-spark-${accent}`} />
                  <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="text-ink-soft leading-relaxed">{p.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface-subtle">
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
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:sparkclaw@sparklabs.co.kr"
                className="inline-flex items-center rounded-full bg-spark-yellow px-6 py-3 text-sm font-semibold text-ink hover:bg-spark-yellow/90 transition"
              >
                {copy.ctaContact}
              </a>
              <Link
                href={`/${locale}/newsroom/announcements`}
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
              >
                {copy.ctaAnnouncements}
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
    eyebrow: 'Spark Claw · 산업·섹터 특화 트랙',
    heroTitle: '산업·섹터에 특화된 스파크랩의 선별 투자 트랙.',
    heroSubcopy:
      'Spark Claw는 특정 산업 과제와 섹터 테마에 초점을 맞춰, 스파크랩이 직접 발굴하고 깊이 있게 지원하는 선별형 프로그램입니다.',
    statusBadge: '2026 프로그램 상세는 곧 공개됩니다',

    teaserEyebrow: 'What to Expect',
    teaserTitle: '일반 액셀러레이터와는 다른 3가지 차별점.',
    teaserSubcopy:
      'Spark Claw는 “많은 팀”보다 “정확한 팀”을 찾습니다. 산업 전문가·전략 파트너·글로벌 LP가 함께 설계하는 선별형 트랙으로, 소수 팀에 집중된 자원을 제공합니다.',
    pillars: [
      {
        title: 'Curated, Not Open',
        body: '공개 모집이 아닌 산업 네트워크 기반의 선별형 선발. 해당 섹터의 톱티어 팀만 초청합니다.',
      },
      {
        title: 'Deep Industry Access',
        body: '산업 전문가·대기업 파트너·해외 구매자 네트워크까지, 일반 액셀러레이터가 닿지 못하는 곳까지 연결.',
      },
      {
        title: 'Tailored Support',
        body: '템플릿이 아닌 팀별 맞춤 지원. PoC·규제 대응·해외 진출까지 팀 상황에 맞게 설계합니다.',
      },
    ],

    ctaTitle: 'Spark Claw의 다음 프로그램을 가장 먼저 알고 싶다면.',
    ctaBody:
      '프로그램 런칭·모집 소식은 스파크랩 Announcements 채널을 통해 가장 먼저 공유됩니다. 파트너십·협업 문의는 팀에 직접 연락 주세요.',
    ctaContact: '팀에 문의하기',
    ctaAnnouncements: 'Announcements 보기',
  },
  en: {
    eyebrow: 'Spark Claw · Sector-Focused Track',
    heroTitle: 'SparkLabs\' curated, sector-focused investment track.',
    heroSubcopy:
      'Spark Claw is a selective program built around specific industry agendas and sector themes — sourced directly by SparkLabs, with deep operator support.',
    statusBadge: '2026 program details coming soon',

    teaserEyebrow: 'What to Expect',
    teaserTitle: 'Three ways Spark Claw differs from a standard accelerator.',
    teaserSubcopy:
      'Spark Claw is about the right team, not more teams. An invite-driven track designed with industry experts, strategic partners, and global LPs — concentrated resources on a small cohort.',
    pillars: [
      {
        title: 'Curated, Not Open',
        body: 'Invite-only sourcing through industry networks. Only top-tier teams within the sector are invited.',
      },
      {
        title: 'Deep Industry Access',
        body: 'Access to industry operators, corporate partners, and overseas customer networks — beyond what a standard accelerator reaches.',
      },
      {
        title: 'Tailored Support',
        body: 'No templates. Support is designed around each team — PoCs, regulatory navigation, global expansion.',
      },
    ],

    ctaTitle: 'Want to hear about the next Spark Claw program first?',
    ctaBody:
      'Program launches and open calls are announced first on our Announcements channel. For partnership or collaboration, reach out to the team directly.',
    ctaContact: 'Contact the team',
    ctaAnnouncements: 'View Announcements',
  },
} as const;
