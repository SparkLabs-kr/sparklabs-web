'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export interface PersonCardProps {
  name: string;
  koName?: string;
  title: string;
  bio?: string;
  photo?: string;
  accent?:
    | 'yellow'
    | 'teal'
    | 'coral'
    | 'navy'
    | 'blue'
    | 'violet'
    | 'red'
    | 'green'
    | 'pink'
    | 'orange';
  size?: 'sm' | 'md' | 'lg';
}

const accentMap: Record<NonNullable<PersonCardProps['accent']>, string> = {
  yellow: 'bg-spark-yellow',
  teal: 'bg-spark-teal',
  coral: 'bg-spark-coral',
  navy: 'bg-hero-navy',
  blue: 'bg-spark-blue',
  violet: 'bg-spark-violet',
  red: 'bg-spark-red',
  green: 'bg-spark-green',
  pink: 'bg-spark-pink',
  orange: 'bg-spark-orange',
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export default function PersonCard({
  name,
  koName,
  title,
  bio,
  photo,
  accent = 'yellow',
  size = 'md',
}: PersonCardProps) {
  const [open, setOpen] = useState(false);
  const hasBio = Boolean(bio);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    // prevent background scroll
    const { body } = document;
    const prevOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      body.style.overflow = prevOverflow;
    };
  }, [open]);

  const photoAspect =
    size === 'lg'
      ? 'aspect-[4/5]'
      : size === 'sm'
        ? 'aspect-square'
        : 'aspect-[4/5]';

  const cardInner = (
    <>
      <div
        className={`relative ${photoAspect} w-full overflow-hidden rounded-xl bg-surface-subtle`}
      >
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-subtle to-white">
            <span className="text-3xl font-semibold text-ink/40">
              {getInitials(name)}
            </span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className={`h-1 w-8 rounded-full ${accentMap[accent]}`} />
        <h3 className="mt-2 text-base font-semibold text-ink">
          {name}
          {koName && (
            <span className="ml-2 text-sm font-normal text-ink-soft">
              {koName}
            </span>
          )}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
          {title}
        </p>
      </div>
    </>
  );

  return (
    <>
      {hasBio ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full rounded-2xl border border-surface-border bg-white p-4 text-left transition hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-spark-yellow"
          aria-label={`${name} — 약력 보기`}
        >
          {cardInner}
          <span className="mt-3 inline-flex items-center text-xs font-semibold text-ink/50 group-hover:text-ink">
            약력 보기 &rarr;
          </span>
        </button>
      ) : (
        <div className="rounded-2xl border border-surface-border bg-white p-4">
          {cardInner}
        </div>
      )}

      {open && hasBio && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} 약력`}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-ink-soft transition hover:bg-surface-subtle hover:text-ink"
              aria-label="닫기"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>

            <div className="flex flex-col gap-6 md:flex-row">
              {photo && (
                <div className="relative h-40 w-32 shrink-0 overflow-hidden rounded-2xl bg-surface-subtle">
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className={`h-1 w-10 rounded-full ${accentMap[accent]}`} />
                <h3 className="mt-3 text-xl font-semibold text-ink md:text-2xl">
                  {name}
                  {koName && (
                    <span className="ml-2 text-base font-normal text-ink-soft">
                      {koName}
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                  {title}
                </p>
              </div>
            </div>

            {bio && (
              <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-ink-soft md:text-base">
                {bio}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
