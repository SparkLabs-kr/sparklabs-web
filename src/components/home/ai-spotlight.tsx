import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowRight, Sparkles } from 'lucide-react';

export async function AiSpotlight() {
  const t = await getTranslations('ai');

  const globalLeaders = [
    { name: 'OpenAI', note: 'Invited investor, Jan 2024 round' },
    { name: 'Anthropic', note: '' },
    { name: 'Perplexity', note: '' },
    { name: 'xAI / Grok', note: 'Acquired by SpaceX, 2026' },
    { name: 'Groq', note: '$20B deal with NVIDIA, 2025' },
  ];

  return (
    <section className="section bg-navy text-white">
      <div className="container-narrow">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <span className="eyebrow !text-spark-violet">AI Portfolio</span>
            <h2 className="mt-3 text-display-lg">{t('title')}</h2>
            <p className="mt-3 max-w-xl text-lg text-white/70">
              <Sparkles className="mr-2 inline h-5 w-5 text-spark-violet" />
              {t('subtitle')}
            </p>
          </div>
          <Link href="/portfolio/ai" className="btn-ghost-dark self-center">
            {t('cta')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {globalLeaders.map((l) => (
            <div
              key={l.name}
              className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="text-base font-semibold text-white">{l.name}</div>
              {l.note && (
                <div className="mt-2 text-xs text-white/60 leading-relaxed">
                  {l.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
