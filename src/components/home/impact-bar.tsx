import { getTranslations } from 'next-intl/server';

type Metric = { key: string; value: string; rawNumber: number };

export async function ImpactBar({ metrics }: { metrics: readonly Metric[] }) {
  const t = await getTranslations('impact.metrics');

  return (
    <section className="border-b border-surface-border bg-white">
      <div className="container-narrow py-10">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m) => (
            <div key={m.key} className="text-center md:text-left">
              <div className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {m.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
                {t(m.key)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
