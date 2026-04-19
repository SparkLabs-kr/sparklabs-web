import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { NewsSection } from '@/components/newsroom/news-section';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, key: 'newsroomInsights', path: '/newsroom/insights' });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  return (
    <NewsSection
      kind="insights"
      locale={locale}
      heroTitle={{
        ko: 'SparkLabs Insights.',
        en: 'SparkLabs Insights.',
      }}
      heroSubcopy={{
        ko: '스파크랩 파트너가 직접 쓰는 시장·투자·창업가 인사이트.',
        en: 'Market, investment, and founder insights — written directly by SparkLabs partners.',
      }}
      empty={{
        ko: '아직 인사이트 콘텐츠가 없습니다.',
        en: 'No insights published yet.',
      }}
    />
  );
}
