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
  return buildPageMetadata({ locale, key: 'newsroomPress', path: '/newsroom/press' });
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  return (
    <NewsSection
      kind="press"
      locale={locale}
      heroTitle={{
        ko: '공식 보도자료.',
        en: 'Official press releases.',
      }}
      heroSubcopy={{
        ko: '스파크랩과 포트폴리오사의 공식 발표를 한 곳에서 확인하세요.',
        en: 'Official announcements from SparkLabs and our portfolio companies — all in one place.',
      }}
      empty={{
        ko: '아직 보도자료가 없습니다.',
        en: 'No press releases yet.',
      }}
    />
  );
}
