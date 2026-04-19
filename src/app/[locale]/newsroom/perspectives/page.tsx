import { redirect } from 'next/navigation';

export default async function PerspectivesRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/newsroom/insights`);
}
