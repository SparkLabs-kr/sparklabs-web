import { setRequestLocale } from 'next-intl/server';
import { entities } from '@/lib/entities';
import { GlobalMap } from '@/components/home/global-map';
import type { Locale } from '@/lib/content';

const regionOrder: Array<'APAC' | 'Americas' | 'MENA' | 'ANZ'> = [
  'APAC',
  'Americas',
  'MENA',
  'ANZ',
];

const regionLabel: Record<
  'APAC' | 'Americas' | 'MENA' | 'ANZ',
  { ko: string; en: string }
> = {
  APAC: { ko: '아시아·태평양', en: 'Asia-Pacific' },
  Americas: { ko: '미주', en: 'Americas' },
  MENA: { ko: '중동·북아프리카', en: 'Middle East & North Africa' },
  ANZ: { ko: '호주·뉴질랜드', en: 'Australia & New Zealand' },
};

export default async function AboutEntitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const copy = content[locale];

  const grouped = regionOrder
    .map((region) => ({
      region,
      label: regionLabel[region][locale],
      items: entities.filter((e) => e.region === region),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-spark-ray blur-3xl opacity-70"
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

          <div className="mt-12">
            <GlobalMap entities={entities} />
          </div>
        </div>
      </section>

      {grouped.map((group) => (
        <section
          key={group.region}
          className="section border-b border-surface-border last:border-b-0 even:bg-surface-subtle"
        >
          <div className="container-narrow">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-display-md text-ink">{group.label}</h2>
              <span className="text-sm text-ink-soft">
                {group.items.length} {copy.entityWord}
              </span>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {group.items.map((e) => (
                <article
                  key={e.slug}
                  className="card-light flex flex-col gap-4 p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`h-1.5 w-12 rounded-full bg-spark-${e.accent}`} />
                      <h3 className="mt-4 text-xl font-semibold text-ink">
                        {e.name[locale]}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/50">
                        {e.location[locale]}
                      </p>
                    </div>
                    {e.founded && (
                      <span className="shrink-0 rounded-full border border-surface-border px-3 py-1 text-xs text-ink-soft">
                        Est. {e.founded}
                      </span>
                    )}
                  </div>

                  <p className="text-ink-soft leading-relaxed">
                    {e.focus[locale]}
                  </p>

                  {e.leads && e.leads.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-surface-border">
                      <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
                        {copy.leadsLabel}
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">
                        {e.leads.join(' · ')}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

const content = {
  ko: {
    eyebrow: 'Global Network',
    heroTitle: '8개 엔티티, 6대륙의 스파크랩 네트워크.',
    heroSubcopy:
      '스파크랩은 한국에서 시작했지만, 지금은 6대륙에서 직접 운영하는 액셀러레이터·VC 네트워크로 자리잡았습니다. 각 엔티티는 지역의 독립성을 유지하면서도 하나의 생태계로 움직입니다.',
    entityWord: '개 엔티티',
    leadsLabel: 'Leadership',
  },
  en: {
    eyebrow: 'Global Network',
    heroTitle: '8 entities, one global network.',
    heroSubcopy:
      'SparkLabs started in Korea, but today we operate accelerators and venture funds on six continents. Each entity is locally run — yet connected as a single global ecosystem.',
    entityWord: 'entities',
    leadsLabel: 'Leadership',
  },
} as const;
