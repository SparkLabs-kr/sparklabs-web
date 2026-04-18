import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('portfolio');

  return (
    <section className="section">
      <div className="container-narrow">
        <span className="eyebrow">Portfolio</span>
        <h1 className="mt-3 text-display-xl text-ink">{t('all')}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          전체 포트폴리오 · 필터 시스템은 Phase 2에서 구축됩니다.
        </p>
        <div className="mt-10">
          <Link href="/portfolio/ai" className="btn-primary">
            {t('ai')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
