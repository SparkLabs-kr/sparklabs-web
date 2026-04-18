'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function LanguageToggle({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('locale');

  const next = currentLocale === 'ko' ? 'en' : 'ko';

  function switchLang() {
    router.replace(pathname, { locale: next });
  }

  return (
    <button
      type="button"
      onClick={switchLang}
      className="rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft transition hover:bg-surface-subtle"
      aria-label={`Switch to ${t(next)}`}
    >
      {next.toUpperCase()}
    </button>
  );
}
