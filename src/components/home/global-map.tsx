'use client';

import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import type { EntityMeta } from '@/lib/entities';

// TopoJSON world atlas (countries, 110m resolution) — ~100KB, cached at CDN edge
const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

export function GlobalMap({ entities }: { entities: EntityMeta[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 md:p-6">
      <div className="relative">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 175 }}
          width={980}
          height={460}
          style={{ width: '100%', height: 'auto' }}
        >
          <ZoomableGroup center={[20, 20]} zoom={1} disablePanning>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: 'rgba(255,255,255,0.08)' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {entities.map((e) => {
              const isActive = active === e.slug;
              return (
                <Marker
                  key={e.slug}
                  coordinates={e.coordinates}
                  onMouseEnter={() => setActive(e.slug)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(e.slug)}
                  onBlur={() => setActive(null)}
                  style={{ default: { cursor: 'pointer' } }}
                >
                  {/* pulsing halo */}
                  <circle
                    r={10}
                    fill="#F97A1F"
                    fillOpacity={isActive ? 0.35 : 0.2}
                    className="animate-pulse-soft"
                  />
                  {/* core pin */}
                  <circle
                    r={isActive ? 5 : 4}
                    fill="#F97A1F"
                    stroke="#0A1440"
                    strokeWidth={2}
                  />
                  {isActive && (
                    <g transform="translate(0, -16)">
                      <rect
                        x={-40}
                        y={-14}
                        rx={6}
                        ry={6}
                        width={80}
                        height={20}
                        fill="#FFFFFF"
                      />
                      <text
                        textAnchor="middle"
                        y={-1}
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 10,
                          fontWeight: 600,
                          fill: '#0A1440',
                        }}
                      >
                        {e.shortName ?? e.name.en}
                      </text>
                    </g>
                  )}
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-white/40">
        {entities.length} entities · 6 continents
      </p>
    </div>
  );
}
