import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';
import { StatLine } from '@/components/home/stat-line';
import { Reveal } from '@/components/ui/reveal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'programsBatch', path: '/programs/batch' });
}

const NEWSLETTER_URL = 'https://page.stibee.com/subscriptions/244667';

const phaseAccents = [
  'text-spark-orange',
  'text-spark-pink',
  'text-spark-blue',
  'text-spark-green',
] as const;

export default async function BatchProgramPage({
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
      <header className="bg-white">
        <div className="container-narrow">
          <div className="grid items-center gap-10 pb-14 pt-10 md:gap-12 md:pb-20 md:pt-24 lg:grid-cols-[1fr_.9fr] lg:gap-16">
            <div>
              <span className="eyebrow text-spark-pink">{copy.heroLabel}</span>
              <h1 className="mt-6 font-display text-[clamp(42px,5.8vw,74px)] font-extrabold leading-[1] tracking-[-0.045em]">
                15 weeks.
                <br />
                <span className="font-normal text-muted">
                  One goal: <span className="spark-hl text-ink">PMF</span>.
                </span>
              </h1>
              <p className="mt-7 max-w-[560px] text-[16.5px] text-muted">
                {copy.heroSub}
              </p>
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary mt-10"
              >
                {copy.ctaAlerts}
              </a>
            </div>
            <Reveal className="photo-hover">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/programs/batch-hero.png"
                  alt={copy.heroImageAlt}
                  fill
                  sizes="(max-width: 880px) 100vw, 45vw"
                  className="photo-mono object-cover"
                  priority
                />
              </div>
              <span className="mono-cap mt-3 block font-display tracking-[0.22em]">
                Batch in Session — SparkLabs Seoul
              </span>
            </Reveal>
          </div>
        </div>
        <StatLine compact stats={copy.stats} />
      </header>

      {/* 4 PHASES */}
      <section className="section">
        <div className="container-narrow">
          <Reveal className="mb-10 max-w-[640px] md:mb-20">
            <span className="eyebrow text-spark-orange">{copy.phasesLabel}</span>
            <h2 className="mt-5 font-display text-display-lg">
              {copy.phasesTitle}
              <br />
              <span className="font-normal text-muted">{copy.phasesTitleThin}</span>
            </h2>
            <p className="mt-4 max-w-[560px] text-[16.5px] text-muted">
              {copy.phasesSub}
            </p>
          </Reveal>
          <div className="ink-rule">
            {copy.phases.map((phase, i) => (
              <Reveal
                key={phase.name}
                className="grid items-baseline gap-2.5 border-b border-surface-border px-1 py-7 transition-all duration-200 hover:bg-surface-subtle hover:pl-4 md:grid-cols-[110px_1fr_1.6fr] md:gap-10 md:py-10"
              >
                <span
                  className={`font-display text-xs font-semibold tracking-[0.2em] ${phaseAccents[i]}`}
                >
                  PHASE 0{i + 1}
                </span>
                <h3 className="font-display text-[22px] font-bold tracking-[-0.025em]">
                  {phase.name}
                </h3>
                <p className="text-[14.5px] text-muted">{phase.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-y border-surface-border bg-surface-subtle py-16 md:py-32">
        <div className="container-narrow">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="eyebrow text-spark-blue">{copy.offerLabel}</span>
              <h2 className="mt-5 font-display text-display-lg">
                {copy.offerTitle}
                <br />
                <span className="font-normal text-muted">{copy.offerTitleThin}</span>
              </h2>
              {copy.offerBody.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mt-6 text-[16.5px] text-muted [&_strong]:font-semibold [&_strong]:text-ink"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </Reveal>
            <Reveal className="ink-rule">
              {copy.offerItems.map((item, i) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[56px_1fr] gap-5 border-b border-surface-border px-1 py-7 transition-all duration-200 hover:bg-white hover:pl-3.5"
                >
                  <span className="pt-1 font-display text-xs font-semibold tracking-[0.14em] text-spark-blue">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[16.5px] font-bold tracking-[-0.015em]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted">{item.body}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="section">
        <div className="container-narrow">
          <Reveal className="mb-10 max-w-[640px] md:mb-20">
            <span className="eyebrow text-spark-green">{copy.timelineLabel}</span>
            <h2 className="mt-5 font-display text-display-lg">
              {copy.timelineTitle}{' '}
              <span className="font-normal text-muted">{copy.timelineTitleThin}</span>
            </h2>
          </Reveal>
          <div className="ink-rule">
            {copy.timeline.map((step, i) => (
              <Reveal
                key={step.title}
                className="grid items-baseline gap-2.5 border-b border-surface-border px-1 py-6 transition-all duration-200 hover:bg-surface-subtle hover:pl-4 md:grid-cols-[110px_1fr_1.6fr] md:gap-10 md:py-8"
              >
                <span className="font-display text-[11.5px] font-semibold uppercase tracking-[0.22em] text-spark-blue">
                  Step 0{i + 1}
                </span>
                <h3 className="font-display text-[20px] font-bold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-[14.5px] text-muted">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 md:pb-32">
        <div className="container-narrow">
          <div className="max-w-[800px]">
            <Reveal className="mb-10 md:mb-14">
              <span className="eyebrow text-spark-pink">FAQ</span>
              <h2 className="mt-5 font-display text-display-lg">
                {copy.faqTitle}{' '}
                <span className="font-normal text-muted">{copy.faqTitleThin}</span>
              </h2>
            </Reveal>
            <div className="ink-rule">
              {copy.faq.map((item, i) => (
                <details key={item.q} className="group border-b border-surface-border" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-1 py-6 font-display text-[16.5px] font-semibold tracking-[-0.01em] transition-colors hover:text-spark-pink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      className="shrink-0 text-xl font-light text-spark-pink transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="max-w-[620px] px-1 pb-7 text-[15px] text-muted">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
            <Reveal className="mt-12">
              <Link href="/apply" className="tlink">
                {copy.faqMore} →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-left text-white md:py-36 md:text-center">
        <div className="container-narrow">
          <Reveal as="span" className="eyebrow inline-block text-spark-orange">
            Batch Program
          </Reveal>
          <Reveal
            as="h2"
            className="mt-6 font-display text-[clamp(32px,5vw,62px)] font-extrabold leading-[1.05] tracking-[-0.04em] md:mx-auto"
          >
            Your aha moment
            <br />
            <span className="font-normal text-white/55">starts here.</span>
          </Reveal>
          <Reveal as="p" className="mt-5 max-w-[440px] text-[16.5px] text-white/60 md:mx-auto">
            {copy.ctaSub}
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap items-center justify-start gap-x-7 gap-y-5 md:mt-11 md:justify-center">
            <a
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-accent"
            >
              {copy.ctaAlerts}
            </a>
            <Link href="/apply" className="tlink-light">
              {copy.ctaApply} →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const content = {
  ko: {
    heroLabel: 'Our Program — Batch',
    heroSub:
      '스파크랩 배치 프로그램은 성공 공식을 전달하는 교육이 아닙니다. 13년, 320개 이상의 포트폴리오 코칭 경험으로 설계된, 스타트업 성장을 위한 맞춤형 액셀러레이팅입니다.',
    heroImageAlt: '스파크랩 배치 프로그램 현장',
    ctaAlerts: '모집 알림 신청하기',
    ctaApply: '지원 안내 보기',
    stats: [
      { value: '매년 4월 · 9월', label: 'Application' },
      { value: '₩1억+ · CPS/SAFE', label: 'Initial Check' },
      { value: '약 6%', label: 'Equity' },
      { value: '제한 없음', label: 'Sector' },
    ],
    phasesLabel: "What We'll Do Together",
    phasesTitle: '아하 모먼트를 향한',
    phasesTitleThin: '네 개의 Phase',
    phasesSub:
      '집요하게 사업의 본질과 고객에 파고들다 어느 순간 맞이하게 되는 아하 모먼트 — 그 희열을 경험해 보세요.',
    phases: [
      { name: 'Bootcamp', body: '약 2주간 현황을 분석하고 성장을 방해하는 요소를 제거합니다.' },
      { name: 'Spark Your Business', body: 'KPI를 설정하고 다음 단계로의 도약에 집중합니다. 매주 테스트와 밀착 멘토링이 이어집니다.' },
      { name: 'Traction Day', body: 'KPI 달성 여부를 점검하고 투자자를 설득할 IR 피치를 완성합니다.' },
      { name: 'Demoday', body: '비공개 데모데이를 통해 VC 미팅과 IR을 진행하며 후속 투자로 연결합니다.' },
    ],
    offerLabel: 'What You Get',
    offerTitle: '투자, 그 이상의',
    offerTitleThin: '파트너십',
    offerBody: [
      '스파크랩은 통상 <strong>전환우선주(CPS) 또는 SAFE</strong> 형태로 <strong>1억원 이상</strong>을 투자하며, 취득 지분은 약 6%입니다. 지분 비율과 투자액은 각 회사의 상황과 규모에 따라 탄력적으로 조율합니다.',
      '프로그램이 끝나도 관계는 끝나지 않습니다. 파트너, 멘토, 그리고 모든 기수의 창업가 네트워크가 계속 당신의 편에 섭니다.',
    ],
    offerItems: [
      { title: '1억원 이상 초기 투자', body: 'CPS 또는 SAFE, 약 6% 지분 — 회사 상황에 따라 탄력 조율' },
      { title: '전담 팀 & 멘토 파트너십', body: '창업가 출신 파트너와 멘토가 팀별로 밀착 지원' },
      { title: '글로벌 네트워크', body: '7개 글로벌 엔티티를 통한 해외 진출 브릿지' },
      { title: '창업가 커뮤니티', body: '320+ 포트폴리오와 역대 기수 대표들의 얼럼나이 네트워크' },
    ],
    timelineLabel: 'How to Join',
    timelineTitle: '지원부터 데모데이까지,',
    timelineTitleThin: '한눈에',
    timeline: [
      { title: '서류 접수', body: '매년 4월과 9월, 약 1.5개월간 지원서를 접수합니다.' },
      { title: '서류 심사 & 인터뷰', body: '최소 4주에 걸쳐 서류 심사와 심층 인터뷰를 진행합니다.' },
      { title: '최종 선발', body: '배치 기수로 최종 선발되면 투자 및 프로그램 참여가 확정됩니다.' },
      { title: '부트캠프 & 본 프로그램', body: '약 2주간의 부트캠프 후 15주 본 프로그램에서 PMF에 전념합니다.' },
      { title: '데모데이', body: '비공개 데모데이에서 VC 미팅과 IR을 진행하며 프로그램을 마무리합니다.' },
    ],
    faqTitle: '자주 묻는',
    faqTitleThin: '질문',
    faq: [
      {
        q: '최소 지원 자격이 뭔가요?',
        a: '법인 설립 3년 이내의 초기 단계 스타트업이 지원할 수 있습니다. 1인 스타트업은 지원이 불가합니다.',
      },
      {
        q: '어떤 분야에 투자하나요?',
        a: '커머스, B2B SaaS, 헬스케어, 게임, 딥테크, 푸드테크, AI, 프롭테크, 하드웨어 등 분야 제한 없이 유망한 스타트업에 투자합니다.',
      },
      {
        q: '프로그램 주요 일정이 어떻게 되나요?',
        a: '서류 접수(매년 4월·9월, 1.5개월간) → 서류 심사 및 인터뷰(최소 4주) → 최종 선발 → 부트캠프(약 2주) → 본 프로그램 → 데모데이 순으로 진행됩니다.',
      },
      {
        q: '투자 조건이 어떻게 되나요?',
        a: '통상 전환우선주(CPS) 또는 SAFE 형태로 1억원 이상 규모의 투자가 이뤄지며, 취득 지분은 약 6%입니다. 지분 비율과 투자액은 회사별 상황에 따라 탄력적으로 조율합니다.',
      },
    ],
    faqMore: '지원 안내 전체보기',
    ctaSub: '다음 배치 모집 소식을 가장 먼저 받아보세요.',
  },
  en: {
    heroLabel: 'Our Program — Batch',
    heroSub:
      'The SparkLabs Batch Program is not a lecture series on success formulas. It is tailored acceleration for startup growth, built on 13 years of coaching 320+ portfolio companies.',
    heroImageAlt: 'SparkLabs batch program in session',
    ctaAlerts: 'Get Application Alerts',
    ctaApply: 'How to Apply',
    stats: [
      { value: 'April · September', label: 'Application' },
      { value: 'KRW 100M+ · CPS/SAFE', label: 'Initial Check' },
      { value: '~6%', label: 'Equity' },
      { value: 'Open', label: 'Sector' },
    ],
    phasesLabel: "What We'll Do Together",
    phasesTitle: 'Four phases',
    phasesTitleThin: 'toward the aha moment',
    phasesSub:
      'Dig relentlessly into your business and your customers — until the aha moment arrives. Come experience that thrill.',
    phases: [
      { name: 'Bootcamp', body: 'Two weeks to analyze where you stand and remove whatever blocks growth.' },
      { name: 'Spark Your Business', body: 'Set KPIs and focus on the next leap. Weekly tests and close mentoring throughout.' },
      { name: 'Traction Day', body: 'Check KPI progress and complete an IR pitch that convinces investors.' },
      { name: 'Demoday', body: 'A private demo day of VC meetings and IR sessions that leads into follow-on funding.' },
    ],
    offerLabel: 'What You Get',
    offerTitle: 'A partnership',
    offerTitleThin: 'beyond investment',
    offerBody: [
      'SparkLabs typically invests <strong>KRW 100M or more</strong> in <strong>convertible preferred shares (CPS) or SAFE</strong> for roughly 6% equity. Both the check size and equity are adjusted flexibly to each company’s situation and scale.',
      'The relationship does not end with the program. Partners, mentors, and the founder network of every batch stay in your corner.',
    ],
    offerItems: [
      { title: 'KRW 100M+ initial investment', body: 'CPS or SAFE, ~6% equity — flexible to each company’s situation' },
      { title: 'Dedicated team & mentor partnership', body: 'Founder-turned-partner coaching, matched to each team' },
      { title: 'Global network', body: 'A bridge to overseas markets through 7 global entities' },
      { title: 'Founder community', body: 'An alumni network of 320+ portfolio companies and batch founders' },
    ],
    timelineLabel: 'How to Join',
    timelineTitle: 'From application to demo day,',
    timelineTitleThin: 'at a glance',
    timeline: [
      { title: 'Application', body: 'Applications open every April and September for about six weeks.' },
      { title: 'Review & interviews', body: 'Document review and in-depth interviews over at least four weeks.' },
      { title: 'Final selection', body: 'Selection into the batch confirms both investment and program participation.' },
      { title: 'Bootcamp & main program', body: 'A two-week bootcamp, then 15 weeks devoted to PMF in the main program.' },
      { title: 'Demoday', body: 'The program closes with VC meetings and IR at a private demo day.' },
    ],
    faqTitle: 'Frequently asked',
    faqTitleThin: 'questions',
    faq: [
      {
        q: 'What are the minimum requirements?',
        a: 'Early-stage startups incorporated within the last three years may apply. Solo-founder startups are not eligible.',
      },
      {
        q: 'Which sectors do you invest in?',
        a: 'We invest without sector limits — commerce, B2B SaaS, healthcare, gaming, deep tech, food tech, AI, proptech, hardware, and more.',
      },
      {
        q: 'What is the program schedule?',
        a: 'Applications (April & September, ~6 weeks) → review and interviews (4+ weeks) → final selection → bootcamp (~2 weeks) → main program → demo day.',
      },
      {
        q: 'What are the investment terms?',
        a: 'Typically KRW 100M or more via convertible preferred shares (CPS) or SAFE, for roughly 6% equity — adjusted flexibly per company.',
      },
    ],
    faqMore: 'See the full application guide',
    ctaSub: 'Be the first to hear when the next batch opens.',
  },
} as const;
