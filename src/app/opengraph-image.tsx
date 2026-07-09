import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SparkLabs — Global AI-First Investor';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Brand tokens inlined so we don't pull Tailwind into the edge runtime.
// Monochrome Precision: white ground, ink type, the four logo colors only as accents.
const INK = '#0F1113';
const MUTED = '#60666D';
const FAINT = '#A3A9B0';
const SPARK = ['#F8981B', '#ED1367', '#2C6CB6', '#55BA47'];

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
          padding: '72px 96px',
          background: '#FFFFFF',
          color: INK,
          fontFamily: 'Inter, system-ui',
        }}
      >
        {/* Brand color bar — always orange → pink → blue → green */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
          <div style={{ display: 'flex', width: 280, height: 6 }}>
            {SPARK.map((c) => (
              <div key={c} style={{ flex: 1, background: c }} />
            ))}
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 6,
              color: MUTED,
              textTransform: 'uppercase',
            }}
          >
            Global AI-First Investor
          </div>
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: -3,
            maxWidth: 980,
            display: 'flex',
          }}
        >
          Entrepreneurs Growing Entrepreneurs.
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 22,
            color: MUTED,
            borderTop: `2px solid ${INK}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex', gap: 36 }}>
            <span>320+ portfolio</span>
            <span style={{ color: FAINT }}>·</span>
            <span>13 years</span>
            <span style={{ color: FAINT }}>·</span>
            <span>7 global entities</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontWeight: 700, fontSize: 26, color: INK, letterSpacing: -0.5 }}>
              SparkLabs
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
