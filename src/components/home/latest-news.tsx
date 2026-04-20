import { getTranslations } from 'next-intl/server';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getAllEntries } from '@/lib/content';
import type { Locale } from '@/lib/content';

interface PressFrontmatter {
  title: string;
  date: string;
  summary: string;
  entity?: string;
  tags?: string[];
}

function formatDate(iso: string, locale: Locale): string {
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

export async function LatestNews({ locale }: { locale: Locale }) {
  const t = await getTranslations('news');
  const entries = getAllEntries<PressFrontmatter>('press', locale).slice(0, 3);

  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-display-md text-ink">{t('title')}</h2>
          <Link href="/newsroom" className="btn-ghost-light shrink-0">
            {t('cta')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {entries.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-ink/10 bg-white p-10 text-center">
            <p className="text-ink-soft">{t('empty') ?? 'No press items yet.'}</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/newsroom/press/${entry.slug}` as any}
                className="card-light group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">Press</span>
                  <ArrowUpRight className="h-4 w-4 text-ink/40 transition group-hover:text-brand-blue" />
                </div>
                <h3 className="mt-3 line-clamp-3 text-lg font-semibold leading-snug text-ink">
                  {entry.frontmatter.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-ink-soft leading-relaxed">
                  {entry.frontmatter.summary}
                </p>
                <time
                  dateTime={entry.frontmatter.date}
                  className="mt-auto pt-5 text-xs uppercase tracking-[0.14em] text-ink/50"
                >
                  {formatDate(entry.frontmatter.date, locale)}
                </time>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
