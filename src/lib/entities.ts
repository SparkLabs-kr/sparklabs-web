/**
 * SparkLabs 글로벌 엔티티 메타데이터. Home 지도와 About Entities 페이지의 source of truth.
 * 상세 본문은 /content/entities/{locale}/{slug}.mdx에 위치.
 */
export interface EntityMeta {
  slug: string;
  name: { ko: string; en: string };
  shortName?: string;
  coordinates: [number, number]; // [lng, lat]
  region: 'APAC' | 'Americas' | 'MENA' | 'ANZ';
  location: { ko: string; en: string };
  accent: 'blue' | 'violet' | 'teal' | 'red' | 'green' | 'pink' | 'orange';
  focus: { ko: string; en: string };
  leads?: string[]; // Managing partners
  founded?: string; // Year
  website?: string;
}

export const entities: EntityMeta[] = [
  {
    slug: 'korea',
    name: { ko: '스파크랩 Korea', en: 'SparkLabs Korea' },
    shortName: 'Korea',
    coordinates: [126.978, 37.5665],
    region: 'APAC',
    location: { ko: '서울, 대한민국', en: 'Seoul, Republic of Korea' },
    accent: 'blue',
    focus: {
      ko: '대한민국 대표 액셀러레이터. AI·딥테크 중심 330+ 포트폴리오 운영.',
      en: 'Korea\'s flagship accelerator. 330+ portfolio with focus on AI and deep-tech.',
    },
    leads: ['Jimmy Kim', 'Eugene Kim'],
    founded: '2013',
  },
  {
    slug: 'group',
    name: { ko: '스파크랩 Group', en: 'SparkLabs Group' },
    shortName: 'Group',
    coordinates: [-122.419, 37.7749], // San Francisco
    region: 'Americas',
    location: { ko: '샌프란시스코, 미국', en: 'San Francisco, USA' },
    accent: 'violet',
    focus: {
      ko: '스파크랩 글로벌 네트워크의 마스터 엔티티. 전세계 엔티티와 LP 네트워크를 총괄.',
      en: 'Master entity orchestrating the global SparkLabs network, entities, and LP relationships.',
    },
    leads: ['HanJoo Lee', 'Bernard Moon'],
    founded: '2013',
  },
  {
    slug: 'global-ventures',
    name: { ko: '스파크랩 Global Ventures', en: 'SparkLabs Global Ventures' },
    shortName: 'Global Ventures',
    coordinates: [-122.143, 37.4419], // Palo Alto
    region: 'Americas',
    location: { ko: '팰로앨토, 미국', en: 'Palo Alto, USA' },
    accent: 'blue',
    focus: {
      ko: '실리콘밸리 기반의 글로벌 VC arm. 글로벌 창업가에 Series A·B 투자.',
      en: 'Global VC arm based in Silicon Valley, investing at Series A–B in global founders.',
    },
    leads: ['Bernard Moon'],
    founded: '2014',
  },
  {
    slug: 'taipei',
    name: { ko: '스파크랩 Taipei', en: 'SparkLabs Taipei' },
    shortName: 'Taipei',
    coordinates: [121.5654, 25.0329],
    region: 'APAC',
    location: { ko: '타이베이, 대만', en: 'Taipei, Taiwan' },
    accent: 'teal',
    focus: {
      ko: '대만 하드웨어·디지털 혁신 생태계와 글로벌 시장을 연결.',
      en: 'Bridging Taiwan\'s hardware & digital innovation ecosystem to global markets.',
    },
    leads: ['Edgar Chiu'],
  },
  {
    slug: 'saudi-arabia',
    name: { ko: '스파크랩 Saudi Arabia', en: 'SparkLabs Saudi Arabia' },
    shortName: 'Saudi',
    coordinates: [46.6753, 24.7136], // Riyadh
    region: 'MENA',
    location: { ko: '리야드, 사우디아라비아', en: 'Riyadh, Saudi Arabia' },
    accent: 'red',
    focus: {
      ko: '사우디 Vision 2030에 발맞춘 MENA 혁신 가속. MCIT와 Tech Founders 프로그램 공동 운영.',
      en: 'Accelerating MENA innovation aligned with Saudi Vision 2030. Co-operates Tech Founders program with MCIT.',
    },
    leads: ['Ivan Grlic', 'Bodin Scepanovic'],
  },
  {
    slug: 'cultiv8',
    name: { ko: '스파크랩 Cultiv8', en: 'SparkLabs Cultiv8' },
    shortName: 'Cultiv8',
    coordinates: [151.2093, -33.8688], // Sydney
    region: 'ANZ',
    location: { ko: '시드니, 호주', en: 'Sydney, Australia' },
    accent: 'green',
    focus: {
      ko: '호주·뉴질랜드 거점의 agrifood·sustainability 전문 액셀러레이터.',
      en: 'Agrifood & sustainability accelerator covering Australia and New Zealand.',
    },
    leads: ['Malcom Nutt', 'Jonathon Quigley'],
  },
  {
    slug: 'biolabs',
    name: { ko: '스파크바이오랩', en: 'SparkBioLabs' },
    shortName: 'BioLabs',
    coordinates: [127.05, 37.5], // Seoul, slight offset from Korea pin
    region: 'APAC',
    location: { ko: '서울, 대한민국', en: 'Seoul, Republic of Korea' },
    accent: 'pink',
    focus: {
      ko: '바이오·헬스케어 전문 액셀러레이터. 서울대병원·연세대·포항시 파트너십.',
      en: 'Bio & healthcare accelerator in partnership with SNUH, Yonsei University, and Pohang City.',
    },
    founded: '2023',
  },
  {
    slug: 'partners',
    name: { ko: '스파크랩 Partners', en: 'SparkLabs Partners' },
    shortName: 'Partners',
    coordinates: [129.3435, 36.0190], // Pohang (KR regional hub)
    region: 'APAC',
    location: { ko: '포항·서울, 대한민국', en: 'Pohang · Seoul, Korea' },
    accent: 'orange',
    focus: {
      ko: '지역 거점 확장 및 산업 클러스터 연계. 한동대·포항TP·세명기독병원과 바이오 MOU.',
      en: 'Regional hubs and industry cluster linkage. Bio-cluster MOU with Handong · Pohang TP · Semyung Hospital.',
    },
  },
];
