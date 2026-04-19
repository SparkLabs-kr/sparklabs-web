/**
 * SparkLabs 포트폴리오 시드 데이터.
 * 전체 550+ 중 브랜드·AI 스포트라이트 중심의 대표 셀렉션.
 * 향후 관리자 콘솔/스프레드시트 연동 전까지의 source of truth.
 */

export type PortfolioCategory =
  | 'ai'
  | 'fintech'
  | 'bio'
  | 'mobility'
  | 'saas'
  | 'commerce'
  | 'hrtech'
  | 'agrifood'
  | 'security'
  | 'media'
  | 'consumer'
  | 'proptech'
  | 'deeptech'
  | 'other';

export type PortfolioStage =
  | 'Seed'
  | 'Pre-A'
  | 'Series A'
  | 'Series B'
  | 'Series C+'
  | 'Public'
  | 'Exited';

export interface PortfolioCompany {
  slug: string;
  name: string;
  tagline: { ko: string; en: string };
  category: PortfolioCategory;
  entity: string; // entity slug
  country: string; // ISO-ish short code e.g. 'KR', 'US', 'AU'
  stage?: PortfolioStage;
  year?: string;
  website?: string;
  /** True if this company should surface in the AI Portfolio Spotlight page. */
  aiPick?: boolean;
  /** True if this is a marquee brand-defining name for SparkLabs. */
  featured?: boolean;
  /** Optional note rendered in cards (exit, milestone). */
  highlight?: { ko: string; en: string };
}

const globalAiLeaders: PortfolioCompany[] = [
  {
    slug: 'openai',
    name: 'OpenAI',
    tagline: {
      ko: 'ChatGPT를 만든 AI 연구·배포 리더',
      en: 'The research and deployment leader behind ChatGPT',
    },
    category: 'ai',
    entity: 'group',
    country: 'US',
    stage: 'Series C+',
    aiPick: true,
    featured: true,
    highlight: {
      ko: '2024년 1월 펀딩 라운드 9개 초청 투자사 중 하나로 참여',
      en: 'Invited as one of nine investors in the January 2024 funding round',
    },
  },
  {
    slug: 'anthropic',
    name: 'Anthropic',
    tagline: {
      ko: '안전하고 조향 가능한 AI를 추구하는 AI 연구소',
      en: 'An AI safety company building steerable, reliable AI systems',
    },
    category: 'ai',
    entity: 'group',
    country: 'US',
    stage: 'Series C+',
    aiPick: true,
    featured: true,
  },
  {
    slug: 'perplexity',
    name: 'Perplexity',
    tagline: {
      ko: 'AI-native 검색 엔진',
      en: 'AI-native answer engine for the web',
    },
    category: 'ai',
    entity: 'group',
    country: 'US',
    stage: 'Series C+',
    aiPick: true,
    featured: true,
  },
  {
    slug: 'xai',
    name: 'xAI (Grok)',
    tagline: {
      ko: 'Elon Musk가 설립한 AI 연구소',
      en: "Elon Musk's AI research company",
    },
    category: 'ai',
    entity: 'group',
    country: 'US',
    stage: 'Series C+',
    aiPick: true,
    featured: true,
    highlight: {
      ko: '2026년 SpaceX에 인수',
      en: 'Acquired by SpaceX in 2026',
    },
  },
  {
    slug: 'groq',
    name: 'Groq',
    tagline: {
      ko: '세계에서 가장 빠른 AI 추론 하드웨어',
      en: 'The fastest AI inference silicon in the world',
    },
    category: 'ai',
    entity: 'group',
    country: 'US',
    stage: 'Exited',
    aiPick: true,
    featured: true,
    highlight: {
      ko: '2025년 NVIDIA에 $20B 규모 자산·라이선싱 딜로 편입',
      en: 'Joined NVIDIA in 2025 via a $20B asset & licensing deal',
    },
  },
];

const koreaCore: PortfolioCompany[] = [
  {
    slug: 'quadmedicine',
    name: 'QuadMedicine',
    tagline: {
      ko: '세계 최초 GMP-compliant medical microneedle',
      en: "World's first GMP-compliant medical microneedle platform",
    },
    category: 'bio',
    entity: 'biolabs',
    country: 'KR',
    stage: 'Public',
    featured: true,
    highlight: {
      ko: 'KOSDAQ 상장 · Bill & Melinda Gates Foundation 그랜트',
      en: 'Listed on KOSDAQ · Grant from Bill & Melinda Gates Foundation',
    },
  },
  {
    slug: 'sparkplus',
    name: 'SparkPlus',
    tagline: {
      ko: '한국 대표 프리미엄 오피스 플랫폼',
      en: "Korea's premium workspace network",
    },
    category: 'proptech',
    entity: 'korea',
    country: 'KR',
    stage: 'Series C+',
    featured: true,
  },
  {
    slug: 'wanted',
    name: 'Wanted',
    tagline: {
      ko: '데이터 기반 채용 플랫폼',
      en: 'Data-driven recruiting platform',
    },
    category: 'hrtech',
    entity: 'korea',
    country: 'KR',
    stage: 'Public',
    featured: true,
  },
  {
    slug: 'alganize',
    name: 'Alganize',
    tagline: {
      ko: '문서 중심 AI 리서치 어시스턴트',
      en: 'AI research assistant for documents',
    },
    category: 'ai',
    entity: 'korea',
    country: 'KR',
    stage: 'Series A',
    aiPick: true,
  },
  {
    slug: 'fescaro',
    name: 'FESCARO',
    tagline: {
      ko: '차세대 차량 사이버 보안 솔루션',
      en: 'Next-generation automotive cybersecurity',
    },
    category: 'security',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'muzlive',
    name: 'Muzlive',
    tagline: {
      ko: 'K-pop 팬 IP 플랫폼 (Kit앨범)',
      en: 'K-pop fan IP platform behind the Kit album',
    },
    category: 'media',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'kokozi',
    name: 'kokozi',
    tagline: {
      ko: '세계 진출한 키즈 콘텐츠·IP',
      en: 'Kids IP & content studio with global reach',
    },
    category: 'media',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'genoplan',
    name: 'Genoplan',
    tagline: {
      ko: '컨슈머 유전자·헬스케어',
      en: 'Consumer genomics & healthcare',
    },
    category: 'bio',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'blocko',
    name: 'Blocko',
    tagline: {
      ko: '엔터프라이즈 블록체인 인프라',
      en: 'Enterprise blockchain infrastructure',
    },
    category: 'deeptech',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'obzen',
    name: 'Obzen',
    tagline: {
      ko: 'AI 기반 금융 범죄·AML 솔루션',
      en: 'AI-driven financial crime & AML platform',
    },
    category: 'fintech',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
    aiPick: true,
  },
  {
    slug: 'reco',
    name: 'Reco',
    tagline: {
      ko: 'SaaS 보안 거버넌스',
      en: 'SaaS security governance platform',
    },
    category: 'security',
    entity: 'korea',
    country: 'KR',
    stage: 'Series A',
  },
  {
    slug: 'switchon',
    name: 'Switchon',
    tagline: {
      ko: '전력 IoT · 산업 AI',
      en: 'Power IoT & industrial AI',
    },
    category: 'deeptech',
    entity: 'korea',
    country: 'KR',
    stage: 'Series A',
    aiPick: true,
  },
  {
    slug: 'ssenstone',
    name: 'SSenStone',
    tagline: {
      ko: '동적 본인인증 보안 플랫폼',
      en: 'Dynamic authentication security platform',
    },
    category: 'security',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'gint',
    name: 'GINT',
    tagline: {
      ko: '스포츠 데이터·커뮤니티',
      en: 'Sports data & community platform',
    },
    category: 'consumer',
    entity: 'korea',
    country: 'KR',
    stage: 'Series A',
  },
  {
    slug: 'bemyfriends',
    name: 'bemyfriends',
    tagline: {
      ko: '글로벌 팬 커머스 플랫폼',
      en: 'Global fandom commerce platform',
    },
    category: 'commerce',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'mbx',
    name: 'MBX',
    tagline: {
      ko: 'Web3 게임·컨슈머 앱 플랫폼',
      en: 'Web3 gaming & consumer app platform',
    },
    category: 'consumer',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'nthing',
    name: 'N.THING',
    tagline: {
      ko: '모듈형 수직농장',
      en: 'Modular vertical farming company',
    },
    category: 'agrifood',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'sentbe',
    name: 'SentBe',
    tagline: {
      ko: '글로벌 B2B 국가간 송금',
      en: 'Global B2B cross-border payments',
    },
    category: 'fintech',
    entity: 'korea',
    country: 'KR',
    stage: 'Series C+',
  },
  {
    slug: 'peaches',
    name: 'Peaches',
    tagline: {
      ko: '모빌리티·소비자 앱',
      en: 'Consumer mobility app',
    },
    category: 'mobility',
    entity: 'korea',
    country: 'KR',
    stage: 'Series A',
  },
  {
    slug: 'caredoc',
    name: '케어닥',
    tagline: {
      ko: '시니어 케어 플랫폼',
      en: 'Senior-care matching & service platform',
    },
    category: 'saas',
    entity: 'korea',
    country: 'KR',
    stage: 'Series B',
  },
  {
    slug: 'aboraLabs',
    name: 'Abora Labs',
    tagline: {
      ko: 'AI 기반 언어 학습 플랫폼',
      en: 'AI-powered language learning platform',
    },
    category: 'ai',
    entity: 'korea',
    country: 'KR',
    stage: 'Seed',
    aiPick: true,
  },
];

export const portfolio: PortfolioCompany[] = [...globalAiLeaders, ...koreaCore];

export const categoryLabel: Record<PortfolioCategory, { ko: string; en: string }> = {
  ai: { ko: 'AI', en: 'AI' },
  fintech: { ko: '핀테크', en: 'Fintech' },
  bio: { ko: '바이오·헬스케어', en: 'Bio & Healthcare' },
  mobility: { ko: '모빌리티', en: 'Mobility' },
  saas: { ko: 'SaaS', en: 'SaaS' },
  commerce: { ko: '커머스', en: 'Commerce' },
  hrtech: { ko: 'HR Tech', en: 'HR Tech' },
  agrifood: { ko: '푸드·애그리', en: 'Agrifood' },
  security: { ko: '보안', en: 'Security' },
  media: { ko: '미디어·엔터', en: 'Media & Entertainment' },
  consumer: { ko: '컨슈머', en: 'Consumer' },
  proptech: { ko: '프롭테크', en: 'PropTech' },
  deeptech: { ko: '딥테크', en: 'Deep Tech' },
  other: { ko: '기타', en: 'Other' },
};

export function getCategories() {
  const unique = new Set(portfolio.map((p) => p.category));
  return Array.from(unique);
}

export function getEntitySlugs() {
  const unique = new Set(portfolio.map((p) => p.entity));
  return Array.from(unique);
}
