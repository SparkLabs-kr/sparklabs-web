import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Reveal } from '@/components/ui/reveal';

export async function HeroSection() {
  const t = await getTranslations('hero');

  return (
    <header className="bg-white">
      <div className="container-narrow">
        <div className="grid items-center gap-10 pb-14 pt-10 md:gap-12 md:pb-20 md:pt-24 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          {/* Left: copy */}
          <div>
            <span className="eyebrow text-spark-pink">{t('label')}</span>
            <h1 className="mt-6 font-display text-display-xl">
              Backing the <span className="spark-hl">AI-First</span> founders{' '}
              <span className="font-normal text-muted">
                of Asia &amp; beyond.
              </span>
            </h1>
            <p className="mt-7 max-w-[460px] text-[17px] text-muted">
              {t('sub')}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/programs/batch" className="btn-primary">
                {t('primaryCta')}
              </Link>
              <Link href="/portfolio" className="tlink">
                {t('secondaryCta')} →
              </Link>
            </div>
          </div>

          {/* Right: brand video — grayscale at rest, ignites to color on hover */}
          <Reveal className="photo-hover relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero/hero-poster.jpg"
                className="photo-mono absolute inset-0 h-full w-full object-cover"
                aria-label="SparkLabs 소개 영상"
              >
                <source src="/hero/hero.webm" type="video/webm" />
                <source src="/hero/hero.mp4" type="video/mp4" />
              </video>
            </div>
            <span className="mono-cap mt-3 block font-display tracking-[0.22em]">
              Gangnam, Seoul — Where It Begins
            </span>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
