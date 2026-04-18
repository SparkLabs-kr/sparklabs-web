import { setRequestLocale } from 'next-intl/server';
import { NewsSection } from '@/components/newsroom/news-section';
import type { Locale } from '@/lib/content';

export default async function MediaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  return (
    <NewsSection
      kind="media"
      locale={locale}
      heroTitle={{
        ko: '언론에 비친 스파크랩.',
        en: 'SparkLabs in the media.',
      }}
      heroSubcopy={{
        ko: '국내외 주요 언론이 스파크랩과 포트폴리오사를 다룬 기사를 모았습니다.',
        en: 'Coverage of SparkLabs and our portfolio by leading Korean and global media.',
      }}
      empty={{
        ko: '아직 미디어 커버리지가 없습니다.',
        en: 'No media coverage yet.',
      }}
    />
  );
}
