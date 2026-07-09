'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { testimonials } from '@/lib/testimonials';
import type { Locale } from '@/lib/content';
import { Reveal } from '@/components/ui/reveal';

export function QuoteSection({ locale }: { locale: Locale }) {
  const t = useTranslations('home.quotes');
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const founderName =
    locale === 'ko' && current.founderKoName
      ? current.founderKoName
      : current.founderName;

  return (
    <section
      className="section border-y border-surface-border bg-surface-subtle"
      id="stories"
    >
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-[820px] text-center">
          <span className="eyebrow text-spark-green">{t('label')}</span>
          <blockquote className="mt-8 font-display text-[clamp(22px,3vw,34px)] font-semibold leading-[1.4] tracking-[-0.025em]">
            &ldquo;{current.quote[locale]}&rdquo;
          </blockquote>
          <div className="mt-8">
            <b className="block font-display text-[14.5px] font-bold">
              {founderName}
            </b>
            <span className="text-[13px] text-muted">
              {current.role[locale]}
            </span>
          </div>
          <div className="mt-10 flex justify-center gap-2.5">
            <button
              type="button"
              aria-label={t('prev')}
              onClick={() =>
                setIndex((index - 1 + testimonials.length) % testimonials.length)
              }
              className="h-9 w-9 border border-faint text-sm text-ink transition-colors hover:border-spark-pink hover:bg-spark-pink hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              aria-label={t('next')}
              onClick={() => setIndex((index + 1) % testimonials.length)}
              className="h-9 w-9 border border-faint text-sm text-ink transition-colors hover:border-spark-pink hover:bg-spark-pink hover:text-white"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
