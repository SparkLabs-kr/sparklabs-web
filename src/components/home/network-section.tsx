import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { entities } from '@/lib/entities';
import type { Locale } from '@/lib/content';
import { Reveal } from '@/components/ui/reveal';

export async function NetworkSection({ locale }: { locale: Locale }) {
  const t = await getTranslations('home.network');

  return (
    <section className="section" id="network">
      <div className="container-narrow">
        <div className="grid items-start gap-11 lg:grid-cols-[340px_1fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow text-spark-blue">{t('label')}</span>
            <h2 className="mt-5 font-display text-display-lg">
              One Spark,
              <br />
              <span className="font-normal text-muted">Seven Frontiers</span>
            </h2>
            <p className="mt-4 max-w-[540px] text-[16.5px] text-muted">
              {t('sub')}
            </p>
          </Reveal>
          <Reveal className="ink-rule">
            {entities.map((entity) => (
              <Link
                key={entity.slug}
                href={`/about/entities/${entity.slug}`}
                className="grid grid-cols-[1fr_auto] items-baseline gap-5 border-b border-surface-border px-1 py-6 transition-all duration-200 hover:bg-surface-subtle hover:pl-3.5"
              >
                <div>
                  <b className="font-display text-[19px] font-bold tracking-[-0.02em]">
                    {entity.name.en}
                  </b>
                  <small className="mt-0.5 block text-[13.5px] font-normal text-muted">
                    {entity.tagline[locale]}
                  </small>
                </div>
                <span
                  className={`font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-spark-${entity.accent}`}
                >
                  {entity.location.en.split(/[,·]/)[0].trim()}
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
