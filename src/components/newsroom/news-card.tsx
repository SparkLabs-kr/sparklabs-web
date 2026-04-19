import { Link } from '@/i18n/routing';
import { ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/lib/content';

export type NewsKind = 'press' | 'media' | 'insights' | 'announcements';

export interface NewsItem {
  kind: NewsKind;
  slug: string;
  title: string;
  date?: string;
  summary?: string;
  outlet?: string;
  sourceUrl?: string;
  entity?: string;
  tags?: string[];
}

interface Props {
  item: NewsItem;
  locale: Locale;
  kindLabel: Record<NewsKind, string>;
}

function formatDate(iso: string | undefined, locale: Locale): string {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

const kindAccent: Record<NewsKind, string> = {
  press: 'bg-spark-blue/10 text-spark-blue',
  media: 'bg-spark-orange/10 text-spark-orange',
  insights: 'bg-spark-violet/10 text-spark-violet',
  announcements: 'bg-spark-green/10 text-spark-green',
};

export function NewsCard({ item, locale, kindLabel }: Props) {
  const isExternal = item.kind === 'media' && item.sourceUrl;

  const CardInner = (
    <article className="card-light group flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${kindAccent[item.kind]}`}
        >
          {kindLabel[item.kind]}
        </span>
        <ArrowUpRight className="h-4 w-4 text-ink/30 transition group-hover:text-brand-blue" />
      </div>
      <h3 className="mt-4 line-clamp-3 text-lg font-semibold leading-snug text-ink">
        {item.title}
      </h3>
      {item.summary && (
        <p className="mt-3 line-clamp-3 text-sm text-ink-soft leading-relaxed">
          {item.summary}
        </p>
      )}
      <div className="mt-auto flex items-center justify-between pt-5 text-xs text-ink/50">
        {item.date && (
          <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
        )}
        {item.outlet && <span>{item.outlet}</span>}
      </div>
    </article>
  );

  if (isExternal && item.sourceUrl) {
    return (
      <a
        href={item.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardInner}
      </a>
    );
  }

  return (
    <Link href={`/newsroom/${item.kind}/${item.slug}` as any} className="block">
      {CardInner}
    </Link>
  );
}
