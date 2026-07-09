import type { ReactNode } from 'react';

export interface StatItem {
  value: ReactNode;
  label: string;
}

/**
 * Brand statline — a 4-color bar on top, then a hairline grid of stats.
 * Values may embed colored suffixes, e.g. <>320<i className="text-spark-orange">+</i></>.
 */
export function StatLine({
  stats,
  compact = false,
}: {
  stats: readonly StatItem[];
  compact?: boolean;
}) {
  return (
    <div className="border-b border-surface-border">
      <div className="color-bar" aria-hidden="true" />
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-surface-border px-5 py-6 md:px-7 md:py-8 ${
                i % 2 === 0 ? 'max-md:border-r' : ''
              } ${i < 2 ? 'max-md:border-b' : ''} ${
                i < stats.length - 1 ? 'md:border-r' : ''
              }`}
            >
              <b
                className={`block font-display font-bold leading-tight tracking-[-0.02em] ${
                  compact
                    ? 'text-[clamp(17px,1.9vw,23px)]'
                    : 'text-[clamp(30px,3.2vw,44px)] tracking-[-0.04em]'
                }`}
              >
                {stat.value}
              </b>
              <span className="font-display text-[11px] uppercase tracking-[0.2em] text-faint">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
