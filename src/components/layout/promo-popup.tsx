'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/content';

/**
 * 홈페이지 팝업 레이어.
 * - 모두의 창업 안내 (상단 이미지 + 하단 텍스트)
 * - 사칭 투자 권유 사기 주의 안내
 * 두 팝업은 데스크톱에서 나란히, 모바일에서는 수직 스택으로 표시.
 * 각각 독립적으로 24시간 동안 다시 보지 않기 가능.
 */

const MODOO_KEY = 'sparklabs_promo_popup_dismissed_until';
const SCAM_KEY = 'sparklabs_scam_popup_dismissed_until';
const DISMISS_HOURS = 24;

const modooCopy = {
  ko: {
    tag: 'Notice',
    title: '모두의 창업',
    body: '스파크랩이 ‘모두의 창업’과 함께 예비 창업가들을 위한 정보를 공유합니다. 창업에 관심 있는 분이라면 누구나 참여할 수 있습니다.',
    primaryCta: '자세히 보기',
    hideCta: '24시간 동안 보지 않기',
    closeLabel: '팝업 닫기',
    posterAlt: '모두의 창업 포스터',
  },
  en: {
    tag: 'Notice',
    title: 'Modoo Startup',
    body: 'SparkLabs partners with “Modoo Startup” to share resources for aspiring founders. Open to anyone curious about starting a company.',
    primaryCta: 'Learn more',
    hideCta: 'Hide for 24 hours',
    closeLabel: 'Close popup',
    posterAlt: 'Modoo Startup poster',
  },
} as const;

const scamCopy = {
  ko: {
    tag: 'Important',
    title: '스파크랩 사칭 투자 권유 사기 주의 안내',
    closeLabel: '팝업 닫기',
    hideCta: '24시간 동안 보지 않기',
    closeCta: '닫기',
    list: [
      '개인 투자자를 대상으로 한 금융상품 정보 제공 또는 자금 수신',
      '수익 보장형 투자 프로그램 운영',
      '투자 권유나 상담을 목적으로 한 채팅방·메신저·SNS 계정 운영',
    ],
  },
  en: {
    tag: 'Important',
    title: 'Warning: Investment Fraud Impersonating SparkLabs',
    closeLabel: 'Close popup',
    hideCta: 'Hide for 24 hours',
    closeCta: 'Close',
    list: [
      'Providing financial product information or receiving funds from individual investors',
      'Operating guaranteed-return investment programs',
      'Running chat rooms, messengers, or SNS accounts for investment solicitation or consulting',
    ],
  },
} as const;

const TARGET_URL = 'https://www.modoo.or.kr/organization/sparklab';
const POSTER_SRC = '/promo/modoo-startup-poster.jpg';
const MARK_SRC = '/brand/sparklabs-mark.png';

function dismissedUntil(key: string): boolean {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw) {
      const until = Number(raw);
      if (Number.isFinite(until) && Date.now() < until) return true;
    }
  } catch {
    // ignore
  }
  return false;
}

function setDismissed(key: string) {
  try {
    const until = Date.now() + DISMISS_HOURS * 60 * 60 * 1000;
    window.localStorage.setItem(key, String(until));
  } catch {
    // ignore
  }
}

export function PromoPopup({ locale }: { locale: Locale }) {
  const [modooOpen, setModooOpen] = useState(false);
  const [scamOpen, setScamOpen] = useState(false);
  const modoo = modooCopy[locale];
  const scam = scamCopy[locale];

  useEffect(() => {
    // 2초 딜레이 후 오픈 (초기 LCP 방해 최소화)
    const timer = window.setTimeout(() => {
      if (!dismissedUntil(MODOO_KEY)) setModooOpen(true);
      if (!dismissedUntil(SCAM_KEY)) setScamOpen(true);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!modooOpen && !scamOpen) return null;

  const closeAll = () => {
    setModooOpen(false);
    setScamOpen(false);
  };

  const closeModoo = () => setModooOpen(false);
  const hideModooForDay = () => {
    setDismissed(MODOO_KEY);
    setModooOpen(false);
  };

  const closeScam = () => setScamOpen(false);
  const hideScamForDay = () => {
    setDismissed(SCAM_KEY);
    setScamOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto p-4"
    >
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={closeAll}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />
      <div className="relative flex w-full max-w-5xl flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-center">
        {modooOpen && (
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="relative aspect-[3/4] w-full bg-ink">
              <Image
                src={POSTER_SRC}
                alt={modoo.posterAlt}
                fill
                sizes="(max-width: 640px) 100vw, 448px"
                className="object-contain"
                priority
              />
              <button
                type="button"
                onClick={closeModoo}
                aria-label={modoo.closeLabel}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-white backdrop-blur-sm hover:bg-ink/80 transition"
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
              <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
                {modoo.tag}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <h2
                id="promo-popup-title"
                className="text-2xl font-semibold text-ink leading-tight"
              >
                {modoo.title}
              </h2>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {modoo.body}
              </p>
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={hideModooForDay}
                  className="text-sm text-ink/60 underline-offset-4 hover:text-ink hover:underline"
                >
                  {modoo.hideCta}
                </button>
                <a
                  href={TARGET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeModoo}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink/90 transition"
                >
                  {modoo.primaryCta}
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
        )}

        {scamOpen && (
          <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-surface-border px-6 pt-6 pb-4">
              <div className="flex items-center gap-3">
                <Image
                  src={MARK_SRC}
                  alt="SparkLabs"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
                <span className="inline-flex items-center rounded-full bg-[#E74F8E]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#E74F8E]">
                  {scam.tag}
                </span>
              </div>
              <button
                type="button"
                onClick={closeScam}
                aria-label={scam.closeLabel}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink/50 hover:bg-surface-subtle hover:text-ink transition"
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
            <div className="max-h-[60vh] overflow-y-auto px-6 py-6 sm:px-8">
              <h2 className="text-xl font-semibold text-ink leading-tight">
                {scam.title}
              </h2>
              <div className="mt-4 space-y-4 text-sm text-ink-soft leading-relaxed">
                {locale === 'ko' ? (
                  <>
                    <p>
                      최근 스파크랩(SparkLabs)의 사명, 로고, 또는 임직원을 사칭하여 인스타그램, 카카오톡 오픈채팅방, 문자, 네이버 밴드, 다음 카페 등 각종 소셜미디어를 통해{' '}
                      <strong className="font-semibold text-ink">자동매매 프로그램, 고수익 투자 등</strong>의 문구로{' '}
                      <strong className="font-semibold text-ink">투자를 유도하는 사례</strong>가 발생하고 있습니다.
                    </p>
                    <p>
                      스파크랩은 창업가를 지원하는 엑셀러레이터이자 「벤처투자 촉진에 관한 법률」에 따른 벤처투자회사로서,{' '}
                      <strong className="font-semibold text-ink">다음과 같은 행위를 일절 하지 않습니다.</strong>
                    </p>
                    <ul className="list-disc space-y-1.5 pl-5">
                      {scam.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p>
                      따라서 위와 같은 행위를 하는 자 또는 단체는 당사와 전혀 무관한 사칭 행위임을 알려드립니다.
                    </p>
                    <p>
                      스파크랩의 이름, 로고, 대표자 및 임직원 명의가 사용된 계정이나 채널을 발견하신 경우, 즉시 해당 플랫폼(카카오톡, 텔레그램, 인스타그램 등)에 신고해주시기 바랍니다.
                    </p>
                    <p>
                      피해가 발생하신 경우에는{' '}
                      <strong className="font-semibold text-ink">
                        가까운 경찰서, 사이버수사대, 또는 금융감독원(1332)
                      </strong>
                      에 즉시 신고해주시기 바랍니다.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      There have been recent cases of scammers impersonating SparkLabs — using our company name, logo, or staff identity — on Instagram, KakaoTalk Open Chat, SMS, Naver Band, Daum Cafe, and other social media platforms, promoting{' '}
                      <strong className="font-semibold text-ink">
                        auto-trading programs, high-return investments
                      </strong>{' '}
                      and{' '}
                      <strong className="font-semibold text-ink">soliciting investments</strong>.
                    </p>
                    <p>
                      SparkLabs is a startup accelerator and a venture capital firm registered under Korea&apos;s Venture Investment Promotion Act.{' '}
                      <strong className="font-semibold text-ink">
                        We never engage in any of the following:
                      </strong>
                    </p>
                    <ul className="list-disc space-y-1.5 pl-5">
                      {scam.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p>
                      Any individual or group engaged in such activities is impersonating SparkLabs and has no connection to our company.
                    </p>
                    <p>
                      If you encounter any account or channel using the SparkLabs name, logo, CEO, or staff identity, please report it immediately to the relevant platform (KakaoTalk, Telegram, Instagram, etc.).
                    </p>
                    <p>
                      If you have suffered damage, please report it immediately to{' '}
                      <strong className="font-semibold text-ink">
                        your local police, the Cyber Investigation Division, or the Financial Supervisory Service (1332)
                      </strong>
                      .
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-surface-border px-6 py-4 sm:px-8">
              <button
                type="button"
                onClick={hideScamForDay}
                className="text-sm font-medium text-ink/70 underline-offset-4 hover:text-ink hover:underline"
              >
                {scam.hideCta}
              </button>
              <button
                type="button"
                onClick={closeScam}
                className="text-sm font-medium text-ink/70 hover:text-ink transition"
              >
                {scam.closeCta}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
