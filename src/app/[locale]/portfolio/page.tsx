import { setRequestLocale } from 'next-intl/server';
import { PortfolioExplorer } from '@/components/portfolio/portfolio-explorer';
import { portfolio } from '@/lib/portfolio';
import type { Locale } from '@/lib/content';

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const copy = content[locale];
  const total = portfolio.length;

  return (
    <>
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-32 -right-20 h-[520px] w-[520px] rounded-full bg-spark-ray blur-3xl opacity-70"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-20 md:py-24">
          <span className="eyebrow !text-spark-yellow">{copy.eyebrow}</span>
          <h1 className="mt-4 text-display-lg max-w-3xl leading-[1.05]">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {copy.heroSubcopy}
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <Stat value="550+" label={copy.stat1} />
            <Stat value="17" label={copy.stat2} />
            <Stat value="86.7%" label={copy.stat3} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">{copy.exploreEyebrow}</span>
              <h2 className="mt-3 text-display-md text-ink">
                {copy.exploreTitle}
              </h2>
            </div>
            <p className="hidden md:block text-sm text-ink-soft max-w-sm text-right">
              {copy.exploreNote.replace('{n}', String(total))}
            </p>
          </div>

          <div className="mt-10">
            <PortfolioExplorer locale={locale} labels={copy.explorer} />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-semibold">{value}</div>
      <p className="mt-1 text-white/70">{label}</p>
    </div>
  );
}

const content = {
  ko: {
    eyebrow: 'Portfolio',
    heroTitle: '550여 창업가, 17건의 엑싯, 86.7%의 생존율.',
    heroSubcopy:
      '스파크랩은 2013년 이래 6대륙에서 550여 개 스타트업에 투자해왔습니다. 아래에서 엔티티·카테고리로 포트폴리오를 탐색해보세요.',
    stat1: '글로벌 포트폴리오',
    stat2: '엑싯 (IPO·M&A)',
    stat3: '생존율',
    exploreEyebrow: 'Explore',
    exploreTitle: '포트폴리오 탐색',
    exploreNote:
      '대표 기업 {n}개의 미리보기입니다. 전체 DB는 향후 확장됩니다.',
    explorer: {
      searchPlaceholder: '회사명·키워드 검색',
      allCategories: '전체 카테고리',
      allEntities: '전체 엔티티',
      showingCount: '{n}개 회사',
      noResults: '조건에 맞는 회사가 없습니다. 필터를 바꿔보세요.',
      aiPick: 'AI Pick',
      featured: 'Featured',
      stageLabel: 'Stage',
    },
  },
  en: {
    eyebrow: 'Portfolio',
    heroTitle: '550+ founders. 17 exits. 86.7% survival.',
    heroSubcopy:
      "Since 2013, SparkLabs has backed over 550 startups across six continents. Explore our portfolio below — filter by entity or by category.",
    stat1: 'Global portfolio',
    stat2: 'Exits (IPO & M&A)',
    stat3: 'Survival rate',
    exploreEyebrow: 'Explore',
    exploreTitle: 'Browse the portfolio',
    exploreNote:
      'A preview of {n} flagship companies. The full database will expand over time.',
    explorer: {
      searchPlaceholder: 'Search by company or keyword',
      allCategories: 'All categories',
      allEntities: 'All entities',
      showingCount: '{n} companies',
      noResults: 'No companies match your filters. Try a different combination.',
      aiPick: 'AI Pick',
      featured: 'Featured',
      stageLabel: 'Stage',
    },
  },
} as const;
