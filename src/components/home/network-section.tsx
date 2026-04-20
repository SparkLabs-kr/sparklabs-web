import { getTranslations } from 'next-intl/server';
import { entities } from '@/lib/entities';
import { GlobalMap } from './global-map';

export async function NetworkSection() {
  const t = await getTranslations('network');

  const pillars = [
    { key: 'presence', title: t('pillars.presence.title'), body: t('pillars.presence.body') },
    { key: 'network', title: t('pillars.network.title'), body: t('pillars.network.body') },
    { key: 'ecosystem', title: t('pillars.ecosystem.title'), body: t('pillars.ecosystem.body') },
  ];

  return (
    <section className="section bg-navy-deep text-white">
      <div className="container-narrow">
        <span className="eyebrow !text-brand-blue-soft">Global Network</span>
        <h2 className="mt-3 text-display-lg">{t('title')}</h2>
        <p className="mt-4 max-w-2xl text-lg text-white/70">{t('subtitle')}</p>

        <div className="mt-14">
          <GlobalMap entities={entities} />
        </div>

        <div className="mt-16 grid gap-0 md:grid-cols-3 md:gap-8">
          {pillars.map((p, idx) => (
            <div
              key={p.key}
              className="group border-t border-white/15 py-8 md:border-t-0 md:border-l md:pl-8 md:py-0 md:first:border-l-0 md:first:pl-0"
            >
              <span className="inline-block rounded-full border border-brand-blue-soft px-3 py-1 text-xs font-semibold tracking-[0.08em] text-brand-blue-soft">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
