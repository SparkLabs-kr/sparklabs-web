'use client';

import { useState } from 'react';
import type { EntityMeta } from '@/lib/entities';

/**
 * Lightweight SVG world-map with entity pins.
 *
 * Phase 1 uses a simplified world silhouette via dot-grid + positioned pins.
 * In Phase 2 we will swap to `react-simple-maps` with the real geo-topojson
 * for proper projections. This placeholder keeps the bundle tiny for now.
 */
export function GlobalMap({ entities }: { entities: EntityMeta[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 md:p-10">
      <div className="relative aspect-[16/8] w-full">
        {/* dot-grid world silhouette */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '14px 14px',
            maskImage:
              'url(https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json)',
          }}
          aria-hidden="true"
        />
        {entities.map((e) => {
          // Convert lng/lat to percentage (Equirectangular projection, clamped)
          const [lng, lat] = e.coordinates;
          const x = ((lng + 180) / 360) * 100;
          const y = ((90 - lat) / 180) * 100;
          const isActive = active === e.slug;
          return (
            <button
              key={e.slug}
              type="button"
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
              onMouseEnter={() => setActive(e.slug)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(e.slug)}
              onBlur={() => setActive(null)}
              aria-label={e.name.en}
            >
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-spark-orange/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-spark-orange ring-2 ring-navy-deep" />
              </span>
              {isActive && (
                <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-card">
                  {e.shortName ?? e.name.en}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-white/40">
        {entities.length} entities · 6 continents
      </p>
    </div>
  );
}
