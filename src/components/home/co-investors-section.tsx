import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { coInvestors } from '@/lib/co-investors';

export async function CoInvestorsSection() {
  const t = await getTranslations('coInvestors');

  return (
    <section className="section bg-surface-subtle">
      <div className="container-narrow">
        <span className="eyebrow">{t('eyebrow')}</span>
        <h2 className="mt-3 text-display-md text-ink">{t('title')}</h2>
        <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
          {t('subcopy')}
        </p>

        <div className="mt-10 rounded-3xl border border-surface-border bg-white p-6 md:p-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {coInvestors.map((c) => (
              <div
                key={c.slug}
                className="relative flex h-14 items-center justify-center opacity-80 transition hover:opacity-100"
                title={c.name}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={120}
                  height={48}
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 14vw"
                  className="h-full w-auto max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
