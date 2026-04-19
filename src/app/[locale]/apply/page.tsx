import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';

const SPARK_CLAW_URL = 'https://spark-claw.vercel.app';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'apply', path: '/apply' });
}

export default async function ApplyPage({
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
        </div>
      </section>

      {/* PROGRAM PICKER */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.pickerEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.pickerTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.pickerSubcopy}
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {copy.programs.map((p, i) => {
              const accents = ['yellow', 'blue', 'red'] as const;
              const accent = accents[i];
              const isExternal = p.href.startsWith('http');
              const buttonClass = `inline-flex w-full items-center justify-center gap-2 rounded-full bg-spark-${accent} px-5 py-3 text-sm font-semibold text-ink hover:opacity-90 transition`;

              return (
                <article
                  key={p.title}
                  className="card-light flex flex-col p-8"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className={`h-1.5 w-12 rounded-full bg-spark-${accent}`} />
                    <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-ink/50">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-ink/50">
                    {p.audience}
                  </p>
                  <p className="mt-4 text-ink-soft leading-relaxed">
                    {p.body}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className={`text-spark-${accent} mt-0.5`}>›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-surface-border space-y-3">
                    <div className="flex items-center justify-between text-xs text-ink/50">
                      <span>{copy.nextIntakeLabel}</span>
                      <span className="font-semibold text-ink">{p.nextIntake}</span>
                    </div>
                    {isExternal ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClass}
                      >
                        {p.cta}
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
                    ) : (
                      <Link href={p.href} className={buttonClass}>
                        {p.cta}
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
                          <path d="M5 12h14" />
                          <path d="M13 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE EVALUATE */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] items-start">
            <div>
              <span className="eyebrow">{copy.evalEyebrow}</span>
              <h2 className="mt-3 text-display-md text-ink leading-[1.15]">
                {copy.evalTitle}
              </h2>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-md">
                {copy.evalSubcopy}
              </p>
            </div>

            <ul className="space-y-4">
              {copy.evalItems.map((item, i) => (
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

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.faqEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.faqTitle}
          </h2>

          <div className="mt-12 divide-y divide-surface-border border-y border-surface-border">
            {copy.faqs.map((f) => (
              <details
                key={f.q}
                className="group py-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-lg font-semibold text-ink list-none">
                  <span>{f.q}</span>
                  <span className="shrink-0 text-2xl text-ink/40 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ink-soft leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE CTA */}
      <section className="section bg-ink text-white">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="text-display-sm leading-tight max-w-xl">
                {copy.helpTitle}
              </h2>
              <p className="mt-3 text-white/70 max-w-xl leading-relaxed">
                {copy.helpBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="mailto:apply@sparklabs.co.kr"
                className="inline-flex items-center rounded-full bg-spark-yellow px-6 py-3 text-sm font-semibold text-ink hover:bg-spark-yellow/90 transition"
              >
                {copy.helpCta}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
              >
                {copy.helpContact}
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
    eyebrow: 'Apply',
    heroTitle: '스파크랩의 다음 배치에, 당신의 팀이 있을 수 있습니다.',
    heroSubcopy:
      '3개의 프로그램이 각기 다른 단계·목적의 창업가를 위해 열려 있습니다. 30초만 읽어보면 어느 프로그램이 지금 우리 팀에 맞는지 바로 알 수 있어요.',

    pickerEyebrow: 'Choose Your Track',
    pickerTitle: '우리 팀에 맞는 프로그램 고르기.',
    pickerSubcopy:
      'Batch는 PMF를 만들어가는 초기 창업가, Partnership은 조직 파트너, Spark Claw는 AI를 팀원처럼 쓰는 1인 창업가를 위한 트랙입니다.',
    nextIntakeLabel: '다음 모집',
    programs: [
      {
        title: 'Batch Program',
        audience: 'For Founders',
        tag: 'Flagship',
        body: 'PMF를 만들어가는 초기 창업가를 위한 22주 액셀러레이터. 최대 3억 원 투자와 파트너 1:1 코칭.',
        bullets: [
          '팀당 최대 ₩300M Seed 투자',
          '22주 프로그램 + 데모데이',
          '글로벌 500+ 투자자 네트워크 연결',
        ],
        nextIntake: '분기별 상시',
        cta: 'Batch 프로그램 살펴보기',
        href: '/ko/programs/batch',
      },
      {
        title: 'Spark Claw',
        audience: 'For Solo AI Founders',
        tag: 'New',
        body: 'AI 에이전트를 팀원처럼 활용하는 1인 창업가를 위한 프로그램. Cohort 01 사전 모집 중.',
        bullets: [
          '₩50M–100M 초기 투자',
          'OpenAI · Anthropic API 크레딧',
          'AI 창업자 커뮤니티 네트워크',
        ],
        nextIntake: 'Cohort 01 · 모집 예정',
        cta: 'Spark Claw 사이트로',
        href: SPARK_CLAW_URL,
      },
      {
        title: 'Partnership Program',
        audience: 'For Organizations',
        tag: 'B2B · B2G',
        body: '기업·정부·대학과 함께 설계하는 오픈이노베이션 프로그램. 창업가가 아닌 조직 파트너용입니다.',
        bullets: [
          '파트너사 맞춤 프로그램 공동 설계',
          'Global · Open Innovation · Local · Scale-Up 4트랙',
          'Google · Mercedes · Samsung 등 50+ 파트너',
        ],
        nextIntake: '상시 협의',
        cta: 'Partnership 논의하기',
        href: '/ko/programs/partnership',
      },
    ],

    evalEyebrow: 'How We Evaluate',
    evalTitle: '스파크랩이 창업가를 고르는 기준.',
    evalSubcopy:
      '프로그램은 다르지만, 우리가 바라보는 관점은 일관됩니다. “제대로 기능하는 팀과 시장에 진짜 필요한 제품”을 찾습니다.',
    evalItems: [
      {
        title: '사람 — 제대로 기능하는 팀',
        body: '화려한 이력보다, 문제를 끝까지 푸는 실행력. 공동창업자 구성, 역할 분담, 의사결정 방식을 봅니다. 1인 창업가의 경우 AI와 어떻게 협업하는지를 함께 평가합니다.',
      },
      {
        title: '제품 — 시장에 검증된 가설',
        body: 'MVP를 출시하고 고객과 부딪힌 경험. 초기 매출·LOI·리텐션 등 시장 시그널이 최소 한 가지는 있어야 합니다.',
      },
      {
        title: '시장 — 글로벌을 향한 야망',
        body: '한국에 머무르지 않을 수 있는 제품과 비전. Born-global 관점에서 시장 규모·확장성을 검토합니다.',
      },
    ],

    faqEyebrow: 'FAQ',
    faqTitle: '지원 전에 자주 물어보시는 것들.',
    faqs: [
      {
        q: '지원 시 어떤 자료를 준비해야 하나요?',
        a: '팀 소개, 제품/서비스 설명, 현재 트랙션, 자금 현황을 담은 2–3장 분량의 덱 혹은 지원서로 충분합니다. 완벽한 IR 덱은 필요하지 않습니다.',
      },
      {
        q: '아이디어 단계에서도 지원이 가능한가요?',
        a: 'Batch Program은 최소한의 MVP와 초기 시장 검증이 있어야 합니다. 아이디어 단계라면 Spark Claw를 먼저 검토해보시는 걸 추천드립니다.',
      },
      {
        q: '해외 창업가도 지원할 수 있나요?',
        a: '가능합니다. 다만 한국 시장을 주요 타깃으로 하거나, 한국에 법인을 설립할 계획이 있어야 합니다. 한국이 아닌 지역에 포커스가 있는 팀은 SparkLabs Taiwan · Saudi Arabia · Cultiv8 등 해당 지역 엔티티로 연결해드립니다.',
      },
      {
        q: '지원 후 회신은 언제 받나요?',
        a: '접수 후 2주 이내에 1차 결과를 안내드립니다. 1차를 통과하면 인터뷰 일정을 조율하고, 이후 3–4주 내에 최종 결과가 나옵니다.',
      },
      {
        q: '이번에 탈락하면 다시 지원할 수 있나요?',
        a: '네. 의미 있는 업데이트(트랙션, 제품, 팀)가 있다면 3–6개월 후 재지원을 환영합니다. 심사 피드백은 요청 시 공유드립니다.',
      },
    ],

    helpTitle: '어떤 프로그램이 맞을지 모르겠다면?',
    helpBody:
      '궁금한 점은 지원 담당팀에 직접 물어보세요. 한 줄 이메일이면 충분합니다 — 팀 상황을 간단히 알려주시면 적합한 트랙을 안내드립니다.',
    helpCta: 'apply@sparklabs.co.kr',
    helpContact: 'Contact 채널 보기',
  },
  en: {
    eyebrow: 'Apply',
    heroTitle: 'Your team could be in the next SparkLabs batch.',
    heroSubcopy:
      'Three programs, each built for a different stage and shape of founder. Thirty seconds of reading will tell you which one fits your team today.',

    pickerEyebrow: 'Choose Your Track',
    pickerTitle: 'Pick the right program.',
    pickerSubcopy:
      'Batch is for early founders pushing toward PMF. Partnership is for organizations. Spark Claw is for solo founders using AI as teammates.',
    nextIntakeLabel: 'Next intake',
    programs: [
      {
        title: 'Batch Program',
        audience: 'For Founders',
        tag: 'Flagship',
        body: 'Our flagship 22-week accelerator for founders pushing toward product-market fit. Up to KRW 300M plus 1:1 partner coaching.',
        bullets: [
          'Up to KRW 300M seed per team',
          '22-week program + Demo Day',
          'Access to 500+ global investors',
        ],
        nextIntake: 'Rolling · quarterly selection',
        cta: 'Explore Batch Program',
        href: '/en/programs/batch',
      },
      {
        title: 'Spark Claw',
        audience: 'For Solo AI Founders',
        tag: 'New',
        body: 'A program for solo founders who treat AI agents as teammates. Cohort 01 pre-signup is live.',
        bullets: [
          'KRW 50M–100M seed investment',
          'OpenAI & Anthropic API credits',
          'AI-founder community & network',
        ],
        nextIntake: 'Cohort 01 · opening soon',
        cta: 'Go to Spark Claw site',
        href: SPARK_CLAW_URL,
      },
      {
        title: 'Partnership Program',
        audience: 'For Organizations',
        tag: 'B2B · B2G',
        body: 'Open-innovation programs co-designed with corporates, governments, universities. For partners, not founders.',
        bullets: [
          'Custom programs co-designed with you',
          '4 tracks: Global · Open Innovation · Local · Scale-Up',
          '50+ partners including Google, Mercedes, Samsung',
        ],
        nextIntake: 'Rolling partnership discussions',
        cta: 'Start a partnership',
        href: '/en/programs/partnership',
      },
    ],

    evalEyebrow: 'How We Evaluate',
    evalTitle: 'What SparkLabs looks for.',
    evalSubcopy:
      'The programs differ, but our lens is consistent. We back teams that function, and products the market actually needs.',
    evalItems: [
      {
        title: 'People — a team that functions',
        body: 'Less about the r\u00e9sum\u00e9, more about how the team executes. We look at co-founder composition, role clarity, and decision-making. For solo founders, we also assess how you operate with AI.',
      },
      {
        title: 'Product — market-validated hypothesis',
        body: 'Something you have shipped and tested with real customers. We want to see at least one market signal — early revenue, LOIs, retention.',
      },
      {
        title: 'Market — global ambition',
        body: 'A product and vision that doesn\u2019t stop at Korea. We think in terms of born-global: size, scalability, international path.',
      },
    ],

    faqEyebrow: 'FAQ',
    faqTitle: 'Common questions before you apply.',
    faqs: [
      {
        q: 'What materials do I need to apply?',
        a: 'A 2–3 page deck or application covering the team, product, current traction, and funding status is enough. We don\u2019t need a polished IR deck.',
      },
      {
        q: 'Can I apply at the idea stage?',
        a: 'Batch Program expects at least an MVP and some early validation. If you\u2019re earlier than that, Spark Claw may be a better fit.',
      },
      {
        q: 'Can international founders apply?',
        a: 'Yes — as long as Korea is a meaningful market for you or you plan to incorporate in Korea. Teams focused on other regions are often routed to the relevant SparkLabs entity — Taiwan, Saudi Arabia, Cultiv8, and others.',
      },
      {
        q: 'When will I hear back?',
        a: 'First-round results within 2 weeks of submission. Shortlisted teams are invited to interviews, with final results typically within 3–4 weeks.',
      },
      {
        q: 'Can I re-apply if rejected?',
        a: 'Yes. Once you have meaningful updates (traction, product, team), we welcome re-applications in 3–6 months. Feedback is shared on request.',
      },
    ],

    helpTitle: 'Not sure which one fits?',
    helpBody:
      'Just ask. One-line email is plenty — share a quick read on where your team is, and we\u2019ll point you to the right track.',
    helpCta: 'apply@sparklabs.co.kr',
    helpContact: 'See contact channels',
  },
} as const;
