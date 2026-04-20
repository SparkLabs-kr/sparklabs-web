import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export async function AiSpotlight() {
  const t = await getTranslations('ai');

  const globalLeaders = [
    { name: 'OpenAI', note: 'Invited investor, Jan 2024 round', tone: 'purple' as const },
    { name: 'Anthropic', note: '', tone: 'dark' as const },
    { name: 'Perplexity', note: '', tone: 'purple' as const },
    { name: 'xAI / Grok', note: 'Acquired by SpaceX, 2026', tone: 'dark' as const },
    { name: 'Groq', note: '$20B deal with NVIDIA, 2025', tone: 'purple' as const },
  ];

  return (
    <section className="section bg-surface-subtle">
      <div className="container-narrow">
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16 md:items-start">
          <div>
            <span className="inline-block rounded-sm border border-brand-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-blue">
              AI Portfolio
            </span>
            <h2 className="mt-5 text-display-lg text-ink">{t('title')}</h2>
            <p className="mt-5 max-w-md text-base text-ink-soft leading-relaxed">
              {t('subtitle')}
            </p>
            <Link href="/portfolio/ai" className="btn-ghost-light mt-8">
              {t('cta')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
            {globalLeaders.map((l) => (
              <div
                key={l.name}
                className={`flex aspect-[5/3] flex-col justify-between p-5 transition ${
                  l.tone === 'purple'
                    ? 'bg-brand-blue text-white'
                    : 'bg-ink text-white'
                }`}
              >
                <div className="text-lg font-bold tracking-tight">{l.name}</div>
                {l.note && (
                  <div className="text-[11px] uppercase tracking-[0.08em] text-white/75 leading-relaxed">
                    {l.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
