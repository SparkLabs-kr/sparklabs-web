import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SparkLabs — Entrepreneurs Growing Entrepreneurs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Brand tokens inlined so we don't pull Tailwind into the edge runtime.
const HERO_NAVY = '#0b1532';
const SPARK_YELLOW = '#facc15';
const SPARK_BLUE = '#38bdf8';
const INK_SOFT = 'rgba(255,255,255,0.72)';

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
          background: `radial-gradient(ellipse at 85% 15%, ${SPARK_BLUE}33 0%, transparent 55%), ${HERO_NAVY}`,
          color: 'white',
          fontFamily: 'Inter, system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.39 8.26L21 9.27L16 13.97L17.18 20.56L12 17.27L6.82 20.56L8 13.97L3 9.27L9.61 8.26L12 2Z"
              fill={SPARK_YELLOW}
            />
          </svg>
          <span>SparkLabs</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 2,
              color: SPARK_YELLOW,
              textTransform: 'uppercase',
            }}
          >
            Entrepreneurs Growing Entrepreneurs
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
