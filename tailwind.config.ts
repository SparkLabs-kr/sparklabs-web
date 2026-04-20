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
    ]),
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand — vivid indigo purple
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#3A3A3A',
        },
        navy: {
          DEFAULT: '#0A0A0A',
          deep: '#000000',
        },
        brand: {
          blue: '#5046E5',
          'blue-soft': '#6B5FFF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F5F3EF',
          border: '#E8E5DF',
        },
        // Spark spectrum (from logo) — re-tuned around indigo primary
        spark: {
          blue: '#5046E5',
          orange: '#F97A1F',
          yellow: '#F2C94C',
          green: '#2FB574',
          teal: '#2AA5B8',
          pink: '#E74F8E',
          red: '#E64545',
          violet: '#7B5CFF',
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
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 6.5vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '700' }],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 10, 10, 0.04), 0 8px 24px rgba(10, 10, 10, 0.06)',
        'card-hover': '0 1px 2px rgba(10, 10, 10, 0.06), 0 16px 40px rgba(80, 70, 229, 0.14)',
      },
      backgroundImage: {
        'hero-navy': 'radial-gradient(ellipse at top left, #141414 0%, #000000 70%)',
        'spark-ray': 'linear-gradient(135deg, rgba(80,70,229,0.55) 0%, rgba(107,95,255,0) 60%)',
      },
      animation: {
        'fade-up': 'fadeUp 600ms ease-out both',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
