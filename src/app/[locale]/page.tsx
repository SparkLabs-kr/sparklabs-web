import { getTranslations, setRequestLocale } from 'next-intl/server';

import { HeroSection } from '@/components/home/hero-section';
import { StatLine } from '@/components/home/stat-line';
import { PhilosophySection } from '@/components/home/philosophy-section';
import { ImageBand } from '@/components/home/image-band';
import { NetworkSection } from '@/components/home/network-section';
import { PortfolioSection } from '@/components/home/portfolio-section';
import { QuoteSection } from '@/components/home/quote-section';
import { CtaSection } from '@/components/home/cta-section';
import { PromoPopup } from '@/components/layout/promo-popup';
import type { Locale } from '@/lib/content';

const heroLogos = [
  'WANTED',
  'SPARKPLUS',
  'ALLGANIZE',
  'H2O',
  'GENOPLAN',
  'SENTBE',
  'SWATCHON',
  'FESCARO',
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home.stats');

  return (
    <>
      <HeroSection />
      <StatLine
        stats={[
          {
            value: (
              <>
                320<i className="not-italic text-spark-orange">+</i>
              </>
            ),
            label: t('portfolio'),
          },
          {
            value: (
              <>
                13<i className="not-italic text-spark-pink">yrs</i>
              </>
            ),
            label: t('years'),
          },
          {
            value: <span className="text-spark-blue">7</span>,
            label: t('entities'),
          },
          {
            value: (
              <>
                2<i className="not-italic text-spark-green">x</i>
              </>
            ),
            label: t('batches'),
          },
        ]}
      />

      {/* Flagship portfolio wordmarks */}
      <div className="container-narrow pt-10 md:pt-14">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:justify-between">
          {heroLogos.map((name) => (
            <span
              key={name}
              className="font-display text-[12.5px] font-semibold tracking-[0.16em] text-[#C3C8CD]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <PhilosophySection />
      <ImageBand
        src="/home/band-seoul.png"
        alt="Seoul cityscape at dawn"
        caption="Accelerate Growth. Nothing More."
        monoCaption="Seoul — 05:48 AM"
      />
      <NetworkSection locale={locale as Locale} />
      <PortfolioSection locale={locale as Locale} />
      <QuoteSection locale={locale as Locale} />
      <CtaSection namespace="home.cta" />
      <PromoPopup locale={locale as Locale} />
    </>
  );
}
