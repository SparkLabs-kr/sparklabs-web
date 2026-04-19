import { getTranslations } from 'next-intl/server';
import { SubnavClient } from '@/components/layout/subnav-client';

export default async function NewsroomLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'newsroom' });

  const items = [
    { href: '/newsroom', label: t('all') },
    { href: '/newsroom/press', label: t('press') },
    { href: '/newsroom/media', label: t('media') },
    { href: '/newsroom/perspectives', label: t('perspectives') },
    { href: '/newsroom/announcements', label: t('announcements') },
  ];

  return (
    <>
      <div className="border-b border-surface-border bg-white">
        <div className="container-narrow">
          <SubnavClient items={items} />
        </div>
      </div>
      {children}
    </>
  );
}
