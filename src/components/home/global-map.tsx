'use client';

import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
  Marker,
} from 'react-simple-maps';
import type { EntityMeta } from '@/lib/entities';

// TopoJSON world atlas (countries, 110m resolution) — ~100KB, cached at CDN edge
const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Official spark colors (brand guide v1.0)
const SPARK: Record<EntityMeta['accent'], string> = {
  orange: '#F8981B',
  pink: '#ED1367',
  blue: '#2C6CB6',
  green: '#55BA47',
};

// Seoul — where the network begins; arcs radiate from here
const ORIGIN: [number, number] = [126.978, 37.5665];

/** Entities far enough from Seoul to draw a visible arc to */
function hasArc(e: EntityMeta) {
  const [lng, lat] = e.coordinates;
  return Math.abs(lng - ORIGIN[0]) > 6 || Math.abs(lat - ORIGIN[1]) > 6;
}

/**
 * Global entity map — Monochrome Precision edition.
 * Ink-dark world, hairline graticule, spark-colored pins pulsing at each
 * entity, great-circle arcs radiating from Seoul. Hover (or the legend
 * below) highlights an entity; click jumps to its card further down.
 */
export function GlobalMap({ entities }: { entities: EntityMeta[] }) {
  const [active, setActive] = useState<string | null>(null);

  const jumpToCard = (slug: string) => {
    document
      .getElementById(`entity-${slug}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <div className="relative border border-white/10 bg-white/[0.02]">
        {/* brand color bar along the top edge */}
        <div className="color-bar" aria-hidden="true" />

        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 175, center: [20, 16] }}
          width={980}
          height={450}
          style={{ width: '100%', height: 'auto' }}
          aria-label="SparkLabs global entity map"
        >
          {/* faint meridian/parallel grid */}
          <Graticule stroke="#FFFFFF" strokeOpacity={0.05} strokeWidth={0.5} />

          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#FFFFFF"
                  fillOpacity={0.07}
                  stroke="#FFFFFF"
                  strokeOpacity={0.14}
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {/* great-circle arcs from Seoul to each frontier */}
          {entities.filter(hasArc).map((e) => {
            const lit = active === e.slug;
            return (
              <Line
                key={`arc-${e.slug}`}
                from={ORIGIN}
                to={e.coordinates}
                stroke={lit ? SPARK[e.accent] : '#FFFFFF'}
                strokeOpacity={lit ? 0.7 : 0.14}
                strokeWidth={lit ? 1.4 : 1}
                strokeLinecap="round"
                strokeDasharray="1 5"
                style={{ transition: 'stroke .25s ease, stroke-opacity .25s ease' }}
              />
            );
          })}

          {entities.map((e) => {
            const isActive = active === e.slug;
            const color = SPARK[e.accent];
            return (
              <Marker
                key={e.slug}
                coordinates={e.coordinates}
                onMouseEnter={() => setActive(e.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(e.slug)}
                onBlur={() => setActive(null)}
                onClick={() => jumpToCard(e.slug)}
                style={{ default: { cursor: 'pointer' } }}
              >
                {/* pulsing halo */}
                <circle
                  r={isActive ? 13 : 10}
                  fill={color}
                  fillOpacity={isActive ? 0.35 : 0.16}
                  className="animate-pulse"
                  style={{ transition: 'r .25s ease' }}
                />
                {/* core pin */}
                <circle r={isActive ? 5 : 4} fill={color} />
                {/* hover callout — mono caption, fact style */}
                {isActive && (
                  <g
                    transform="translate(0, -16)"
                    style={{ pointerEvents: 'none' }}
                  >
                    <text
                      textAnchor="middle"
                      y={-8}
                      style={{
                        fontFamily:
                          'var(--font-plex-mono), ui-monospace, monospace',
                        fontSize: 10.5,
                        fontWeight: 600,
                        letterSpacing: '0.18em',
                        fill: '#FFFFFF',
                      }}
                    >
                      {(e.shortName ?? e.name.en).toUpperCase()}
                    </text>
                    <rect
                      x={-14}
                      y={-2}
                      width={28}
                      height={2}
                      fill={color}
                    />
                  </g>
                )}
              </Marker>
            );
          })}
        </ComposableMap>

        <p className="mono-cap border-t border-white/10 px-5 py-3 text-white/40">
          7 entities · 6 continents · one ecosystem
        </p>
      </div>

      {/* legend — works on touch too; click jumps to the entity card below */}
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
        {entities.map((e) => {
          const isActive = active === e.slug;
          return (
            <button
              key={e.slug}
              type="button"
              onClick={() => jumpToCard(e.slug)}
              onMouseEnter={() => setActive(e.slug)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(e.slug)}
              onBlur={() => setActive(null)}
              className={`inline-flex items-center gap-2 font-display text-[11.5px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                isActive ? 'text-white' : 'text-white/55 hover:text-white'
              }`}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: SPARK[e.accent] }}
                aria-hidden="true"
              />
              {e.shortName ?? e.name.en}
            </button>
          );
        })}
      </div>
    </div>
  );
}
