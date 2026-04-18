import { setRequestLocale, getTranslations } from 'next-intl/server';

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('programs');

  const programs = ['accelerator', 'biolabs', 'sparkClaw', 'saudi'] as const;

  return (
    <section className="section">
      <div className="container-narrow">
        <span className="eyebrow">Programs</span>
        <h1 className="mt-3 text-display-xl text-ink">지원 프로그램</h1>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <div key={p} className="card-light p-8">
              <h3 className="text-xl font-semibold">{t(p)}</h3>
              <p className="mt-3 text-sm text-ink-soft">콘텐츠 준비 중</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
