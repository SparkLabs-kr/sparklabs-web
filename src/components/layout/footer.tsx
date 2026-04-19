import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { SparkLogo } from './spark-logo';

export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'footer' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-navy-deep text-white">
      <div className="container-narrow py-16 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center">
            <SparkLogo variant="light" height={32} className="h-8 w-auto" />
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            {t('address')}
          </p>
        </div>

        <nav aria-label="Explore" className="text-sm">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
            Explore
          </h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white/90">{tNav('about')}</Link></li>
            <li><Link href="/portfolio" className="hover:text-white/90">{tNav('portfolio')}</Link></li>
            <li><Link href="/programs" className="hover:text-white/90">{tNav('programs')}</Link></li>
            <li><Link href="/newsroom" className="hover:text-white/90">{tNav('newsroom')}</Link></li>
            <li><Link href="/contact" className="hover:text-white/90">{tNav('contact')}</Link></li>
          </ul>
        </nav>

        <nav aria-label="Legal" className="text-sm">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
            Legal
          </h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="/privacy" className="hover:text-white">{t('legal.privacy')}</Link></li>
            <li><Link href="/terms" className="hover:text-white">{t('legal.terms')}</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-white">{t('legal.cookie')}</Link></li>
          </ul>
        </nav>

        <nav aria-label="Newsletter" className="text-sm">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
            {t('newsletter.heading')}
          </h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a
                href="https://page.stibee.com/subscriptions/244667"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white"
              >
                {t('newsletter.sparkLetter')}
              </a>
            </li>
            <li>
              <a
                href="https://page.stibee.com/subscriptions/207072"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white"
              >
                {t('newsletter.vcMailing')}
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
            Connect
          </h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="https://www.linkedin.com/company/sparklabs-korea" target="_blank" rel="noreferrer noopener" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://x.com/sparklabskorea" target="_blank" rel="noreferrer noopener" className="hover:text-white">X / Twitter</a></li>
            <li><a href="mailto:hello@sparklabs.co.kr" className="hover:text-white">hello@sparklabs.co.kr</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow py-6 text-xs text-white/50">
          {t('copyright', { year })}
        </div>
      </div>
    </footer>
  );
}
