'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/content';

/**
 * 홈페이지 프로모션 팝업.
 * 기존 sparklabs.co.kr에 게재되어 있던 '모두의 창업' 페이지 안내 배너를
 * Next.js 기반 사이트로 이관. 24시간 동안 다시 보지 않기 지원.
 */

const STORAGE_KEY = 'sparklabs_promo_popup_dismissed_until';
const DISMISS_HOURS = 24;

const copy = {
  ko: {
    tag: 'Notice',
    title: '모두의 창업',
    body: '스파크랩이 ‘모두의 창업’과 함께 예비 창업가들을 위한 정보를 공유합니다. 창업에 관심 있는 분이라면 누구나 참여할 수 있습니다.',
    primaryCta: '자세히 보기',
    hideCta: '24시간 동안 보지 않기',
    closeLabel: '팝업 닫기',
  },
  en: {
    tag: 'Notice',
    title: 'Modoo Startup',
    body: 'SparkLabs partners with “Modoo Startup” to share resources for aspiring founders. Open to anyone curious about starting a company.',
    primaryCta: 'Learn more',
    hideCta: 'Hide for 24 hours',
    closeLabel: 'Close popup',
  },
} as const;

const TARGET_URL = 'https://www.modoo.or.kr/organization/sparklab';

export function PromoPopup({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = copy[locale];

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const until = Number(raw);
        if (Number.isFinite(until) && Date.now() < until) {
          return;
        }
      }
    } catch {
      // localStorage 접근 불가 — 그냥 팝업을 띄움
    }
    // 2초 딜레이 후 오픈 (초기 LCP 방해 최소화)
    const timer = window.setTimeout(() => setOpen(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => setOpen(false);

  const hideForDay = () => {
    try {
      const until = Date.now() + DISMISS_HOURS * 60 * 60 * 1000;
      window.localStorage.setItem(STORAGE_KEY, String(until));
    } catch {
      // noop
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
    >
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={close}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="relative h-36 bg-hero-navy">
          <div
            className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-spark-yellow/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-spark-violet/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex h-full items-center justify-between px-6">
            <span className="text-xs uppercase tracking-[0.18em] text-spark-yellow">
              {t.tag}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={t.closeLabel}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <h2
            id="promo-popup-title"
            className="text-2xl font-semibold text-ink leading-tight"
          >
            {t.title}
          </h2>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">{t.body}</p>
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={hideForDay}
              className="text-sm text-ink/60 underline-offset-4 hover:text-ink hover:underline"
            >
              {t.hideCta}
            </button>
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink/90 transition"
            >
              {t.primaryCta}
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
