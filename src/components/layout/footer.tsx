import { getTranslations } from 'next-intl/server';
import { Youtube, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { SparkLogo } from './spark-logo';

const socialLinks = [
  {
    name: 'YouTube',
    href: 'https://youtube.com/user/SparkLabsKorea',
    Icon: Youtube,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/SparkLabsKorea',
    Icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/sparklabs_accelerator',
    Icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sparklabs-accelerator/',
    Icon: Linkedin,
  },
];

const networkLinks = [
  { name: 'SparkLabs Group', href: 'https://sparklabsgroup.com/' },
  { name: 'SparkLabs Taiwan', href: 'https://www.sparklabstaiwan.com/' },
  { name: 'SparkLabs Cultiv8', href: 'https://www.sparklabscultiv8.com/' },
  { name: 'SparkBioLabs', href: 'https://www.sparkbiolabs.com/' },
];

const colHeading =
  'mb-5 font-display text-[10.5px] font-semibold uppercase tracking-[0.24em] text-faint';
const colLink = 'text-sm text-muted transition hover:text-ink';

export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'footer' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const tPrograms = await getTranslations({ locale, namespace: 'programs' });
  const tAbout = await getTranslations({ locale, namespace: 'about' });
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-surface-border bg-white">
      <div className="container-narrow grid gap-11 py-20 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="SparkLabs home" className="inline-flex">
            <SparkLogo variant="dark" height={26} className="h-[26px] w-auto" />
          </Link>
          <p className="mt-4 max-w-[280px] text-[13.5px] text-muted">
            Entrepreneurs Growing Entrepreneurs.
            <br />
            {t('slogan')}
          </p>
          <div className="mt-6 flex items-center gap-3 text-muted">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={name}
                className="inline-flex h-9 w-9 items-center justify-center border border-surface-border transition hover:border-ink hover:text-ink"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Program" className="text-sm">
          <h4 className={colHeading}>Program</h4>
          <ul className="space-y-2.5">
            <li><Link href="/programs/batch" className={colLink}>{tPrograms('batch')}</Link></li>
            <li><Link href="/programs/spark-claw" className={colLink}>{tPrograms('sparkClaw')}</Link></li>
            <li><Link href="/programs/partnership" className={colLink}>{tPrograms('partnership')}</Link></li>
            <li><Link href="/apply" className={colLink}>{tNav('apply')}</Link></li>
          </ul>
        </nav>

        <nav aria-label="About" className="text-sm">
          <h4 className={colHeading}>About</h4>
          <ul className="space-y-2.5">
            <li><Link href="/about" className={colLink}>{tAbout('overview')}</Link></li>
            <li><Link href="/about/team" className={colLink}>{tAbout('team')}</Link></li>
            <li><Link href="/portfolio" className={colLink}>{tNav('portfolio')}</Link></li>
            <li><Link href="/contact" className={colLink}>{tNav('contact')}</Link></li>
          </ul>
        </nav>

        <nav aria-label="Network" className="text-sm">
          <h4 className={colHeading}>Network</h4>
          <ul className="space-y-2.5">
            {networkLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={colLink}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Newsletter" className="text-sm">
          <h4 className={colHeading}>{t('newsletter.heading')}</h4>
          <ul className="space-y-2.5">
            <li>
              <a
                href="https://page.stibee.com/subscriptions/244667"
                target="_blank"
                rel="noreferrer noopener"
                className={colLink}
              >
                {t('newsletter.sparkLetter')}
              </a>
            </li>
            <li>
              <a
                href="https://page.stibee.com/subscriptions/207072"
                target="_blank"
                rel="noreferrer noopener"
                className={colLink}
              >
                {t('newsletter.vcMailing')}
              </a>
            </li>
            <li>
              <a href="mailto:hello@sparklabs.co.kr" className={colLink}>
                hello@sparklabs.co.kr
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-surface-border">
        <div className="container-narrow flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-7 font-display text-xs text-faint">
          <span>{t('copyright', { year })}</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="hidden md:inline">{t('address')}</span>
            <Link href="/privacy" className="transition hover:text-ink">{t('legal.privacy')}</Link>
            <Link href="/terms" className="transition hover:text-ink">{t('legal.terms')}</Link>
            <Link href="/cookie-policy" className="transition hover:text-ink">{t('legal.cookie')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
