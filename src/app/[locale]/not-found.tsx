import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-narrow text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-3 text-display-lg text-ink">Page not found</h1>
        <p className="mt-4 text-ink-soft">
          The page you're looking for doesn't exist or was moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to home
        </Link>
      </div>
    </section>
  );
}
