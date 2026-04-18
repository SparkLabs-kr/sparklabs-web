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
        <span className="eyebrow !text-spark-yellow">Global Network</span>
        <h2 className="mt-3 text-display-lg">{t('title')}</h2>
        <p className="mt-3 max-w-2xl text-lg text-white/70">{t('subtitle')}</p>

        <div className="mt-12">
          <GlobalMap entities={entities} />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.key} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
