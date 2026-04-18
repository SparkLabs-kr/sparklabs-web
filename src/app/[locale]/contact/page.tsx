import { setRequestLocale } from 'next-intl/server';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="section">
      <div className="container-narrow">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-3 text-display-xl text-ink">Let's build something global.</h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          General: <a href="mailto:hello@sparklabs.co.kr" className="text-brand-blue underline">hello@sparklabs.co.kr</a>
          <br />
          Press: <a href="mailto:press@sparklabs.co.kr" className="text-brand-blue underline">press@sparklabs.co.kr</a>
          <br />
          Apply: <a href="mailto:apply@sparklabs.co.kr" className="text-brand-blue underline">apply@sparklabs.co.kr</a>
        </p>
      </div>
    </section>
  );
}
