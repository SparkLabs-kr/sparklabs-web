import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const sections = [
    { href: '/about/team', key: 'team' as const },
    { href: '/about/entities', key: 'entities' as const },
    { href: '/about/partnerships', key: 'partnerships' as const },
  ];

  return (
    <>
      <section className="bg-hero-navy text-white">
        <div className="container-narrow py-24">
          <span className="eyebrow !text-spark-yellow">About</span>
          <h1 className="mt-3 text-display-xl max-w-3xl">
            Entrepreneurs Growing Entrepreneurs
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            2013년 이래 6대륙에서 창업가를 발굴·육성해온 글로벌 액셀러레이터 네트워크.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-6 md:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="card-light block p-8">
              <h3 className="text-xl font-semibold text-ink">{t(s.key)}</h3>
              <p className="mt-3 text-sm text-ink-soft">Coming soon →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
