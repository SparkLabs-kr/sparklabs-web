import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/ui/reveal';

const pillarAccents = [
  'text-spark-orange',
  'text-spark-pink',
  'text-spark-blue',
] as const;

const pillarHoverBorders = [
  'hover:border-t-spark-orange',
  'hover:border-t-spark-pink',
  'hover:border-t-spark-blue',
] as const;

export async function PhilosophySection() {
  const t = await getTranslations('home.philosophy');
  const pillars = [1, 2, 3] as const;

  return (
    <section className="section text-left md:text-center" id="about">
      <div className="container-narrow">
        <Reveal as="span" className="eyebrow inline-block text-spark-orange">
          {t('label')}
        </Reveal>
        <Reveal
          as="p"
          className="mt-6 max-w-[860px] font-display text-[clamp(24px,3.4vw,42px)] font-semibold leading-[1.3] tracking-[-0.03em] md:mx-auto md:mt-7"
        >
          {t('statement')}{' '}
          <span className="font-normal text-muted md:block">
            {t('statementThin')}
          </span>
        </Reveal>
        <div className="mt-12 grid gap-9 text-left md:mt-24 md:grid-cols-3 md:gap-12">
          {pillars.map((n, i) => (
            <Reveal
              key={n}
              className={`ink-rule pt-6 transition-colors duration-200 ${pillarHoverBorders[i]}`}
            >
              <span
                className={`mb-3.5 block font-display text-xs font-semibold tracking-[0.2em] ${pillarAccents[i]}`}
              >
                0{n}
              </span>
              <h3 className="font-display text-[17.5px] font-bold tracking-[-0.02em]">
                {t(`pillar${n}.title`)}
              </h3>
              <p className="mt-2.5 text-[14.5px] text-muted">
                {t(`pillar${n}.body`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
