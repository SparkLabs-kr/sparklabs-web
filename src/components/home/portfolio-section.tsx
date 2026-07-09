import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/lib/content';
import { Reveal } from '@/components/ui/reveal';

/** Home showcase — six flagship companies, copy per the approved v5 design. */
const showcase = [
  {
    name: 'Allganize',
    category: 'AI · Enterprise',
    tagline: {
      ko: '기업용 LLM 앱 빌더와 AI 에이전트로 업무를 자동화',
      en: 'Automating work with enterprise LLM app builders and AI agents',
    },
  },
  {
    name: { ko: '원티드랩', en: 'Wantedlab' },
    category: 'HR Tech · AI',
    tagline: {
      ko: '데이터와 AI로 일의 미래를 만드는 HR테크 상장 기업',
      en: 'A publicly listed HR-tech company shaping the future of work with data and AI',
    },
  },
  {
    name: { ko: '스파크플러스', en: 'SparkPlus' },
    category: 'Proptech',
    tagline: {
      ko: '고객 추천 지수 1위, 빠르게 성장하는 공유오피스',
      en: "Korea's fastest-growing flexible workspace, first in customer NPS",
    },
  },
  {
    name: 'H2O Hospitality',
    category: 'Hospitality DX',
    tagline: {
      ko: '4만 개 객실을 운영하는 호스피탈리티 DX 선도 기업',
      en: 'A hospitality DX leader operating 40,000 rooms',
    },
  },
  {
    name: 'Sentbe',
    category: 'Fintech',
    tagline: {
      ko: '국경을 넘는 송금을 혁신하는 크로스보더 핀테크',
      en: 'Cross-border fintech reinventing international remittance',
    },
  },
  {
    name: 'Genoplan',
    category: 'Healthcare',
    tagline: {
      ko: '유전자 분석 기반 개인 맞춤형 헬스케어 플랫폼',
      en: 'Personalized healthcare platform built on genomic analysis',
    },
  },
];

const hoverColors = [
  'hover:bg-spark-orange',
  'hover:bg-spark-pink',
  'hover:bg-spark-blue',
  'hover:bg-spark-green',
];

export async function PortfolioSection({ locale }: { locale: Locale }) {
  const t = await getTranslations('home.portfolio');

  return (
    <section className="pb-16 md:pb-32" id="portfolio">
      <div className="container-narrow">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-7 md:mb-14">
          <div>
            <span className="eyebrow text-spark-pink">{t('label')}</span>
            <h2 className="mt-5 font-display text-display-lg">
              Sparks that became{' '}
              <span className="font-normal text-muted">wildfires</span>
            </h2>
          </div>
          <Link href="/portfolio" className="tlink">
            {t('viewAll')} →
          </Link>
        </Reveal>
        <div className="grid gap-px border border-surface-border bg-surface-border md:grid-cols-3">
          {showcase.map((company, i) => {
            const name =
              typeof company.name === 'string'
                ? company.name
                : company.name[locale];
            return (
              <Reveal
                key={company.category}
                className={`group flex min-h-[185px] flex-col bg-white p-8 transition-colors duration-200 hover:text-white ${
                  hoverColors[i % 4]
                }`}
              >
                <span className="mb-auto font-display text-[10.5px] font-semibold uppercase tracking-[0.22em] text-faint transition-colors duration-200 group-hover:text-white/70">
                  {company.category}
                </span>
                <h3 className="mt-8 font-display text-[21px] font-bold tracking-[-0.025em]">
                  {name}
                </h3>
                <p className="mt-2 text-[13.5px] text-muted transition-colors duration-200 group-hover:text-white/75">
                  {company.tagline[locale]}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
