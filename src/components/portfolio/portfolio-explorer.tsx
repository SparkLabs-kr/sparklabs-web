'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  portfolio,
  categoryLabel,
  type PortfolioCompany,
  type PortfolioCategory,
} from '@/lib/portfolio';
import { entities } from '@/lib/entities';
import type { Locale } from '@/lib/content';

interface Props {
  locale: Locale;
  labels: {
    searchPlaceholder: string;
    allCategories: string;
    allEntities: string;
    showingCount: string; // e.g. "{n} companies"
    noResults: string;
    aiPick: string;
    featured: string;
    stageLabel: string;
  };
}

export function PortfolioExplorer({ locale, labels }: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<PortfolioCategory | 'all'>('all');
  const [entity, setEntity] = useState<string | 'all'>('all');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(portfolio.map((p) => p.category)));
    return unique.sort((a, b) =>
      categoryLabel[a][locale].localeCompare(categoryLabel[b][locale])
    );
  }, [locale]);

  const entityList = useMemo(() => {
    const usedSlugs = new Set(portfolio.map((p) => p.entity));
    return entities.filter((e) => usedSlugs.has(e.slug));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return portfolio.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      if (entity !== 'all' && p.entity !== entity) return false;
      if (!q) return true;
      const hay =
        `${p.name} ${p.tagline.ko} ${p.tagline.en} ${p.slug}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, category, entity]);

  const count = filtered.length;

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="w-full rounded-full border border-surface-border bg-white py-3 pl-10 pr-4 text-sm placeholder:text-ink/40 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10"
          />
        </div>
        <p className="text-sm text-ink-soft">
          {labels.showingCount.replace('{n}', String(count))}
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <FilterChip
            active={category === 'all'}
            onClick={() => setCategory('all')}
          >
            {labels.allCategories}
          </FilterChip>
          {categories.map((c) => (
            <FilterChip
              key={c}
              active={category === c}
              onClick={() => setCategory(c)}
            >
              {categoryLabel[c][locale]}
            </FilterChip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <FilterChip
            active={entity === 'all'}
            onClick={() => setEntity('all')}
          >
            {labels.allEntities}
          </FilterChip>
          {entityList.map((e) => (
            <FilterChip
              key={e.slug}
              active={entity === e.slug}
              onClick={() => setEntity(e.slug)}
            >
              {e.shortName ?? e.name[locale]}
            </FilterChip>
          ))}
        </div>
      </div>

      {count === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-surface-border p-12 text-center text-ink-soft">
          {labels.noResults}
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PortfolioCard
              key={p.slug}
              company={p}
              locale={locale}
              labels={{ aiPick: labels.aiPick, featured: labels.featured }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition',
        active
          ? 'border-ink bg-ink text-white'
          : 'border-surface-border bg-white text-ink-soft hover:border-ink/40 hover:text-ink'
      )}
    >
      {children}
    </button>
  );
}

function PortfolioCard({
  company,
  locale,
  labels,
}: {
  company: PortfolioCompany;
  locale: Locale;
  labels: { aiPick: string; featured: string };
}) {
  const entityMeta = entities.find((e) => e.slug === company.entity);
  const accent = entityMeta?.accent ?? 'blue';

  return (
    <article className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div className={`h-1.5 w-10 rounded-full bg-spark-${accent}`} />
        <div className="flex flex-wrap gap-1.5">
          {company.aiPick && (
            <span className="rounded-full bg-spark-violet/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-spark-violet">
              {labels.aiPick}
            </span>
          )}
          {company.featured && !company.aiPick && (
            <span className="rounded-full bg-ink/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
              {labels.featured}
            </span>
          )}
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink">{company.name}</h3>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
        {company.tagline[locale]}
      </p>
      {company.highlight && (
        <p className="mt-3 rounded-lg bg-surface-subtle px-3 py-2 text-xs text-ink-soft">
          {company.highlight[locale]}
        </p>
      )}
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-4 text-xs text-ink/50">
        {company.stage && (
          <span className="rounded-full border border-surface-border px-2 py-0.5">
            {company.stage}
          </span>
        )}
        <span className="rounded-full border border-surface-border px-2 py-0.5">
          {entityMeta?.shortName ?? company.entity}
        </span>
        <span className="rounded-full border border-surface-border px-2 py-0.5">
          {company.country}
        </span>
      </div>
    </article>
  );
}
