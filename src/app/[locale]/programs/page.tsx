import { redirect } from '@/i18n/routing';

export default async function ProgramsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect({ href: '/programs/batch', locale });
}
