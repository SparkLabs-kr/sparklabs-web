import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { coInvestors } from '@/lib/co-investors';

export async function CoInvestorsSection() {
  const t = await getTranslations('coInvestors');

  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <span className="inline-block rounded-sm border border-brand-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-blue">
          {t('eyebrow')}
        </span>
        <h2 className="mt-5 text-display-lg text-ink">{t('title')}</h2>
        <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
          {t('subcopy')}
        </p>

        <div className="mt-12 border border-surface-border p-10 md:p-16">
          <div className="grid grid-cols-2 gap-x-10 gap-y-20 sm:grid-cols-3 md:grid-cols-4">
            {coInvestors.map((c) => (
              <div
                key={c.slug}
                className="relative flex h-40 items-center justify-center opacity-90 transition hover:opacity-100 md:h-48"
                title={c.name}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={480}
                  height={192}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 24vw"
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
