import { setRequestLocale } from 'next-intl/server';

export default async function AiPortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="section bg-navy text-white">
      <div className="container-narrow">
        <span className="eyebrow !text-spark-violet">AI Portfolio</span>
        <h1 className="mt-3 text-display-xl">
          Backing the AI revolution since day one
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/75">
          $50M AIM AI Fund · OpenAI, Anthropic, Perplexity, xAI, Groq — plus Korea's AI leaders.
        </p>
      </div>
    </section>
  );
}
