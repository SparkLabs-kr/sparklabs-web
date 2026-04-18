import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { getAllEntries } from '@/lib/content';

export default async function NewsroomPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('newsroom');

  const press = getAllEntries(
    'press',
    locale === 'en' ? 'en' : 'ko'
  ) as Array<ReturnType<typeof getAllEntries>[number] & {
    frontmatter: { title?: string; date?: string; summary?: string };
  }>;

  return (
    <section className="section">
      <div className="container-narrow">
        <span className="eyebrow">Newsroom</span>
        <h1 className="mt-3 text-display-xl text-ink">{t('all')}</h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {press.length === 0 && (
            <p className="text-ink-soft">
              콘텐츠가 준비 중입니다. /content/press/{locale}/ 폴더에 MDX 파일을 추가하면 자동으로 노출됩니다.
            </p>
          )}
          {press.map((p) => (
            <Link
              key={p.slug}
              href={`/newsroom/${p.slug}` as any}
              className="card-light block p-6"
            >
              <span className="eyebrow">Press</span>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-ink">
                {p.frontmatter.title ?? p.slug}
              </h3>
              {p.frontmatter.date && (
                <p className="mt-3 text-xs text-ink-soft">{p.frontmatter.date}</p>
              )}
              {p.frontmatter.summary && (
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {p.frontmatter.summary}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
