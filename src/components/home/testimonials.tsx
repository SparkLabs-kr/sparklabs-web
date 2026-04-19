import { getTranslations } from 'next-intl/server';
import { testimonials } from '@/lib/testimonials';
import type { Locale } from '@/lib/content';
import { TestimonialsSection } from './testimonials-section';

export async function Testimonials({ locale }: { locale: Locale }) {
  const t = await getTranslations('testimonials');

  return (
    <TestimonialsSection
      testimonials={testimonials}
      locale={locale}
      copy={{
        eyebrow: t('eyebrow'),
        title: t('title'),
        subcopy: t('subcopy'),
        prev: t('prev'),
        next: t('next'),
      }}
    />
  );
}
