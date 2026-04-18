import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { SubnavClient } from '@/components/layout/subnav-client';

export default async function AboutLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  const items = [
    { href: '/about', label: t('overview') },
    { href: '/about/team', label: t('team') },
    { href: '/about/entities', label: t('entities') },
    { href: '/about/advisors', label: t('advisors') },
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
