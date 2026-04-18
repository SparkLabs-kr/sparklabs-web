import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';

const SPARK_CLAW_URL = 'https://spark-claw.vercel.app';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    key: 'programsSparkClaw',
    path: '/programs/spark-claw',
  });
}

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
      <section className="relative overflow-hidden bg-[#1a0f0a] text-white">
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-spark-red/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-spark-orange/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-spark-red/40 bg-spark-red/10 px-3 py-1 text-xs font-medium text-spark-red">
            <span className="h-1.5 w-1.5 rounded-full bg-spark-red animate-pulse" />
            {copy.badge}
          </span>

          <h1 className="mt-5 text-display-lg max-w-4xl leading-[1.05]">
            {copy.heroTitle}{' '}
            <span className="text-spark-red">{copy.heroTitleAccent}</span>
            {copy.heroTitleTail}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {copy.heroSubcopy}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={SPARK_CLAW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-spark-red px-6 py-3 text-sm font-semibold text-white hover:bg-spark-red/90 transition"
            >
              {copy.ctaVisit}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
            <a
              href={`${SPARK_CLAW_URL}/#subscribe`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
            >
              {copy.ctaSubscribe}
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 border-t border-white/10 pt-8">
            {copy.heroStats.map((s) => (
              <div key={s.label}>
                <p className="text-xs uppercase tracking-[0.14em] text-white/50">
                  {s.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.philosophyEyebrow}</span>
          <h2 className="mt-4 text-display-md text-ink max-w-4xl leading-[1.15]">
            {copy.philosophyLine1}
            <br />
            <span className="text-spark-red">{copy.philosophyLine2}</span>
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-4xl">
            {copy.philosophyParas.map((p, i) => (
              <p key={i} className="text-ink-soft leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET — 6 benefits */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <span className="eyebrow">{copy.benefitsEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.benefitsTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.benefitsSubcopy}
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {copy.benefits.map((b, i) => (
              <article
                key={b.title}
                className="card-light p-6 flex flex-col gap-3"
              >
                <span className="text-xs uppercase tracking-[0.14em] text-ink/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
                {b.value && (
                  <p className="text-xl font-semibold text-spark-red">
                    {b.value}
                  </p>
                )}
                <p className="text-xs uppercase tracking-[0.14em] text-spark-red/80">
                  {b.tag}
                </p>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                  {b.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 4 steps */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.processEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.processTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.processSubcopy}
          </p>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {copy.processSteps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl border border-surface-border bg-white p-6"
              >
                <span className="text-xs uppercase tracking-[0.14em] text-spark-red">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT SPARKLABS */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
            <div>
              <span className="eyebrow">{copy.aboutEyebrow}</span>
              <h2 className="mt-3 text-display-md text-ink leading-[1.15]">
                {copy.aboutTitle}
              </h2>
              <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
                {copy.aboutParas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {copy.aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-surface-border bg-white p-6"
                >
                  <p className="text-3xl font-semibold text-spark-red">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — go to dedicated site */}
      <section className="section">
        <div className="container-narrow">
          <div className="rounded-3xl bg-[#1a0f0a] text-white p-10 md:p-14 relative overflow-hidden">
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-[360px] w-[360px] rounded-full bg-spark-red/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-spark-red">
                  Cohort 01 · Coming Soon
                </span>
                <h2 className="mt-3 text-display-sm leading-tight">
                  {copy.ctaTitle}{' '}
                  <span className="text-spark-red">{copy.ctaTitleAccent}</span>
                  {copy.ctaTitleTail}
                </h2>
                <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
                  {copy.ctaBody}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href={SPARK_CLAW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-spark-red px-6 py-3 text-sm font-semibold text-white hover:bg-spark-red/90 transition"
                >
                  {copy.ctaVisit}
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
                <a
                  href={`${SPARK_CLAW_URL}/#subscribe`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
                >
                  {copy.ctaSubscribe}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const content = {
  ko: {
    badge: '스파크랩 · Cohort 01 사전 모집',
    heroTitle: 'AI가 ',
    heroTitleAccent: '당신의 팀',
    heroTitleTail: ' 입니다.',
    heroSubcopy:
      'Spark Claw는 에이전틱 AI 시대의 1인 창업가를 위한 스파크랩의 첫 프로그램입니다. 팀 없이도, AI와 함께라면 충분합니다.',
    ctaVisit: 'Spark Claw 사이트 바로가기',
    ctaSubscribe: '1기 모집 알림 받기',
    heroStats: [
      { label: '초기 투자 규모', value: '₩50M – 100M' },
      { label: '지원 대상', value: '1인 AI 창업자' },
      { label: '운영 방식', value: '온라인 중심 + 오프라인 밋업' },
    ],

    philosophyEyebrow: '01 — Philosophy',
    philosophyLine1: '뛰어난 CEO의 핵심은 팀원을 얼마나 잘 이끄느냐에 있습니다.',
    philosophyLine2: '그 팀이 AI여도 마찬가지입니다.',
    philosophyParas: [
      '기획과 개발, 마케팅, 고객 대응까지 AI 에이전트가 담당하는 시대입니다. Spark Claw는 AI를 \u2018도구\u2019가 아닌 \u2018팀원\u2019으로 활용하는 창업가를 발굴합니다.',
      'Spark Claw는 AI 네이티브 창업가 한 명 한 명에 투자하는 데서 멈추지 않습니다. 이들을 한 자리에 모아 국내에서 가장 강력한 AI 창업자 커뮤니티를 만들어갑니다. 1인 창업가에게는 동료가 곧 가장 강력한 레버리지이기 때문입니다.',
    ],

    benefitsEyebrow: '02 — What You Get',
    benefitsTitle: '창업 초기, 가장 필요한 것부터.',
    benefitsSubcopy: '스파크랩 포트폴리오사에 제공되는 혜택이 동일하게 적용됩니다.',
    benefits: [
      {
        title: '초기 투자',
        value: '₩50M – 100M',
        tag: 'AI 인프라',
        body: '집중 부트캠프를 통과한 창업가 대상 초기 투자.',
      },
      {
        title: 'OpenAI API 크레딧',
        value: '',
        tag: 'AI 인프라',
        body: 'GPT 모델과 에이전트 툴을 구축하기 위한 크레딧.',
      },
      {
        title: 'Anthropic Claude 크레딧',
        value: '',
        tag: 'AI 인프라',
        body: 'Claude 기반 에이전틱 워크플로우 구축 지원.',
      },
      {
        title: 'AWS 스타트업 혜택',
        value: '',
        tag: '클라우드',
        body: 'AWS 스타트업 프로그램 연계 할인 혜택.',
      },
      {
        title: '글로벌 SaaS 패키지',
        value: '',
        tag: '운영 도구',
        body: 'AI 창업에 필수적인 툴 스택을 한 번에.',
      },
      {
        title: 'AI 창업자 커뮤니티',
        value: '',
        tag: '네트워크',
        body: '정기 오프라인 밋업과 온라인 세션 운영.',
      },
    ],

    processEyebrow: '03 — How it Works',
    processTitle: '선발은 네 단계로 진행됩니다.',
    processSubcopy: '이번 심사에서 투자로 이어지지 않아도, 스파크랩과의 인연은 이어집니다.',
    processSteps: [
      {
        title: '온라인 신청',
        body: 'Spark Claw 공식 홈페이지를 통해 지원서를 제출합니다.',
      },
      {
        title: '서류 스크리닝',
        body: 'AI를 \u2018팀원\u2019처럼 운용한 방식을 중심으로 평가합니다.',
      },
      {
        title: '집중 부트캠프',
        body: '스파크랩 파트너들과 함께하는 몰입형 부트캠프.',
      },
      {
        title: '최종 투자 심사',
        body: '통과 시 초기 투자 및 포트폴리오 혜택 제공.',
      },
    ],

    aboutEyebrow: '04 — About SparkLabs',
    aboutTitle: 'OpenAI, Anthropic, Perplexity를 초기에 알아본 액셀러레이터.',
    aboutParas: [
      '스파크랩은 글로벌 AI 시장의 초기 단계부터 핵심 기업을 알아보고 투자해온 액셀러레이터입니다.',
      '사우디 정부와 공동 운용 중인 5,000만 달러(약 670억원) 규모의 AIM AI 펀드를 보유하고 있으며, 국내 생태계에서도 AI 기업 투자를 대표하는 기관으로 자리매김하고 있습니다.',
    ],
    aboutStats: [
      { value: '3', label: 'OpenAI · Anthropic · Perplexity 초기 투자 이력' },
      { value: '$50M', label: '사우디 정부와 공동 운용 AIM AI Fund' },
      { value: '300+', label: '글로벌 포트폴리오사' },
    ],

    ctaTitle: '가장 먼저',
    ctaTitleAccent: '당신에게',
    ctaTitleTail: ' 알리겠습니다.',
    ctaBody:
      '모집 오픈, 부트캠프 일정, 자격 요건이 공개되는 즉시 Spark Claw 사이트와 이메일로 안내드립니다.',
  },
  en: {
    badge: 'SparkLabs · Cohort 01 Pre-Signup',
    heroTitle: 'AI is ',
    heroTitleAccent: 'your team',
    heroTitleTail: '.',
    heroSubcopy:
      'Spark Claw is SparkLabs\u2019 first program built for solo founders in the agentic-AI era. No co-founders? With AI, one is enough.',
    ctaVisit: 'Visit Spark Claw site',
    ctaSubscribe: 'Subscribe for Cohort 01',
    heroStats: [
      { label: 'Initial investment', value: 'KRW 50M – 100M' },
      { label: 'Who it\u2019s for', value: 'Solo AI founders' },
      { label: 'Format', value: 'Online-first + offline meetups' },
    ],

    philosophyEyebrow: '01 — Philosophy',
    philosophyLine1: 'The mark of a great CEO is how well they lead their team.',
    philosophyLine2: 'That holds true even when the team is AI.',
    philosophyParas: [
      'Product, engineering, marketing, customer ops \u2014 AI agents now handle it all. Spark Claw backs founders who treat AI as teammates, not just tools.',
      'Spark Claw doesn\u2019t stop at investing in AI-native founders one by one. We gather them into the most powerful AI-founder community in Korea \u2014 because for solo founders, peers are the strongest leverage.',
    ],

    benefitsEyebrow: '02 — What You Get',
    benefitsTitle: 'The things that matter most, from day one.',
    benefitsSubcopy: 'All standard benefits extended to SparkLabs portfolio companies apply.',
    benefits: [
      {
        title: 'Initial Investment',
        value: 'KRW 50M – 100M',
        tag: 'Capital',
        body: 'Seed investment for founders who complete the intensive bootcamp.',
      },
      {
        title: 'OpenAI API Credits',
        value: '',
        tag: 'AI Infra',
        body: 'Credits for building with GPT models and agentic tooling.',
      },
      {
        title: 'Anthropic Claude Credits',
        value: '',
        tag: 'AI Infra',
        body: 'Support for agentic workflows built on Claude.',
      },
      {
        title: 'AWS Startup Benefits',
        value: '',
        tag: 'Cloud',
        body: 'Discounted access via the AWS for Startups program.',
      },
      {
        title: 'Global SaaS Pack',
        value: '',
        tag: 'Ops Tools',
        body: 'The essential AI-founder tool stack, bundled.',
      },
      {
        title: 'AI Founder Community',
        value: '',
        tag: 'Network',
        body: 'Recurring offline meetups and online sessions.',
      },
    ],

    processEyebrow: '03 — How it Works',
    processTitle: 'Selection runs in four stages.',
    processSubcopy: 'Even if this round doesn\u2019t lead to investment, your relationship with SparkLabs continues.',
    processSteps: [
      {
        title: 'Online Application',
        body: 'Apply through the Spark Claw site.',
      },
      {
        title: 'Application Review',
        body: 'Evaluated on how you operate AI as teammates, not tools.',
      },
      {
        title: 'Intensive Bootcamp',
        body: 'Immersive bootcamp with SparkLabs partners.',
      },
      {
        title: 'Final Investment Review',
        body: 'Successful candidates receive seed investment and portfolio benefits.',
      },
    ],

    aboutEyebrow: '04 — About SparkLabs',
    aboutTitle: 'The accelerator that recognized OpenAI, Anthropic and Perplexity early.',
    aboutParas: [
      'SparkLabs has backed the core players of the global AI market from the earliest stages.',
      'We operate the $50M AIM AI Fund jointly with the Saudi government, and we\u2019re recognized as one of Korea\u2019s leading AI-focused investors.',
    ],
    aboutStats: [
      { value: '3', label: 'Early backers of OpenAI · Anthropic · Perplexity' },
      { value: '$50M', label: 'AIM AI Fund co-operated with the Saudi government' },
      { value: '300+', label: 'Global portfolio companies' },
    ],

    ctaTitle: 'You\u2019ll',
    ctaTitleAccent: ' be the first',
    ctaTitleTail: ' to know.',
    ctaBody:
      'We\u2019ll send open-call dates, bootcamp schedule and eligibility details the moment they go live \u2014 via the Spark Claw site and email.',
  },
} as const;
