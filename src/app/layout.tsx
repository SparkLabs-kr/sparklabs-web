import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sparklabs.co.kr'
  ),
  // Plain string, no template — the [locale] layout defines its own title
  // template, and stacking both produced a doubled "… — SparkLabs" suffix.
  title: 'SparkLabs — Global AI-First Investor',
  description:
    'Entrepreneurs Growing Entrepreneurs. SparkLabs is a global, AI-first startup investor — 13 years, 320+ portfolio companies, 7 entities.',
  applicationName: 'SparkLabs',
  keywords: [
    'SparkLabs',
    '스파크랩',
    'accelerator',
    '액셀러레이터',
    'venture capital',
    '벤처캐피털',
    'AI startups',
    'Korea startups',
    'global accelerator',
    'AIM AI Fund',
  ],
  authors: [{ name: 'SparkLabs', url: 'https://www.sparklabs.co.kr' }],
  creator: 'SparkLabs',
  publisher: 'SparkLabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'SparkLabs',
    title: 'SparkLabs — Global AI-First Investor',
    description:
      'Entrepreneurs Growing Entrepreneurs. A global, AI-first startup investor — 13 years, 320+ portfolio companies, 7 entities.',
    locale: 'ko_KR',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SparkLabs — Global AI-First Investor',
    description:
      'Entrepreneurs Growing Entrepreneurs. A global, AI-first startup investor — 13 years, 320+ portfolio companies, 7 entities.',
    creator: '@SparkLabsGlobal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  // TODO: Add verification tokens once Search Console / Naver accounts are linked.
  // verification: { google: '...', other: { 'naver-site-verification': '...' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
