import { setRequestLocale } from 'next-intl/server';

import { headlineMetrics } from '@/lib/metrics';
import { HeroSection } from '@/components/home/hero-section';
import { ImpactBar } from '@/components/home/impact-bar';
import { NetworkSection } from '@/components/home/network-section';
import { WhySection } from '@/components/home/why-section';
import { AiSpotlight } from '@/components/home/ai-spotlight';
import { LatestNews } from '@/components/home/latest-news';
import type { Locale } from '@/lib/content';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ImpactBar metrics={headlineMetrics} />
      <NetworkSection />
      <WhySection />
      <AiSpotlight />
      <LatestNews locale={locale as Locale} />
    </>
  );
}
