'use client';

import { useEffect } from 'react';

/**
 * Updates the <html lang="..."> attribute on the client side to match the
 * current locale. The root layout sets a default (`ko`) because the <html>
 * tag lives above the [locale] segment and can't read the route param
 * statically. This small effect keeps the attribute in sync for a11y and SEO.
 */
export function LocaleHtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);
  return null;
}
