import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import type { Locale } from '@/lib/content';

export default async function ContactPage({
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
          className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-spark-blue/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-spark-violet/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-20 md:py-28">
          <span className="eyebrow !text-spark-yellow">{copy.eyebrow}</span>
          <h1 className="mt-4 text-display-lg max-w-3xl leading-[1.05]">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {copy.heroSubcopy}
          </p>
        </div>
      </section>

      {/* CONTACT CHANNELS */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.channelsEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.channelsTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.channelsSubcopy}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {copy.channels.map((c, i) => {
              const accents = ['yellow', 'blue', 'violet', 'green'] as const;
              const accent = accents[i % accents.length];
              return (
                <article
                  key={c.email}
                  className="card-light flex flex-col gap-4 p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`h-1.5 w-12 rounded-full bg-spark-${accent}`} />
                    <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-ink/50">
                      {c.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{c.title}</h3>
                    <p className="mt-2 text-ink-soft leading-relaxed">{c.body}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-surface-border pt-4">
                    <a
                      href={`mailto:${c.email}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      {c.email}
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
                    </a>
                    <span className="text-xs text-ink/50">{c.responseTime}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
            <div>
              <span className="eyebrow">{copy.officeEyebrow}</span>
              <h2 className="mt-3 text-display-md text-ink leading-[1.15]">
                {copy.officeTitle}
              </h2>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-md">
                {copy.officeSubcopy}
              </p>
            </div>

            <div className="rounded-3xl border border-surface-border bg-white p-8 md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
                    {copy.hqLabel}
                  </p>
                  <p className="mt-3 font-semibold text-ink">SparkLabs Korea</p>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {copy.addressLine1}
                    <br />
                    {copy.addressLine2}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
                    {copy.directionsLabel}
                  </p>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {copy.directions}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-surface-border pt-6 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=마루180+서울+강남구+역삼로+180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-subtle transition"
                >
                  {copy.googleMaps}
                  <svg
                    className="h-3.5 w-3.5"
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
                  href="https://map.naver.com/p/search/마루180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-subtle transition"
                >
                  {copy.naverMaps}
                  <svg
                    className="h-3.5 w-3.5"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL ENTITIES */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.globalEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink max-w-3xl">
            {copy.globalTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.globalSubcopy}
          </p>

          <div className="mt-10">
            <Link
              href={`/${locale}/about/entities`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink/90 transition"
            >
              {copy.globalCta}
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
          </div>
        </div>
      </section>
    </>
  );
}

const content = {
  ko: {
    eyebrow: 'Contact',
    heroTitle: '필요한 곳에 가장 빠르게 닿을 수 있도록, 목적별 채널을 정리했습니다.',
    heroSubcopy:
      '창업가·파트너·기자·투자자까지 — 각 용건에 맞는 담당팀이 직접 회신드립니다. 이메일 주소는 모두 실제 담당자 메일박스로 연결됩니다.',

    channelsEyebrow: 'Reach Us',
    channelsTitle: '용건에 맞는 채널로 연락주세요.',
    channelsSubcopy:
      '문의 내용을 가장 잘 아는 팀에게 직접 연결됩니다. 회신은 보통 영업일 기준 2일 이내에 드리며, 파트너십·언론 문의는 더 빠르게 처리합니다.',
    channels: [
      {
        title: '창업가 지원',
        body: 'Batch · Partnership · Spark Claw 프로그램 지원, 투자 문의, 포트폴리오사 관련 문의.',
        email: 'apply@sparklabs.co.kr',
        tag: 'For Founders',
        responseTime: '영업일 2일 이내',
      },
      {
        title: '파트너십 · 오픈이노베이션',
        body: '기업 · 정부 · 대학의 오픈이노베이션 프로그램 공동 운영, 전략적 파트너십, LP 문의.',
        email: 'partnership@sparklabs.co.kr',
        tag: 'For Organizations',
        responseTime: '영업일 1일 이내',
      },
      {
        title: '언론 · 미디어',
        body: '보도자료 배포, 인터뷰 요청, 미디어 컨퍼런스 · 이벤트 취재 문의.',
        email: 'press@sparklabs.co.kr',
        tag: 'For Press',
        responseTime: '당일 회신',
      },
      {
        title: '일반 문의',
        body: '위 카테고리에 해당하지 않는 모든 문의. 적절한 담당팀으로 안내해드립니다.',
        email: 'hello@sparklabs.co.kr',
        tag: 'General',
        responseTime: '영업일 2일 이내',
      },
    ],

    officeEyebrow: 'Office',
    officeTitle: '서울 강남, 마루180.',
    officeSubcopy:
      '스파크랩 본사는 강남 테헤란로 창업 생태계의 중심, 마루180에 위치해 있습니다. 방문 전 이메일로 미리 약속을 잡아주세요.',
    hqLabel: '본사',
    addressLine1: '서울특별시 강남구 역삼로 180',
    addressLine2: '마루180 2-3층',
    directionsLabel: '찾아오는 길',
    directions:
      '지하철 2호선 역삼역 7번 출구 도보 5분 / 선릉역 4번 출구 도보 7분. 방문자용 주차는 건물 지하 주차장 이용 가능.',
    googleMaps: 'Google Maps에서 보기',
    naverMaps: '네이버 지도에서 보기',

    globalEyebrow: 'Global Offices',
    globalTitle: '다른 지역 엔티티를 찾고 계신가요?',
    globalSubcopy:
      '스파크랩은 6대륙 8개 엔티티 네트워크로 운영됩니다. 미국 · 대만 · 사우디 · 호주 · 바이오 등 지역·섹터별 엔티티의 연락처는 Entities 페이지에서 확인할 수 있습니다.',
    globalCta: 'Entities 페이지로',
  },
  en: {
    eyebrow: 'Contact',
    heroTitle: 'Channels mapped to what you actually need — get to the right team, fast.',
    heroSubcopy:
      'Founders, partners, press, investors — each inquiry lands directly with the team that handles it. All emails route to real inboxes staffed by the relevant owners.',

    channelsEyebrow: 'Reach Us',
    channelsTitle: 'Pick the right channel for your need.',
    channelsSubcopy:
      'Your message goes straight to the team that knows the answer. Typical reply is within two business days — partnerships and press are faster.',
    channels: [
      {
        title: 'For Founders',
        body: 'Program applications (Batch · Partnership · Spark Claw), investment inquiries, and portfolio-company questions.',
        email: 'apply@sparklabs.co.kr',
        tag: 'For Founders',
        responseTime: 'Within 2 business days',
      },
      {
        title: 'Partnership & Open Innovation',
        body: 'Co-operating innovation programs with corporates, governments, universities. Strategic partnerships. LP inquiries.',
        email: 'partnership@sparklabs.co.kr',
        tag: 'For Organizations',
        responseTime: 'Within 1 business day',
      },
      {
        title: 'Press & Media',
        body: 'Press releases, interview requests, event and conference coverage.',
        email: 'press@sparklabs.co.kr',
        tag: 'For Press',
        responseTime: 'Same-day reply',
      },
      {
        title: 'General Inquiries',
        body: 'Anything that doesn\u2019t fit the categories above. We\u2019ll route you to the right team.',
        email: 'hello@sparklabs.co.kr',
        tag: 'General',
        responseTime: 'Within 2 business days',
      },
    ],

    officeEyebrow: 'Office',
    officeTitle: 'Maru180, Gangnam, Seoul.',
    officeSubcopy:
      'Our HQ is at Maru180, the heart of Seoul\u2019s Gangnam startup cluster. Please email ahead to schedule a visit.',
    hqLabel: 'Headquarters',
    addressLine1: '180 Yeoksam-ro, Gangnam-gu',
    addressLine2: 'Maru180, 2F–3F, Seoul, Korea',
    directionsLabel: 'Getting here',
    directions:
      '5 min walk from Yeoksam Station (Line 2, Exit 7) / 7 min from Seolleung Station (Exit 4). Visitor parking available in the building\u2019s underground lot.',
    googleMaps: 'Open in Google Maps',
    naverMaps: 'Open in Naver Maps',

    globalEyebrow: 'Global Offices',
    globalTitle: 'Looking for a regional entity?',
    globalSubcopy:
      'SparkLabs operates 8 entities across 6 continents. For region- or sector-specific entities — US, Taiwan, Saudi, Australia, BioLabs and more — check the Entities page.',
    globalCta: 'Go to Entities',
  },
} as const;
