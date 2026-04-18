import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

/**
 * Builds per-page <Metadata> from the `seo.{key}` i18n namespace
 * and a `path` (e.g. `/about/team`). Produces canonical + hreflang alternates
 * and localized OG tags automatically.
 */
export async function buildPageMetadata({
  locale,
  key,
  path,
}: {
  locale: string;
  key: string;
  path: string;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'seo' });
  const title = t(`${key}.title`);
  const description = t(`${key}.description`);

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${cleanPath}`,
      languages: {
        ko: `/ko${cleanPath}`,
        en: `/en${cleanPath}`,
        'x-default': `/ko${cleanPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}${cleanPath}`,
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
    },
    twitter: {
      title,
      description,
    },
  };
}
