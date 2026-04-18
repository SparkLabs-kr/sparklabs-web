interface Props {
  locale: string;
}

/**
 * Visually hidden link that becomes visible on keyboard focus.
 * Lets screen-reader / keyboard users jump past the nav straight into page content.
 */
export function SkipToMain({ locale }: Props) {
  const label = locale === 'ko' ? '본문으로 건너뛰기' : 'Skip to main content';
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-spark-yellow"
    >
      {label}
    </a>
  );
}
