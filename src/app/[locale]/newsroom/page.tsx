import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getAllNews } from '@/lib/newsroom';
import { NewsCard, type NewsKind } from '@/components/newsroom/news-card';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'newsroom', path: '/newsroom' });
}

export default async function NewsroomPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations('newsroom');
  const items = getAllNews(locale);
  const copy = content[locale];

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
          <span className="eyebrow !text-spark-yellow">{copy.eyebrow}</span>
          <h1 className="mt-4 text-display-lg max-w-3xl leading-[1.05]">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            {copy.heroSubcopy}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-surface-border p-12 text-center text-ink-soft">
              {copy.empty}
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

const content = {
  ko: {
    eyebrow: 'Newsroom',
    heroTitle: '스파크랩의 최신 소식과 관점.',
    heroSubcopy:
      '보도자료, 언론 보도, 관점, 공지사항까지 — 스파크랩과 포트폴리오사의 이야기를 한 곳에서 만나보세요.',
    empty: '아직 뉴스룸 콘텐츠가 없습니다.',
  },
  en: {
    eyebrow: 'Newsroom',
    heroTitle: 'Latest news and perspectives from SparkLabs.',
    heroSubcopy:
      "Press releases, media coverage, perspectives, and announcements — everything from SparkLabs and our portfolio, in one place.",
    empty: 'No newsroom content yet.',
  },
} as const;
