import { getTranslations } from 'next-intl/server';

type Metric = { key: string; value: string; rawNumber: number };

export async function ImpactBar({ metrics }: { metrics: readonly Metric[] }) {
  const t = await getTranslations('impact.metrics');
  const tRoot = await getTranslations('impact');

  return (
    <section className="relative overflow-hidden bg-[#4F46E5] text-white">
      {/* decorative accents */}
      <div
        className="pointer-events-none absolute -top-24 -left-16 h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-narrow relative py-16 md:py-20">
        <span className="eyebrow !text-white/80">{tRoot('eyebrow')}</span>
        <h2 className="mt-3 text-display-md font-semibold leading-tight md:text-display-lg">
          {tRoot('title')}
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-10 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.key}
              className="border-t border-white/25 pt-5"
            >
              <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                {m.value}
              </div>
              <div className="mt-2 text-sm text-white/80 md:text-base">
                {t(m.key)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
