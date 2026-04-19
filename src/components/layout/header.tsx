import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { LanguageToggle } from './language-toggle';
import { SparkLogo } from './spark-logo';
import NavItems, { type NavItem } from './nav-items';

export async function Header({ locale }: { locale: string }) {
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const tAbout = await getTranslations({ locale, namespace: 'about' });
  const tPortfolio = await getTranslations({ locale, namespace: 'portfolio' });
  const tPrograms = await getTranslations({ locale, namespace: 'programs' });
  const tNewsroom = await getTranslations({ locale, namespace: 'newsroom' });

  const items: NavItem[] = [
    {
      href: '/about',
      label: tNav('about'),
      children: [
        { href: '/about', label: tAbout('overview') },
        { href: '/about/team', label: tAbout('team') },
        { href: '/about/entities', label: tAbout('entities') },
        { href: '/about/advisors', label: tAbout('advisors') },
      ],
    },
    {
      href: '/portfolio',
      label: tNav('portfolio'),
      children: [
        { href: '/portfolio', label: tPortfolio('all') },
        { href: '/portfolio/ai', label: tPortfolio('ai') },
      ],
    },
    {
      href: '/programs',
      label: tNav('programs'),
      children: [
        { href: '/programs/batch', label: tPrograms('batch') },
        { href: '/programs/partnership', label: tPrograms('partnership') },
        { href: '/programs/spark-claw', label: tPrograms('sparkClaw') },
        { href: '/programs/global', label: tPrograms('global') },
      ],
    },
    {
      href: '/newsroom',
      label: tNav('newsroom'),
      children: [
        { href: '/newsroom', label: tNewsroom('all') },
        { href: '/newsroom/press', label: tNewsroom('press') },
        { href: '/newsroom/media', label: tNewsroom('media') },
        { href: '/newsroom/perspectives', label: tNewsroom('perspectives') },
        { href: '/newsroom/announcements', label: tNewsroom('announcements') },
      ],
    },
    { href: '/contact', label: tNav('contact') },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-surface-border/70 bg-white/80 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center text-ink" aria-label="SparkLabs home">
          <SparkLogo variant="dark" height={28} className="h-7 w-auto" />
        </Link>

        <NavItems items={items} />

        <div className="flex items-center gap-2">
          <LanguageToggle currentLocale={locale} />
          <Link href="/apply" className="btn-primary hidden sm:inline-flex">
            {tNav('apply')}
          </Link>
        </div>
      </div>
    </header>
  );
}
