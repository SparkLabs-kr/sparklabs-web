import { getTranslations } from 'next-intl/server';

type Metric = { key: string; value: string; rawNumber: number };

export async function ImpactBar({ metrics }: { metrics: readonly Metric[] }) {
  const t = await getTranslations('impact.metrics');
  const tRoot = await getTranslations('impact');

  return (
    <section className="relative overflow-hidden bg-brand-blue text-white">
      <div className="container-narrow relative py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
          <div>
            <span className="eyebrow !text-white/80">{tRoot('eyebrow')}</span>
            <h2 className="mt-3 text-display-md font-bold leading-[1.05] md:text-display-lg">
              {tRoot('title')}
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {metrics.map((m) => (
              <div key={m.key} className="border-t border-white/40 pt-5">
                <div className="text-5xl font-extrabold tracking-tight md:text-6xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-white/85 md:text-base">
                  {t(m.key)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
