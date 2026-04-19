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
      ko: '대한민국 대표 액셀러레이터. AI·딥테크 중심 330+ 포트폴리오, 연 2회 아시아 최대 규모 Demo Day 운영.',
      en: "Korea's flagship accelerator. 330+ portfolio with focus on AI and deep-tech, running one of Asia's largest demo days biannually.",
    },
    leads: ['Jimmy Kim', 'Eugene Kim', 'John Park'],
    founded: '2013',
    website: 'https://www.sparklabs.co.kr',
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
      ko: '스파크랩 글로벌 네트워크의 마스터 엔티티. 6대륙 10+ 프로그램을 총괄하며 OpenAI·Anthropic·xAI 등 AI 분야에 선제 투자.',
      en: 'Master entity orchestrating 10+ programs across six continents, with early positions in OpenAI, Anthropic, xAI and other frontier AI companies.',
    },
    leads: ['HanJoo Lee', 'Bernard Moon', 'Jimmy Kim'],
    founded: '2013',
    website: 'https://www.sparklabsgroup.com',
  },
  {
    slug: 'taipei',
    name: { ko: '스파크랩 Taiwan', en: 'SparkLabs Taiwan' },
    shortName: 'Taiwan',
    coordinates: [121.5654, 25.0329],
    region: 'APAC',
    location: { ko: '타이베이, 대만', en: 'Taipei, Taiwan' },
    accent: 'teal',
    focus: {
      ko: '대만 하드웨어·AI·반도체 혁신 생태계와 글로벌 시장을 연결. 3개월 집중 멘토십 기반 액셀러레이터.',
      en: "Bridging Taiwan's hardware, AI, and semiconductor innovation ecosystem to global markets through a 3-month mentorship-driven accelerator.",
    },
    leads: ['Edgar Chiu'],
    founded: '2018',
    website: 'https://www.sparklabstaiwan.com',
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
      ko: 'Saudi Vision 2030 연계 MENA 혁신 가속. NTDP와 공동으로 사우디 국가 AI 이니셔티브 AI.M / AIM-X 프로그램 운영.',
      en: "Accelerating MENA innovation aligned with Saudi Vision 2030. Operates the nation's AI.M / AIM-X initiative with NTDP, KAUST, and SDAIA.",
    },
    leads: ['Ivan Grlic', 'Bodin Scepanovic'],
    founded: '2023',
    website: 'https://sparklabssaudi.com',
  },
  {
    slug: 'cultiv8',
    name: { ko: '스파크랩 Cultiv8', en: 'SparkLabs Cultiv8' },
    shortName: 'Cultiv8',
    coordinates: [151.2093, -33.8688], // Sydney
    region: 'ANZ',
    location: { ko: '시드니·Orange NSW, 호주', en: 'Sydney · Orange NSW, Australia' },
    accent: 'green',
    focus: {
      ko: '호주·뉴질랜드 거점 agrifood·sustainability 전문 액셀러레이터. 50+ 포트폴리오, AUD 7.5억+ 조달.',
      en: 'Agrifood & sustainability accelerator for Australia and New Zealand. 50+ portfolio companies, AUD 750M+ raised.',
    },
    leads: ['Malcolm Nutt', 'Jonathon Quigley'],
    founded: '2017',
    website: 'https://www.sparklabscultiv8.com',
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
      ko: '바이오·헬스케어 전담 액셀러레이터. 서울대병원·연세대·한국건강관리협회와 MediOpenLab 공동 운영.',
      en: 'Dedicated bio and healthcare accelerator, co-operating MediOpenLab with SNUH, Yonsei University, and the Korea Association of Health Promotion.',
    },
    founded: '2023',
    website: 'https://www.sparkbiolabs.com',
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
      ko: '지역 거점 확장 및 산업 클러스터 연계. 한동대·포항테크노파크와 포항 AI·바이오 생태계 구축.',
      en: 'Regional hubs and industry cluster linkage. Building a Pohang AI and bio ecosystem with Handong Global University and Pohang TechnoPark.',
    },
    leads: ['Jimmy Kim'],
    website: 'https://partners.sparklabs.co.kr',
  },
];
