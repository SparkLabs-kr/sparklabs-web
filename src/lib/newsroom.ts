/**
 * Newsroom data aggregator. Pulls MDX entries from 4 collections
 * (press, media, insights, announcements) and normalizes them into
 * a single NewsItem shape for rendering.
 */
import { getAllEntries, type Locale } from './content';
import type { NewsKind, NewsItem } from '@/components/newsroom/news-card';

interface BaseFrontmatter {
  title?: string;
  date?: string;
  summary?: string;
  entity?: string;
  tags?: string[];
  outlet?: string;
  sourceUrl?: string;
  draft?: boolean;
}

const kinds: NewsKind[] = ['press', 'media', 'insights', 'announcements'];

function toItem(kind: NewsKind, slug: string, fm: BaseFrontmatter): NewsItem {
  return {
    kind,
    slug,
    title: fm.title ?? slug,
    date: fm.date,
    summary: fm.summary,
    outlet: fm.outlet,
    sourceUrl: fm.sourceUrl,
    entity: fm.entity,
    tags: fm.tags,
  };
}

export function getAllNews(locale: Locale): NewsItem[] {
  const all: NewsItem[] = [];
  for (const kind of kinds) {
    const entries = getAllEntries<BaseFrontmatter>(kind, locale);
    for (const e of entries) {
      if (e.frontmatter.draft) continue;
      all.push(toItem(kind, e.slug, e.frontmatter));
    }
  }
  return all.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
}

export function getNewsByKind(kind: NewsKind, locale: Locale): NewsItem[] {
  return getAllEntries<BaseFrontmatter>(kind, locale)
    .filter((e) => !e.frontmatter.draft)
    .map((e) => toItem(kind, e.slug, e.frontmatter));
}
