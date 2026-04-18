import type { ReactNode } from 'react';

interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface Props {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
  contactTitle: string;
  contactBody: ReactNode;
}

export function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
  contactTitle,
  contactBody,
}: Props) {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-spark-blue/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-narrow relative py-20 md:py-24">
          <span className="eyebrow !text-spark-yellow">{eyebrow}</span>
          <h1 className="mt-4 text-display-lg max-w-3xl leading-[1.1]">
            {title}
          </h1>
          <p className="mt-5 text-sm uppercase tracking-[0.14em] text-white/60">
            {lastUpdated}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="section">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            {/* TOC — sticky on desktop */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <nav aria-label="Contents">
                <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
                  Contents
                </p>
                <ol className="mt-4 space-y-2.5 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex gap-3 text-ink-soft hover:text-ink transition"
                      >
                        <span className="shrink-0 text-ink/40 tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="leading-snug">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="min-w-0">
              <div className="max-w-2xl text-ink-soft leading-relaxed">
                {intro}
              </div>

              <div className="mt-14 space-y-14">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <p className="text-xs uppercase tracking-[0.14em] text-ink/40">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-ink">
                      {s.title}
                    </h2>
                    <div className="mt-5 prose-legal text-ink-soft leading-relaxed">
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-20 rounded-3xl border border-surface-border bg-surface-subtle p-8 md:p-10">
                <h3 className="text-lg font-semibold text-ink">{contactTitle}</h3>
                <div className="mt-3 text-ink-soft leading-relaxed">
                  {contactBody}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
