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
  return buildPageMetadata({ locale, key: 'programsBatch', path: '/programs/batch' });
}

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
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-spark-violet/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-spark-ray blur-3xl opacity-70"
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
              href="mailto:apply@sparklabs.co.kr"
              className="inline-flex items-center rounded-full bg-spark-yellow px-6 py-3 text-sm font-semibold text-ink hover:bg-spark-yellow/90 transition"
            >
              {copy.ctaApply}
            </a>
            <Link
              href={`/${locale}/programs/partnership`}
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
            >
              {copy.ctaPartnership}
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 border-t border-white/10 pt-8">
            {copy.heroStats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold text-spark-yellow">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.pillarsEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.pillarsTitle}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {copy.pillars.map((p, i) => {
              const accents = ['yellow', 'violet', 'blue'] as const;
              const accent = accents[i];
              return (
                <article
                  key={p.title}
                  className="card-light flex flex-col gap-4 p-8"
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

      {/* WHO WE BACK */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="eyebrow">{copy.whoEyebrow}</span>
              <h2 className="mt-3 text-display-md text-ink">{copy.whoTitle}</h2>
              <p className="mt-5 text-ink-soft leading-relaxed">
                {copy.whoSubcopy}
              </p>
            </div>

            <ul className="space-y-4">
              {copy.whoItems.map((item, i) => (
                <li
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-surface-border bg-white p-6"
                >
                  <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white text-sm font-semibold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 PHASES */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.phasesEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.phasesTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.phasesSubcopy}
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {copy.phases.map((phase, i) => {
              const accents = ['violet', 'blue', 'green', 'orange'] as const;
              const accent = accents[i];
              return (
                <article
                  key={phase.name}
                  className="relative card-light p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.14em] text-ink/50">
                      Phase {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`rounded-full bg-spark-${accent}/15 px-3 py-1 text-xs font-medium text-ink`}>
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink">
                    {phase.name}
                  </h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">
                    {phase.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section bg-hero-navy text-white">
        <div className="container-narrow">
          <span className="eyebrow !text-spark-yellow">{copy.timelineEyebrow}</span>
          <h2 className="mt-3 text-display-md max-w-3xl leading-[1.1]">
            {copy.timelineTitle}
          </h2>

          <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {copy.timeline.map((step, i) => (
              <li
                key={step.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-spark-yellow text-ink text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-white/60">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold">{step.label}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.testimonialsEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.testimonialsTitle}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {copy.testimonials.map((t) => (
              <figure key={t.founder} className="card-light p-8 flex flex-col gap-6">
                <blockquote className="text-ink-soft leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto border-t border-surface-border pt-5">
                  <div className="font-semibold text-ink">{t.founder}</div>
                  <div className="mt-1 text-sm text-ink/60">{t.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
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
              href="mailto:apply@sparklabs.co.kr"
              className="inline-flex items-center rounded-full bg-spark-yellow px-6 py-3 text-sm font-semibold text-ink hover:bg-spark-yellow/90 transition"
            >
              {copy.ctaApply}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const content = {
  ko: {
    eyebrow: 'Batch Program · 창업가를 위한 22주',
    heroTitle: '초기 창업가의 PMF를 만들어내는 22주 액셀러레이터.',
    heroSubcopy:
      '팀당 최대 3억 원 투자, 스파크랩 파트너의 1:1 코칭, 550+ 포트폴리오 네트워크. Seed 라운드 전후의 창업가를 빠르게 Product-Market Fit까지 끌어올립니다.',
    ctaApply: '지원하기',
    ctaPartnership: 'Partnership Program',
    heroStats: [
      { value: '최대 3억', label: '투자 규모' },
      { value: '22주', label: '프로그램 기간' },
      { value: '550+', label: '포트폴리오사' },
      { value: '86.7%', label: '생존율' },
    ],

    pillarsEyebrow: 'What You Get',
    pillarsTitle: '자본, 전문성, 네트워크를 한 번에 제공합니다.',
    pillars: [
      {
        title: '투자 · Investment',
        body: '팀당 최대 3억 원의 Seed 투자. 리드 투자뿐 아니라 후속 라운드까지 이어지는 장기적 파트너십.',
      },
      {
        title: '액셀러레이션 · Acceleration',
        body: '주 단위 파트너 1:1 코칭, Product · GTM · Fundraising 전문 멘토링. PMF에 직접 연결되는 실행형 프로그램.',
      },
      {
        title: '서포트 · Support',
        body: '법률·회계·IR 자료·채용까지 초기 창업에 필요한 실무 지원. 글로벌 엔티티 네트워크를 통한 해외 진출 연결.',
      },
    ],

    whoEyebrow: 'Who We Back',
    whoTitle: '우리가 찾는 창업가의 3가지 기준.',
    whoSubcopy:
      '스파크랩은 “제대로 기능하는 팀”을 찾습니다. 화려한 경력보다, 문제를 끝까지 푸는 실행력과 MVP를 고객에게 내놓아 본 경험을 더 크게 봅니다.',
    whoItems: [
      {
        title: '제대로 기능하는 팀',
        body: '공동창업자 2명 이상, 기술·사업 균형이 잡힌 팀. 역할과 지분 구조가 명확한 팀을 선호합니다.',
      },
      {
        title: 'MVP와 초기 고객 검증',
        body: '아이디어 단계를 넘어 MVP를 출시해 본 경험. 초기 고객·매출·LOI 등 시장 시그널이 있는 팀.',
      },
      {
        title: '10개월 이상의 Runway',
        body: '프로그램 기간 동안 제품에만 집중할 수 있는 재무적 여력. 부족할 경우 초기 투자로 보완합니다.',
      },
    ],

    phasesEyebrow: 'Program Structure',
    phasesTitle: '4단계로 설계된 22주, 매 단계가 투자자 미팅으로 이어집니다.',
    phasesSubcopy:
      '단순한 강의형 프로그램이 아니라, 각 단계마다 명확한 마일스톤과 아웃풋을 요구합니다. 모든 단계의 끝에는 실제 투자자·파트너사 미팅이 열립니다.',
    phases: [
      {
        name: 'Bootcamp',
        duration: '2주',
        body: '비전·타깃·제품 가설을 다시 정의하고, 22주의 실행 플랜을 확정합니다. 파트너진과의 집중 세션.',
      },
      {
        name: 'Spark Your Business',
        duration: '12주',
        body: 'PMF를 위한 실험과 제품 이터레이션. 주 1회 파트너 리뷰, 격주 고객 인터뷰 라운드.',
      },
      {
        name: 'Traction Day',
        duration: '2주',
        body: '실적 기반 중간 점검. 국내외 VC·전략 투자자를 초청해 비공개 라운드로 피드백을 받습니다.',
      },
      {
        name: 'Demoday',
        duration: '6주',
        body: '국내외 500+ 투자자가 참여하는 데모데이 준비. 피치·IR 자료·공개 라운드까지 풀패키지 지원.',
      },
    ],

    timelineEyebrow: 'Apply Timeline',
    timelineTitle: '서류 접수부터 데모데이까지 약 8개월.',
    timeline: [
      { label: '서류 접수', duration: '약 6주' },
      { label: '심사 · 인터뷰', duration: '약 3주' },
      { label: '최종 선발', duration: '1주' },
      { label: 'Bootcamp', duration: '2주' },
      { label: '본 프로그램', duration: '12주' },
      { label: 'Traction · Demoday', duration: '8주' },
    ],

    testimonialsEyebrow: 'Founders\' Voice',
    testimonialsTitle: '창업가가 추천하는 프로그램.',
    testimonials: [
      {
        quote:
          '창업자의 하루하루는 전쟁의 연속입니다. 그 길을 걸으면서 성공과 실패의 교훈을 몸에 새긴 사람들과 함께 하세요. 스파크랩의 파트너, 멘토, 모든 기수의 대표들이 당신의 편이 되어 줄 것입니다.',
        founder: '이복기 대표',
        company: '원티드랩 · Wanted Lab',
      },
      {
        quote:
          '스파크랩은 우리가 불과 1년 만에 시리즈A·시리즈B 단계 투자 유치하고 해외 진출하는 데 큰 도움을 주었습니다. 다양한 국가 고객에게 제품을 계속 선보이는 과정에서 스파크랩은 투자자이자 전략 파트너였습니다.',
        founder: '하형석 대표',
        company: '엠비엑스 · MBX',
      },
      {
        quote:
          '스파크랩 배치 프로그램 덕분에 빠르게 성장했습니다. 매주 테스트와 멘토링으로 Early Vangelist 개념을 잡았고, 20만 명의 가입자를 모집해 투자 유치에 성공했습니다.',
        founder: '이정윤 대표',
        company: '코코지 · Kokozi',
      },
    ],

    ctaTitle: '다음 배치에서 함께할 창업가를 찾고 있습니다.',
    ctaBody:
      '지원서는 상시 접수하며, 분기 단위로 선발합니다. 지원 전 궁금한 점은 언제든 문의 주세요.',
  },
  en: {
    eyebrow: 'Batch Program · For Founders',
    heroTitle: 'A 22-week accelerator that gets early founders to product-market fit.',
    heroSubcopy:
      'Up to KRW 300M per team, 1:1 coaching from SparkLabs partners, access to a 550+ portfolio network. Designed for founders around the seed stage, ready to push hard on PMF.',
    ctaApply: 'Apply',
    ctaPartnership: 'Partnership Program',
    heroStats: [
      { value: 'KRW 300M', label: 'Investment' },
      { value: '22 weeks', label: 'Program length' },
      { value: '550+', label: 'Portfolio companies' },
      { value: '86.7%', label: 'Survival rate' },
    ],

    pillarsEyebrow: 'What You Get',
    pillarsTitle: 'Capital, expertise, and network — in one program.',
    pillars: [
      {
        title: 'Investment',
        body: 'Up to KRW 300M seed check per team. We lead rounds and stay with you through follow-on — not a one-shot check.',
      },
      {
        title: 'Acceleration',
        body: 'Weekly 1:1 partner coaching. Deep-dive mentoring across product, GTM and fundraising — built around your PMF milestones.',
      },
      {
        title: 'Support',
        body: 'Hands-on help with legal, accounting, IR decks, hiring — and direct intros into our global entity network when you go international.',
      },
    ],

    whoEyebrow: 'Who We Back',
    whoTitle: 'The three things we look for.',
    whoSubcopy:
      'We back teams that actually function. Track record matters less than relentless execution and a track record of shipping MVPs in front of real customers.',
    whoItems: [
      {
        title: 'A team that functions',
        body: 'Two or more co-founders with a healthy balance of technical and business skills. Clear roles and clean equity.',
      },
      {
        title: 'MVP and early validation',
        body: 'Past the idea stage — you have launched an MVP, spoken to customers, and have at least some market signal (revenue, LOIs, design partners).',
      },
      {
        title: '10+ months of runway',
        body: 'Enough cash to focus on product during the program. If runway is short, our seed check is designed to extend it.',
      },
    ],

    phasesEyebrow: 'Program Structure',
    phasesTitle: '22 weeks, 4 phases — every phase ends with investor meetings.',
    phasesSubcopy:
      'Not a lecture series. Each phase has clear milestones and real output, capped with investor or partner meetings you actually walk into.',
    phases: [
      {
        name: 'Bootcamp',
        duration: '2 weeks',
        body: 'Reset your vision, target and product thesis. Lock in the 22-week execution plan with intensive partner sessions.',
      },
      {
        name: 'Spark Your Business',
        duration: '12 weeks',
        body: 'Experimentation and product iteration toward PMF. Weekly partner reviews and biweekly customer interview rounds.',
      },
      {
        name: 'Traction Day',
        duration: '2 weeks',
        body: 'Mid-program progress check. Private round with invited VCs and strategic investors — real feedback, real meetings.',
      },
      {
        name: 'Demoday',
        duration: '6 weeks',
        body: 'Full preparation for a demo day attended by 500+ domestic and international investors. Pitch, IR deck, public round — all supported.',
      },
    ],

    timelineEyebrow: 'Apply Timeline',
    timelineTitle: 'From application to demo day in roughly 8 months.',
    timeline: [
      { label: 'Applications open', duration: '~6 weeks' },
      { label: 'Review & interviews', duration: '~3 weeks' },
      { label: 'Final selection', duration: '1 week' },
      { label: 'Bootcamp', duration: '2 weeks' },
      { label: 'Main program', duration: '12 weeks' },
      { label: 'Traction · Demoday', duration: '8 weeks' },
    ],

    testimonialsEyebrow: 'Founders\' Voice',
    testimonialsTitle: 'Recommended by founders themselves.',
    testimonials: [
      {
        quote:
          'Every day as a founder is a battle. Walk that path alongside people who have earned the lessons of success and failure in their bones. The SparkLabs partners, mentors, and founders from every batch will be on your side.',
        founder: 'CEO Bokkee Lee',
        company: 'Wanted Lab',
      },
      {
        quote:
          'SparkLabs played a huge role in helping us raise Series A and Series B funding and expand globally in just one year. As we kept putting product in front of customers across countries, SparkLabs was both an investor and a strategic partner.',
        founder: 'CEO Dino Ha',
        company: 'MBX',
      },
      {
        quote:
          'We grew rapidly thanks to the SparkLabs batch program. Weekly testing and mentoring nailed down our Early Vangelist concept, and we acquired 200,000 signups that carried us to a successful fundraise.',
        founder: 'CEO Jeongyoon Lee',
        company: 'Kokozi',
      },
    ],

    ctaTitle: 'We are looking for the founders of the next batch.',
    ctaBody:
      'Applications are rolling, with selection on a quarterly basis. Questions before you apply? Just ask.',
  },
} as const;
