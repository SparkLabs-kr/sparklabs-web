import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export async function HeroSection() {
  const t = await getTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-hero-navy text-white">
      {/* Light ray */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rotate-12 rounded-full bg-spark-ray blur-3xl"
        aria-hidden="true"
      />
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-narrow relative pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-14">
          {/* Left: Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              {t('badge')}
            </span>
            <h1 className="mt-6 text-display-xl max-w-3xl leading-[1.0]">
              <span className="block text-brand-blue-soft">
                {t('headline1')}
              </span>
              <span className="block text-white">{t('headline2')}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              {t('subcopy')}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                {t('primaryCta')} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="btn-ghost-dark">
                {t('secondaryCta')}
              </Link>
            </div>
          </div>

          {/* Right: Autoplay video (portrait 9:16) */}
          <div className="relative mx-auto w-full max-w-[360px] lg:max-w-none">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero/hero-poster.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                aria-label="SparkLabs 소개 영상"
              >
                <source src="/hero/hero.webm" type="video/webm" />
                <source src="/hero/hero.mp4" type="video/mp4" />
              </video>
              {/* Subtle gradient overlay for legibility */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
