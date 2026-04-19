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

        <div className="mt-10 rounded-3xl border border-surface-border bg-white p-8 md:p-14">
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {coInvestors.map((c) => (
              <div
                key={c.slug}
                className="relative flex h-20 items-center justify-center opacity-85 transition hover:opacity-100 md:h-24"
                title={c.name}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={240}
                  height={96}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  className="h-full w-auto max-w-[200px] object-contain md:max-w-[220px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
