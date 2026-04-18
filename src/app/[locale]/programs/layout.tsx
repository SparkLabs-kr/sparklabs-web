import { getTranslations } from 'next-intl/server';
import { SubnavClient } from '@/components/layout/subnav-client';

export default async function ProgramsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'programs' });

  const items = [
    { href: '/programs/batch', label: t('batch') },
    { href: '/programs/partnership', label: t('partnership') },
    { href: '/programs/spark-claw', label: t('sparkClaw') },
    { href: '/programs/global', label: t('global') },
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
