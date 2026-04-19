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

// SparkLabs brand purple for pins on light map
const PIN_COLOR = '#4F46E5';
const PIN_STROKE = '#FFFFFF';

export function GlobalMap({ entities }: { entities: EntityMeta[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-[0_30px_60px_-30px_rgba(10,20,64,0.35)] md:p-6">
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
                    fill="#E5E7EB"
                    stroke="#FFFFFF"
                    strokeWidth={0.6}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: '#D1D5DB' },
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
                    r={11}
                    fill={PIN_COLOR}
                    fillOpacity={isActive ? 0.3 : 0.18}
                    className="animate-pulse-soft"
                  />
                  {/* core pin */}
                  <circle
                    r={isActive ? 6 : 5}
                    fill={PIN_COLOR}
                    stroke={PIN_STROKE}
                    strokeWidth={2}
                  />
                  {isActive && (
                    <g transform="translate(0, -18)">
                      <rect
                        x={-44}
                        y={-14}
                        rx={6}
                        ry={6}
                        width={88}
                        height={20}
                        fill="#0A1440"
                      />
                      <text
                        textAnchor="middle"
                        y={-1}
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 10,
                          fontWeight: 600,
                          fill: '#FFFFFF',
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

      <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-ink/50">
        {entities.length} entities · 6 continents
      </p>
    </div>
  );
}
