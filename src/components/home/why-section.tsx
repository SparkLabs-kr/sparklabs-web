import { getTranslations } from 'next-intl/server';
import { Users, Globe2, Cpu, Network } from 'lucide-react';

export async function WhySection() {
  const t = await getTranslations('why');

  const items = [
    { key: 'founders', icon: Users },
    { key: 'bornGlobal', icon: Globe2 },
    { key: 'aiFirst', icon: Cpu },
    { key: 'sixContinents', icon: Network },
  ];

  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <span className="eyebrow">Principles</span>
        <h2 className="mt-3 text-display-lg text-ink">{t('title')}</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="card-light p-8 transition-transform hover:-translate-y-0.5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-ink">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                {t(`items.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
