/**
 * Lightweight MDX content loader.
 *
 * Reads .mdx files from /content/{collection}/{locale}/*.mdx at build time
 * and returns typed data with frontmatter + raw body. No heavy Contentlayer
 * dependency — keeps the pipeline simple and easy to edit via Claude + GitHub.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Locale = 'ko' | 'en';

export type Collection =
  | 'entities'
  | 'portfolio'
  | 'programs'
  | 'press'
  | 'insights'
  | 'announcements';

export interface ContentEntry<TFrontmatter = Record<string, unknown>> {
  slug: string;
  locale: Locale;
  collection: Collection;
  frontmatter: TFrontmatter;
  body: string;
  filepath: string;
}

const CONTENT_ROOT = path.join(process.cwd(), 'content');

function readCollectionDir(collection: Collection, locale: Locale): string[] {
  const dir = path.join(CONTENT_ROOT, collection, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => path.join(dir, f));
}

export function getAllEntries<T = Record<string, unknown>>(
  collection: Collection,
  locale: Locale
): ContentEntry<T>[] {
  const files = readCollectionDir(collection, locale);
  return files
    .map((filepath) => {
      const raw = fs.readFileSync(filepath, 'utf8');
      const { data, content } = matter(raw);
      const slug = path.basename(filepath).replace(/\.(mdx|md)$/, '');
      return {
        slug,
        locale,
        collection,
        frontmatter: data as T,
        body: content,
        filepath,
      };
    })
    .sort((a, b) => {
      const da = (a.frontmatter as any)?.date ?? '';
      const db = (b.frontmatter as any)?.date ?? '';
      return db.localeCompare(da);
    });
}

export function getEntry<T = Record<string, unknown>>(
  collection: Collection,
  locale: Locale,
  slug: string
): ContentEntry<T> | null {
  const dir = path.join(CONTENT_ROOT, collection, locale);
  const candidates = [path.join(dir, `${slug}.mdx`), path.join(dir, `${slug}.md`)];
  const filepath = candidates.find((f) => fs.existsSync(f));
  if (!filepath) return null;
  const raw = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    locale,
    collection,
    frontmatter: data as T,
    body: content,
    filepath,
  };
}
