import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

import { headlineMetrics } from '@/lib/metrics';
import { HeroSection } from '@/components/home/hero-section';
import { ImpactBar } from '@/components/home/impact-bar';
import { NetworkSection } from '@/components/home/network-section';
import { WhySection } from '@/components/home/why-section';
import { AiSpotlight } from '@/components/home/ai-spotlight';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('news');

  return (
    <>
      <HeroSection />
      <ImpactBar metrics={headlineMetrics} />
      <NetworkSection />
      <WhySection />
      <AiSpotlight />
      {/* Latest News placeholder — will wire to Newsroom collection */}
      <section className="section bg-surface-subtle">
        <div className="container-narrow">
          <div className="flex items-end justify-between">
            <h2 className="text-display-md text-ink">{t('title')}</h2>
            <Link href="/newsroom" className="btn-ghost-light">
              {t('cta')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <article key={i} className="card-light p-6">
                <span className="eyebrow">Press</span>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  기사 제목 자리 — 뉴스룸 연동 후 자동 노출
                </h3>
                <p className="mt-3 text-sm text-ink-soft">
                  MDX 파일로 기사를 추가하면 이 카드가 자동으로 채워집니다.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
