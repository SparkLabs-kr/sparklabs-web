'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating jump-to-top button. Appears after scrolling past the first
 * viewport-and-a-half; jumps instantly (no slow smooth-scroll on long pages).
 */
export function ScrollToTop({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={locale === 'ko' ? '맨 위로 이동' : 'Jump to top'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
      className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center border border-ink bg-ink text-white transition-all duration-200 hover:border-spark-pink hover:bg-spark-pink ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
