import type { MetadataRoute } from 'next';

import { routing } from '@/i18n/routing';
import { getAllNews } from '@/lib/newsroom';
import { entityDetails } from '@/lib/entity-details';
import type { NewsKind } from '@/components/newsroom/news-card';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://www.sparklabs.co.kr';

/** Relative paths rendered once per locale. */
const STATIC_PATHS = [
  '',
  '/about',
  '/about/team',
  '/about/advisors',
  '/about/entities',
  '/portfolio',
  '/portfolio/ai',
  '/programs',
  '/programs/batch',
  '/programs/partnership',
  '/programs/spark-claw',
  '/programs/global',
  '/newsroom',
  '/newsroom/press',
  '/newsroom/media',
  '/newsroom/perspectives',
  '/newsroom/announcements',
  '/contact',
  '/apply',
  '/privacy',
  '/terms',
  '/cookie-policy',
];

/** Hints to crawlers — higher priority for hubs, lower for legal. */
function priorityFor(path: string): number {
  if (path === '') return 1.0;
  if (path === '/portfolio' || path === '/about' || path === '/programs') return 0.9;
  if (path.startsWith('/newsroom/') && path.split('/').length > 2) return 0.6;
  if (path === '/privacy' || path === '/terms' || path === '/cookie-policy') return 0.3;
  return 0.7;
}

function changeFreqFor(path: string): 'daily' | 'weekly' | 'monthly' | 'yearly' {
  if (path.startsWith('/newsroom')) return 'weekly';
  if (path === '/portfolio' || path === '') return 'weekly';
  if (path === '/privacy' || path === '/terms' || path === '/cookie-policy') return 'yearly';
  return 'monthly';
}

function buildAlternateLanguages(path: string) {
  return Object.fromEntries(
    routing.locales.map((loc) => [loc, `${SITE_URL}/${loc}${path}`])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static pages × locales
  for (const locale of routing.locales) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: changeFreqFor(path),
        priority: priorityFor(path),
        alternates: { languages: buildAlternateLanguages(path) },
      });
    }
  }

  // Newsroom detail pages
  for (const locale of routing.locales) {
    const items = getAllNews(locale);
    for (const item of items) {
      const path = `/newsroom/${item.kind satisfies NewsKind}/${item.slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: item.date ? new Date(item.date) : now,
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: { languages: buildAlternateLanguages(path) },
      });
    }
  }

  // Entity detail pages
  for (const locale of routing.locales) {
    for (const slug of Object.keys(entityDetails)) {
      const path = `/about/entities/${slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: buildAlternateLanguages(path) },
      });
    }
  }

  return entries;
}
