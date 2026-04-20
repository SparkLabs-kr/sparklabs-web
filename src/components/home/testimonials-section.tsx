'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/testimonials';
import type { Locale } from '@/lib/content';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  locale: Locale;
  copy: {
    eyebrow: string;
    title: string;
    subcopy: string;
    prev: string;
    next: string;
  };
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export function TestimonialsSection({
  testimonials,
  locale,
  copy,
}: TestimonialsSectionProps) {
  const [idx, setIdx] = useState(0);
  const count = testimonials.length;
  const active = testimonials[idx];

  const prev = () => setIdx((i) => (i - 1 + count) % count);
  const next = () => setIdx((i) => (i + 1) % count);

  return (
    <section className="section bg-[#EFEBFE]">
      <div className="container-narrow">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16">
          <div>
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 className="mt-3 text-display-md text-ink">{copy.title}</h2>
            <p className="mt-4 max-w-sm text-ink-soft leading-relaxed">
              {copy.subcopy}
            </p>
            {count > 1 && (
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label={copy.prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-white text-ink transition hover:border-ink hover:text-ink"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={copy.next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-white text-ink transition hover:border-ink hover:text-ink"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="ml-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                  {String(idx + 1).padStart(2, '0')} /{' '}
                  {String(count).padStart(2, '0')}
                </span>
              </div>
            )}
          </div>

          <div className="relative rounded-3xl border border-surface-border bg-white p-8 md:p-12">
            <Quote
              className="absolute -top-5 left-8 h-10 w-10 text-spark-yellow"
              fill="currentColor"
              strokeWidth={0}
            />

            <blockquote className="text-lg leading-relaxed text-ink md:text-xl">
              {active.quote[locale]}
            </blockquote>

            <div className="mt-8 flex items-center gap-4 border-t border-surface-border pt-6">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white">
                {active.photo ? (
                  <Image
                    src={active.photo}
                    alt={active.founderName}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-subtle to-white">
                    <span className="text-base font-semibold text-ink/40">
                      {getInitials(active.founderName)}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-base font-semibold text-ink">
                  {active.founderName}
                  {active.founderKoName && (
                    <span className="ml-2 text-sm font-normal text-ink-soft">
                      {active.founderKoName}
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-sm text-ink-soft">
                  {active.role[locale]} · {active.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
