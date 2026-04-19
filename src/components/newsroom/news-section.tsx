import { getTranslations } from 'next-intl/server';
import { NewsCard, type NewsKind } from './news-card';
import { getNewsByKind } from '@/lib/newsroom';
import type { Locale } from '@/lib/content';

interface Props {
  kind: NewsKind;
  locale: Locale;
  heroTitle: { ko: string; en: string };
  heroSubcopy: { ko: string; en: string };
  empty: { ko: string; en: string };
}

export async function NewsSection({
  kind,
  locale,
  heroTitle,
  heroSubcopy,
  empty,
}: Props) {
  const t = await getTranslations('newsroom');
  const items = getNewsByKind(kind, locale);

  const kindLabel: Record<NewsKind, string> = {
    press: t('press'),
    media: t('media'),
    perspectives: t('perspectives'),
    announcements: t('announcements'),
  };

  return (
    <>
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full bg-spark-ray blur-3xl opacity-70"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-20 md:py-24">
          <span className="eyebrow !text-spark-yellow">
            {kindLabel[kind]}
          </span>
          <h1 className="mt-4 text-display-lg max-w-3xl leading-[1.05]">
            {heroTitle[locale]}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {heroSubcopy[locale]}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-surface-border p-12 text-center text-ink-soft">
              {empty[locale]}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <NewsCard
                  key={`${item.kind}-${item.slug}`}
                  item={item}
                  locale={locale}
                  kindLabel={kindLabel}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
