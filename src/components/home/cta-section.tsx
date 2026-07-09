import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Reveal } from '@/components/ui/reveal';

/**
 * Closing CTA on flat ink — headline + newsletter button + text link.
 * Shared by the home and program pages (copy differs per page via props).
 */
export async function CtaSection({
  namespace,
  secondaryHref = '/programs/batch',
}: {
  namespace: string;
  secondaryHref?: string;
}) {
  const t = await getTranslations(namespace);

  return (
    <section className="bg-ink py-20 text-left text-white md:py-36 md:text-center">
      <div className="container-narrow">
        <Reveal as="span" className="eyebrow inline-block text-spark-orange">
          {t('label')}
        </Reveal>
        <Reveal
          as="h2"
          className="mt-6 font-display text-[clamp(32px,5vw,62px)] font-extrabold leading-[1.05] tracking-[-0.04em] md:mx-auto"
        >
          {t('title')}
          <br />
          <span className="font-normal text-white/55">{t('titleThin')}</span>
        </Reveal>
        <Reveal as="p" className="mt-5 max-w-[440px] text-[16.5px] text-white/60 md:mx-auto">
          {t('sub')}
        </Reveal>
        <Reveal className="mt-10 flex flex-wrap items-center justify-start gap-x-7 gap-y-5 md:mt-11 md:justify-center">
          <a
            href="https://page.stibee.com/subscriptions/244667"
            target="_blank"
            rel="noreferrer noopener"
            className="btn-accent"
          >
            {t('primary')}
          </a>
          <Link href={secondaryHref} className="tlink-light">
            {t('secondary')} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
