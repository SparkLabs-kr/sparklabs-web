import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { portfolio, type PortfolioCompany } from '@/lib/portfolio';
import { entities } from '@/lib/entities';
import type { Locale } from '@/lib/content';

export default async function AiPortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const copy = content[locale];

  const aiCompanies = portfolio.filter((p) => p.aiPick);
  const global = aiCompanies.filter((c) =>
    ['global-ventures', 'group'].includes(c.entity)
  );
  const korean = aiCompanies.filter(
    (c) => !['global-ventures', 'group'].includes(c.entity)
  );

  return (
    <>
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-40 -right-28 h-[520px] w-[520px] rounded-full bg-spark-ray blur-3xl opacity-75"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-32 h-[420px] w-[420px] rounded-full bg-spark-violet/40 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-20 md:py-28">
          <span className="eyebrow !text-spark-violet">{copy.eyebrow}</span>
          <h1 className="mt-4 text-display-xl max-w-3xl leading-[1.02]">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {copy.heroSubcopy}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-2xl">
            <FundCard title={copy.fundTitle1} value="$50M" subtitle={copy.fundSub1} />
            <FundCard title={copy.fundTitle2} value="5" subtitle={copy.fundSub2} />
            <FundCard title={copy.fundTitle3} value="2013" subtitle={copy.fundSub3} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">{copy.globalEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">{copy.globalTitle}</h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.globalSubcopy}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {global.map((c) => (
              <AiSpotlightCard key={c.slug} company={c} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <span className="eyebrow">{copy.koreanEyebrow}</span>
          <h2 className="mt-3 text-display-md text-ink">{copy.koreanTitle}</h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {copy.koreanSubcopy}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {korean.map((c) => (
              <AiSpotlightCard key={c.slug} company={c} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="rounded-3xl bg-hero-navy text-white p-10 md:p-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-display-sm">{copy.ctaTitle}</h2>
                <p className="mt-4 text-white/75 leading-relaxed">
                  {copy.ctaSubcopy}
                </p>
              </div>
              <Link href="/portfolio" className="btn-primary shrink-0">
                {copy.ctaButton} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FundCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm">
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
        {title}
      </p>
      <div className="mt-2 text-3xl font-semibold">{value}</div>
      <p className="mt-1 text-xs text-white/60">{subtitle}</p>
    </div>
  );
}

function AiSpotlightCard({
  company,
  locale,
}: {
  company: PortfolioCompany;
  locale: Locale;
}) {
  const entityMeta = entities.find((e) => e.slug === company.entity);
  const accent = entityMeta?.accent ?? 'violet';

  return (
    <article className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-card">
      <div className={`h-1.5 w-12 rounded-full bg-spark-${accent}`} />
      <h3 className="mt-4 text-xl font-semibold text-ink">{company.name}</h3>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
        {company.tagline[locale]}
      </p>
      {company.highlight && (
        <p className="mt-3 rounded-lg bg-spark-violet/5 px-3 py-2 text-xs text-spark-violet">
          {company.highlight[locale]}
        </p>
      )}
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-4 text-xs text-ink/50">
        {company.stage && (
          <span className="rounded-full border border-surface-border px-2 py-0.5">
            {company.stage}
          </span>
        )}
        <span className="rounded-full border border-surface-border px-2 py-0.5">
          {entityMeta?.shortName ?? company.entity}
        </span>
      </div>
    </article>
  );
}

const content = {
  ko: {
    eyebrow: 'AI Portfolio · Strategic Focus',
    heroTitle: 'AI 시대의 리더에 가장 일찍 베팅해 왔습니다.',
    heroSubcopy:
      'OpenAI·Anthropic·Perplexity·xAI·Groq — 스파크랩은 글로벌 AI 리더에 초기부터 투자해왔고, $50M AIM AI Fund로 한국 AI 주역까지 베팅을 이어갑니다.',
    fundTitle1: 'AIM AI Fund',
    fundSub1: '한국 AI 기업 집중 투자',
    fundTitle2: 'Global AI Leaders',
    fundSub2: 'OpenAI·Anthropic·Perplexity·xAI·Groq',
    fundTitle3: 'AI Bets Since',
    fundSub3: '설립 첫해부터 AI 베팅',
    globalEyebrow: 'Global AI Leaders',
    globalTitle: '글로벌 AI 생태계의 축',
    globalSubcopy:
      '스파크랩은 LLM·AI 하드웨어·AI 검색 등 AI 스택의 각 레이어에서 리더에 투자해 왔습니다. 단순 재무 투자자가 아니라 창업가의 조언자·파트너로서 관계를 이어갑니다.',
    koreanEyebrow: 'Korean AI Champions',
    koreanTitle: '한국 AI 생태계의 주역',
    koreanSubcopy:
      'AI 언어 학습부터 산업 AI·금융 AI·리서치 AI까지, 한국 AI 생태계의 다음 챕터를 만들고 있는 스파크랩 포트폴리오사입니다.',
    ctaTitle: '전체 포트폴리오를 만나보세요.',
    ctaSubcopy:
      'AI 외에도 핀테크·바이오·모빌리티·커머스 등 다양한 섹터의 550여 포트폴리오사가 스파크랩과 함께하고 있습니다.',
    ctaButton: '전체 포트폴리오 보기',
  },
  en: {
    eyebrow: 'AI Portfolio · Strategic Focus',
    heroTitle: 'Backing the AI revolution since day one.',
    heroSubcopy:
      "From OpenAI, Anthropic, Perplexity, xAI and Groq to Korea's AI champions — SparkLabs has been investing in the leaders of the AI era early, powered by a $50M AIM AI Fund.",
    fundTitle1: 'AIM AI Fund',
    fundSub1: "Dedicated to Korea's AI leaders",
    fundTitle2: 'Global AI Leaders',
    fundSub2: 'OpenAI · Anthropic · Perplexity · xAI · Groq',
    fundTitle3: 'AI Bets Since',
    fundSub3: 'Investing in AI from year one',
    globalEyebrow: 'Global AI Leaders',
    globalTitle: 'Anchors of the global AI stack',
    globalSubcopy:
      "Across LLMs, AI hardware, and AI search, SparkLabs has backed leaders at every layer of the AI stack — not just as financial investors, but as operators and allies to their founders.",
    koreanEyebrow: 'Korean AI Champions',
    koreanTitle: "Leaders shaping Korea's AI era",
    koreanSubcopy:
      "From AI language learning to industrial AI, financial AI, and research AI — these are the SparkLabs companies writing Korea's next AI chapter.",
    ctaTitle: 'See the full portfolio',
    ctaSubcopy:
      'Beyond AI, SparkLabs backs 550+ companies across fintech, bio, mobility, commerce, and more — across six continents.',
    ctaButton: 'Browse all portfolio',
  },
} as const;
