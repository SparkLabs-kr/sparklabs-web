import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { entities } from '@/lib/entities';
import { headlineMetrics } from '@/lib/metrics';
import { ImpactBar } from '@/components/home/impact-bar';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'about', path: '/about' });
}

export default async function AboutOverviewPage({
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
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rotate-12 rounded-full bg-spark-ray blur-3xl"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-24 md:py-28">
          <span className="eyebrow !text-spark-yellow">About SparkLabs</span>
          <h1 className="mt-4 text-display-xl max-w-3xl leading-[1.02]">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {copy.heroSubcopy}
          </p>
        </div>
      </section>

      <ImpactBar metrics={headlineMetrics} />

      <section className="section">
        <div className="container-narrow grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <span className="eyebrow">{copy.missionEyebrow}</span>
            <h2 className="mt-3 text-display-md text-ink">{copy.missionTitle}</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            {copy.missionBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <span className="eyebrow">{copy.pillarsEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">{copy.pillarsTitle}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {copy.pillars.map((p) => (
              <article key={p.title} className="card-light p-8">
                <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">{copy.entitiesEyebrow}</span>
              <h2 className="mt-3 text-display-md text-ink">{copy.entitiesTitle}</h2>
            </div>
            <Link href="/about/entities" className="btn-ghost-light shrink-0">
              {copy.entitiesCta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {entities.map((e) => (
              <div
                key={e.slug}
                className="rounded-2xl border border-surface-border bg-white p-5 transition hover:shadow-card"
              >
                <div className={`h-1.5 w-10 rounded-full bg-spark-${e.accent}`} />
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {e.name[locale]}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/50">
                  {e.location[locale]}
                </p>
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
    heroTitle: '창업가가 창업가를 키웁니다.',
    heroSubcopy:
      '스파크랩은 2013년 설립 이래, 6대륙에서 글로벌 창업가를 발굴·육성해온 AI-First 액셀러레이터 네트워크입니다. 550개 이상의 포트폴리오와 17건의 엑싯, 86.7%의 생존율로 한국을 대표하는 글로벌 VC로 자리잡았습니다.',
    missionEyebrow: 'Our Mission',
    missionTitle: '글로벌 창업가의 첫 동반자.',
    missionBody: [
      '스파크랩의 모든 파트너는 창업 경험을 거쳐온 전직 창업가입니다. 투자자가 아닌, 함께 회사를 세워본 선배의 시각에서 초기 스타트업과 호흡을 맞춥니다.',
      '우리는 한국 시장에 머무르는 스타트업이 아닌, 설계 단계부터 글로벌을 지향하는 "Born Global" 창업가를 찾고 지원합니다. 6대륙에 직접 운영하는 액셀러레이터와 VC가 창업가의 해외 진출을 받쳐줍니다.',
      'AI·딥테크 시대로의 전환점에서 OpenAI·Anthropic·Perplexity 같은 기술 리더에 일찍이 베팅해 왔고, 한국 AI 생태계의 기폭제 역할도 하고 있습니다.',
    ],
    pillarsEyebrow: 'Principles',
    pillarsTitle: '스파크랩이 움직이는 네 가지 원칙',
    pillars: [
      {
        title: 'By Founders, For Founders',
        body: '창업가 출신 파트너들이 창업가의 시각으로 투자하고, 회사를 세워본 경험으로 초기 스타트업의 성장을 돕습니다.',
      },
      {
        title: 'Born Global, Not Go Global',
        body: '처음부터 글로벌 시장을 설계하는 창업가를 선호합니다. 한국 성공 후 해외 진출이 아닌, 설계 단계부터 글로벌 지향.',
      },
      {
        title: 'AI-First Investment Focus',
        body: 'OpenAI·Anthropic·Perplexity·xAI·Groq 등 글로벌 AI 리더와 한국 AI 주역에 투자. $50M AIM AI Fund 운영.',
      },
      {
        title: 'Six Continents, One Ecosystem',
        body: '각 지역의 독립성을 유지하면서도 하나의 생태계로 움직이는 글로벌 네트워크. 포트폴리오사의 크로스보더 성장을 가속.',
      },
    ],
    entitiesEyebrow: 'Global Network',
    entitiesTitle: '8개 엔티티, 6대륙',
    entitiesCta: '네트워크 자세히 보기',
  },
  en: {
    heroTitle: 'Entrepreneurs Growing Entrepreneurs.',
    heroSubcopy:
      'Since 2013, SparkLabs has been a global AI-First accelerator network spanning six continents. With 550+ portfolio companies, 17 exits, and an 86.7% survival rate, we have become one of Asia\'s leading global venture platforms.',
    missionEyebrow: 'Our Mission',
    missionTitle: 'The first partner for global founders.',
    missionBody: [
      'Every SparkLabs partner is a former founder. We engage with early-stage startups not as investors, but as operators who have built and scaled companies themselves.',
      'We back founders who design for global markets from day one — not "localize-then-go-global" plays. Our directly operated accelerators and venture funds on six continents give our portfolio a runway into each market.',
      'At the inflection point of the AI era, we have backed global AI leaders like OpenAI, Anthropic, and Perplexity early, while also serving as a catalyst for Korea\'s AI ecosystem.',
    ],
    pillarsEyebrow: 'Principles',
    pillarsTitle: 'Four principles that drive SparkLabs.',
    pillars: [
      {
        title: 'By Founders, For Founders',
        body: 'Partners who have built companies themselves — investing, coaching, and opening doors the way one of your own would.',
      },
      {
        title: 'Born Global, Not Go Global',
        body: 'We back founders who design for the global market from day one, not as an afterthought.',
      },
      {
        title: 'AI-First Investment Focus',
        body: 'From OpenAI, Anthropic, Perplexity, xAI and Groq to Korea\'s AI leaders. Backed by a $50M AIM AI Fund.',
      },
      {
        title: 'Six Continents, One Ecosystem',
        body: 'Locally run and globally connected — accelerating cross-border growth for every SparkLabs company.',
      },
    ],
    entitiesEyebrow: 'Global Network',
    entitiesTitle: '8 entities across 6 continents',
    entitiesCta: 'See the network',
  },
} as const;
