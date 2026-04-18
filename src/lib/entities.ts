/**
 * SparkLabs 글로벌 엔티티 메타데이터. Home 지도와 About Entities 페이지의 source of truth.
 * 실제 상세 콘텐츠는 /content/entities/{locale}/{slug}.mdx에 위치.
 */
export interface EntityMeta {
  slug: string;
  name: { ko: string; en: string };
  shortName?: string;
  // Geo coordinates (approx, for the map pin)
  coordinates: [number, number]; // [lng, lat]
  region: string;
  accent: string; // spark spectrum color key
}

export const entities: EntityMeta[] = [
  {
    slug: 'korea',
    name: { ko: '스파크랩', en: 'SparkLabs Korea' },
    shortName: 'Korea',
    coordinates: [126.978, 37.5665],
    region: 'APAC',
    accent: 'blue',
  },
  {
    slug: 'group',
    name: { ko: '스파크랩 그룹', en: 'SparkLabs Group' },
    shortName: 'Group',
    coordinates: [-122.419, 37.7749], // San Francisco
    region: 'Americas',
    accent: 'violet',
  },
  {
    slug: 'taipei',
    name: { ko: '스파크랩 타이베이', en: 'SparkLabs Taipei' },
    shortName: 'Taipei',
    coordinates: [121.5654, 25.0329],
    region: 'APAC',
    accent: 'teal',
  },
  {
    slug: 'saudi-arabia',
    name: { ko: '스파크랩 사우디아라비아', en: 'SparkLabs Saudi Arabia' },
    shortName: 'Saudi Arabia',
    coordinates: [46.6753, 24.7136], // Riyadh
    region: 'MENA',
    accent: 'red',
  },
  {
    slug: 'cultiv8',
    name: { ko: '스파크랩 컬티베이트', en: 'SparkLabs Cultiv8' },
    shortName: 'Cultiv8',
    coordinates: [151.2093, -33.8688], // Sydney
    region: 'APAC',
    accent: 'green',
  },
  {
    slug: 'global-ventures',
    name: { ko: '스파크랩 글로벌 벤처스', en: 'SparkLabs Global Ventures' },
    shortName: 'Global Ventures',
    coordinates: [-122.143, 37.4419], // Palo Alto
    region: 'Americas',
    accent: 'blue',
  },
  {
    slug: 'biolabs',
    name: { ko: '스파크바이오랩', en: 'SparkBioLabs' },
    shortName: 'BioLabs',
    coordinates: [126.9, 37.56], // Seoul (shifted slightly)
    region: 'APAC',
    accent: 'pink',
  },
];
