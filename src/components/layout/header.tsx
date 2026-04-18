import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { LanguageToggle } from './language-toggle';
import { SparkLogo } from './spark-logo';

export async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'nav' });

  const items = [
    { href: '/about', label: t('about') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/programs', label: t('programs') },
    { href: '/newsroom', label: t('newsroom') },
    { href: '/contact', label: t('contact') },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-surface-border/70 bg-white/80 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-ink" aria-label="SparkLabs home">
          <SparkLogo className="h-7 w-7" />
          <span className="text-lg font-bold tracking-tight">SparkLabs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-surface-subtle hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle currentLocale={locale} />
          <Link href="/apply" className="btn-primary hidden sm:inline-flex">
            {t('apply')}
          </Link>
        </div>
      </div>
    </header>
  );
}
