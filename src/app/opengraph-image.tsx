import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SparkLabs — We Ignite Entrepreneurs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Brand tokens inlined so we don't pull Tailwind into the edge runtime.
const INK = '#0B0C0E';
const SPARK_BLUE = '#2F6EB8';
const SPARK_BLUE_SOFT = '#5B96D8';
const INK_SOFT = 'rgba(255,255,255,0.72)';

// Logo-style burst: tapered rays fanning left from a focal point,
// cycling through the spark spectrum (blue, orange, magenta, green, yellow).
const BURST_COLORS = ['#2F6EB8', '#F5941F', '#E8326F', '#56B948', '#F2C230'];
const BURST_RAYS = Array.from({ length: 14 }, (_, i) => {
  const t = i / 13;
  const ang = ((110 + 140 * t) * Math.PI) / 180;
  const len = 34 + ((i * 7919) % 28);
  const gap = 9;
  const halfW = 2.6 + ((i * 104729) % 10) / 4;
  const cx = 86;
  const cy = 50;
  const x1 = cx + Math.cos(ang) * gap;
  const y1 = cy + Math.sin(ang) * gap;
  const x2 = cx + Math.cos(ang) * (gap + len);
  const y2 = cy + Math.sin(ang) * (gap + len);
  const px = -Math.sin(ang) * halfW;
  const py = Math.cos(ang) * halfW;
  return {
    points: `${x1},${y1} ${x2 + px},${y2 + py} ${x2 - px},${y2 - py}`,
    fill: BURST_COLORS[i % BURST_COLORS.length],
  };
});

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px 96px',
          background: `radial-gradient(ellipse at 85% 15%, ${SPARK_BLUE}40 0%, transparent 55%), ${INK}`,
          color: 'white',
          fontFamily: 'Inter, system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            {BURST_RAYS.map((r, i) => (
              <polygon key={i} points={r.points} fill={r.fill} />
            ))}
          </svg>
          <span>SparkLabs</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 2,
              color: SPARK_BLUE_SOFT,
              textTransform: 'uppercase',
            }}
          >
            We Ignite Entrepreneurs
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 960,
            }}
          >
            A global AI-First investment firm across six continents.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 22,
            color: INK_SOFT,
          }}
        >
          <div style={{ display: 'flex', gap: 40 }}>
            <span>550+ portfolio</span>
            <span>·</span>
            <span>14 entities</span>
            <span>·</span>
            <span>6 continents</span>
          </div>
          <div style={{ fontWeight: 600, color: 'white' }}>www.sparklabs.co.kr</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
