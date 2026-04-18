import { getTranslations } from 'next-intl/server';
import { SubnavClient } from '@/components/layout/subnav-client';

export default async function PortfolioLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'portfolio' });

  const items = [
    { href: '/portfolio', label: t('all') },
    { href: '/portfolio/ai', label: t('ai') },
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
