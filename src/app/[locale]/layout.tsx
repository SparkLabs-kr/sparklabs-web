import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LocaleHtmlLang } from '@/components/layout/locale-html-lang';
import { OrganizationJsonLd } from '@/components/seo/organization-jsonld';
import { SkipToMain } from '@/components/layout/skip-to-main';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  return {
    title: { default: t('home.title'), template: `%s — ${t('brand')}` },
    description: t('home.description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ko: '/ko',
        en: '/en',
        'x-default': '/ko',
      },
    },
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtmlLang locale={locale} />
      <SkipToMain locale={locale} />
      <OrganizationJsonLd locale={locale} />
      <Header locale={locale} />
      <main id="main" className="min-h-[60vh]" tabIndex={-1}>
        {children}
      </main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
