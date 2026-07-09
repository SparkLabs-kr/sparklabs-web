import type { Config } from 'tailwindcss';

const sparkAccents = [
  'blue',
  'orange',
  'yellow',
  'green',
  'teal',
  'pink',
  'red',
  'violet',
] as const;

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  safelist: [
    ...sparkAccents.flatMap((c) => [
      `bg-spark-${c}`,
      `bg-spark-${c}/5`,
      `bg-spark-${c}/10`,
      `bg-spark-${c}/15`,
      `bg-spark-${c}/20`,
      `bg-spark-${c}/25`,
      `bg-spark-${c}/30`,
      `bg-spark-${c}/40`,
      `bg-spark-${c}/90`,
      `text-spark-${c}`,
      `border-spark-${c}`,
      `border-spark-${c}/40`,
      `ring-spark-${c}`,
      `hover:bg-spark-${c}`,
      `hover:border-spark-${c}`,
    ]),
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome Precision (brand guide v1.0, 2026-07) — black/white base,
        // the four logo colors fire only at "ignition moments" (≤10% of any surface).
        ink: {
          DEFAULT: '#0F1113',
          soft: '#60666D', // "Muted" in the guide
          logo: '#323232',
        },
        muted: '#60666D',
        faint: '#A3A9B0',
        navy: {
          // Legacy token name — dark grounds are now pure ink
          DEFAULT: '#0F1113',
          deep: '#0F1113',
        },
        brand: {
          blue: '#2C6CB6',
          'blue-soft': '#6B99CE',
          'blue-deep': '#1E4F8C',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F4F5F7',
          border: '#E7E9EC',
        },
        // Official spark colors extracted from the logo. Order: orange → pink → blue → green.
        // yellow/teal/red/violet are legacy aliases mapped to the nearest official color.
        spark: {
          orange: '#F8981B',
          pink: '#ED1367',
          blue: '#2C6CB6',
          green: '#55BA47',
          yellow: '#F8981B',
          teal: '#2C6CB6',
          red: '#ED1367',
          violet: '#2C6CB6',
          coral: '#ED1367',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-pretendard)',
          'var(--font-inter)',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'var(--font-inter)',
          'var(--font-pretendard)',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'var(--font-plex-mono)',
          'ui-monospace',
          'monospace',
        ],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6.2vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.045em', fontWeight: '800' }],
        'display-lg': ['clamp(1.875rem, 4.2vw, 3.125rem)', { lineHeight: '1.1', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-sm': ['clamp(1.25rem, 2.2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      // Brand ban: radius over 8px. Legacy radius tokens are clamped down
      // so unrestyled pages fall in line automatically.
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '4px',
        lg: '6px',
        xl: '8px',
        '2xl': '8px',
        '3xl': '8px',
      },
      // Brand ban: shadows. Legacy shadow tokens resolve to none.
      boxShadow: {
        card: 'none',
        'card-hover': 'none',
      },
      backgroundImage: {
        // Legacy names kept for safety; dark grounds are flat ink now.
        'hero-navy': 'linear-gradient(0deg, #0F1113, #0F1113)',
        'spark-ray': 'none',
        // Brand motif 02 — color bar, hard stops, always orange → pink → blue → green
        'color-bar':
          'linear-gradient(90deg, #F8981B 0 25%, #ED1367 0 50%, #2C6CB6 0 75%, #55BA47 0)',
        // Brand motif 03 — spark highlight under one key word of a headline
        'spark-highlight':
          'linear-gradient(90deg, rgba(248,152,27,.32), rgba(237,19,103,.28), rgba(44,108,182,.28), rgba(85,186,71,.32))',
      },
      animation: {
        'fade-up': 'fadeUp 600ms ease-out both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
