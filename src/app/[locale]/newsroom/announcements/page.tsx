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
  return buildPageMetadata({
    locale,
    key: 'newsroomAnnouncements',
    path: '/newsroom/announcements',
  });
}

export default async function AnnouncementsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  return (
    <NewsSection
      kind="announcements"
      locale={locale}
      heroTitle={{
        ko: '공지 및 안내.',
        en: 'Announcements & notices.',
      }}
      heroSubcopy={{
        ko: '프로그램 모집, 행사 안내 등 스파크랩 운영과 관련된 공지사항.',
        en: 'Program calls, event notices, and operational announcements from SparkLabs.',
      }}
      empty={{
        ko: '아직 공지사항이 없습니다.',
        en: 'No announcements yet.',
      }}
    />
  );
}
