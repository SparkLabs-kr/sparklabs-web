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
          <span className="eyebrow">{copy.timelineEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">{copy.timelineTitle}</h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.timelineIntro}
          </p>
          <ol className="mt-12 relative border-l border-surface-border pl-8 space-y-8">
            {copy.timeline.map((item) => {
              const body = 'body' in item ? (item as { body?: string }).body : undefined;
              return (
                <li key={item.date + item.title} className="relative">
                  <span
                    className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-spark-yellow ring-4 ring-white"
                    aria-hidden="true"
                  />
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
                    {item.date}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{item.title}</h3>
                  {body ? (
                    <p className="mt-1 text-ink-soft leading-relaxed">{body}</p>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section bg-surface-subtle">
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
    entitiesTitle: '7개 엔티티, 6대륙',
    entitiesCta: '네트워크 자세히 보기',
    timelineEyebrow: 'Our Journey',
    timelineTitle: '2012년부터 이어진 스파크랩의 발자취',
    timelineIntro:
      '한국 대표 액셀러레이터에서 6대륙을 연결하는 글로벌 네트워크로. 창업가가 창업가를 키우며 만들어 온 스파크랩의 주요 순간들.',
    timeline: [
      { date: '2012.12', title: '스파크랩 설립 및 액셀러레이터 1기 출범', body: '이한주·김호민·버나드 문 세 명의 창업가 출신 파트너가 한국 최초의 실리콘밸리형 액셀러레이터를 공동 창업.' },
      { date: '2013.01', title: 'Global Accelerator Network(GAN) 회원사 선정' },
      { date: '2014.03', title: '액셀러레이터지도자협회(ALF) 회장사 선정' },
      { date: '2014.05', title: 'TIPS 프로그램 운영기관 선정' },
      { date: '2016.01', title: '코워킹스페이스 스파크플러스 런칭', body: '한국 공유오피스 시장의 선도자로 자리매김, 현재 36호점 이상 운영.' },
      { date: '2020.04', title: '신한캐피탈과 스파크랩-신한 오퍼튜니티 제1호 투자조합 결성' },
      { date: '2021.01', title: '모태펀드 스마트 스파크랩 클라우드 제1호 펀드 결성' },
      { date: '2021.06', title: '대우건설·베스핀글로벌과 베트남 스마트시티 플랫폼 MOU 체결' },
      { date: '2022.03', title: '구글 스타트업 캠퍼스와 2022 부산 그린테크 액셀러레이터 프로그램 출범' },
      { date: '2022.09', title: '시드 TIPS 운영사 선정' },
      { date: '2022.11', title: '10주년 데모데이 개최' },
      { date: '2022.11', title: '한화그룹과 공동 GP(Co-GP) 펀드 결성 발표' },
      { date: '2023.07', title: 'SparkBioLabs 런칭', body: '바이오·헬스케어 전문 액셀러레이터로 영역 확장.' },
      { date: '2024.09', title: 'Yonsei Biohealth Tech Holdings MOU 체결' },
      { date: '2024.10', title: 'SNU Biomedical Research Institute MOU 체결' },
      { date: '2024.09', title: '$50M AIM AI Fund 결성', body: 'AI-First 액셀러레이터로서 글로벌 AI 리더와 한국 AI 생태계에 대한 베팅 가속.' },
      { date: '2024.09', title: '사우디 AIM-X 1기 출범', body: 'NTDP·SDAIA·KAUST와 공동으로 AI 스타트업 14개사 선발. Saudi Vision 2030 연계.' },
      { date: '2025.09', title: 'SparkLabs Partners 경상북도 지사 개소', body: '한동대학교 캠퍼스 내 지역 거점 확장. 포항 AI·바이오 생태계 구축 시작.' },
      { date: '2026.02', title: 'SparkLabs KSU Fund I ($20M) 출범', body: 'King Saud University·Riyadh Valley Company와 공동 조성.' },
    ],
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
    entitiesTitle: '7 entities across 6 continents',
    entitiesCta: 'See the network',
    timelineEyebrow: 'Our Journey',
    timelineTitle: 'A journey that began in 2012.',
    timelineIntro:
      'From Korea\'s flagship accelerator to a global network spanning six continents. The milestones we\'ve built — as founders, for founders.',
    timeline: [
      { date: 'Dec 2012', title: 'SparkLabs founded; Batch 1 launched', body: 'Three founder-partners — HanJoo Lee, Jimmy Kim, and Bernard Moon — launched Korea\'s first Silicon Valley-style accelerator.' },
      { date: 'Jan 2013', title: 'Joined the Global Accelerator Network (GAN)' },
      { date: 'Mar 2014', title: 'Elected Chair of the Accelerator Leaders Forum (ALF)' },
      { date: 'May 2014', title: 'Selected as an official TIPS program operator' },
      { date: 'Jan 2016', title: 'Launched SparkPlus co-working spaces', body: 'Now operating 36+ locations as a leader in Korea\'s co-working market.' },
      { date: 'Apr 2020', title: 'Formed the SparkLabs-Shinhan Opportunity Fund I with Shinhan Capital' },
      { date: 'Jan 2021', title: 'Formed the Smart SparkLabs Cloud Fund I with Korea Fund of Funds' },
      { date: 'Jun 2021', title: 'MOU with Daewoo E&C and Bespin Global for a Vietnam smart-city platform' },
      { date: 'Mar 2022', title: 'Launched the 2022 Busan GreenTech Accelerator with Google for Startups Campus' },
      { date: 'Sep 2022', title: 'Selected as a Seed TIPS operator' },
      { date: 'Nov 2022', title: '10th anniversary Demo Day' },
      { date: 'Nov 2022', title: 'Announced Co-GP fund with Hanwha Group' },
      { date: 'Jul 2023', title: 'Launched SparkBioLabs', body: 'Expanded into bio and healthcare as a specialized accelerator arm.' },
      { date: 'Sep 2024', title: 'MOU with Yonsei Biohealth Tech Holdings' },
      { date: 'Oct 2024', title: 'MOU with SNU Biomedical Research Institute' },
      { date: 'Sep 2024', title: '$50M AIM AI Fund established', body: 'Deepening AI-First conviction across global AI leaders and Korea\'s AI ecosystem.' },
      { date: 'Sep 2024', title: 'Saudi AIM-X Cohort 1 launched', body: 'Selected 14 AI startups together with NTDP, SDAIA, and KAUST — aligned with Saudi Vision 2030.' },
      { date: 'Sep 2025', title: 'SparkLabs Partners Gyeongbuk branch opened', body: 'Regional hub at Handong Global University kicks off the Pohang AI & bio ecosystem initiative.' },
      { date: 'Feb 2026', title: 'SparkLabs KSU Fund I ($20M) launched', body: 'Co-established with King Saud University and Riyadh Valley Company.' },
    ],
  },
} as const;
