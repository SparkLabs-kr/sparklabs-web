const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://www.sparklabs.co.kr';

interface Props {
  locale: string;
}

/**
 * Organization + WebSite JSON-LD rendered once per page.
 * Helps Google's Knowledge Panel and Naver's entity resolution pick up the brand.
 */
export function OrganizationJsonLd({ locale }: Props) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SparkLabs',
    alternateName: '스파크랩',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description:
      'SparkLabs is a global AI-First investment firm across six continents, backing the founders of the AI era.',
    foundingDate: '2013',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '180 Yeoksam-ro, Gangnam-gu',
      addressLocality: 'Seoul',
      postalCode: '06248',
      addressCountry: 'KR',
    },
    sameAs: [
      'https://www.linkedin.com/company/sparklabs',
      'https://twitter.com/SparkLabsGlobal',
      'https://www.youtube.com/@sparklabskorea',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SparkLabs',
    url: SITE_URL,
    inLanguage: locale === 'ko' ? 'ko-KR' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/${locale}/portfolio?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
