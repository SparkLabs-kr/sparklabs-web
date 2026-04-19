/**
 * 엔티티 상세 페이지 (/about/entities/[slug])의 source of truth.
 *
 * 요약 메타데이터는 entities.ts — 각 엔티티의 slug, 이름, 좌표, 리전, 대표 리드, 액센트 컬러 등.
 * 여기서는 상세 페이지에 들어가는 풍부한 콘텐츠(스토리, 리더십, 포트폴리오, 프로그램, 최근 마일스톤)만 다룹니다.
 */

export interface EntityLeader {
  name: string;
  role: { ko: string; en: string };
  bio?: { ko: string; en: string };
}

export interface EntityProgram {
  title: { ko: string; en: string };
  body: { ko: string; en: string };
}

export interface EntityPortfolioEntry {
  name: string;
  blurb: { ko: string; en: string };
  tag?: { ko: string; en: string };
  href?: string;
}

export interface EntityMilestone {
  date: string; // e.g., "2024.09", "Feb 2026"
  title: { ko: string; en: string };
  body?: { ko: string; en: string };
}

export interface EntityStat {
  value: string;
  label: { ko: string; en: string };
}

export interface EntityDetail {
  slug: string;
  story: { ko: string; en: string }; // 2-3 문단의 긴 소개
  highlights?: { ko: string; en: string }; // 한 문장 요약 (hero 아래 배지)
  stats?: EntityStat[];
  leaders: EntityLeader[];
  programs?: EntityProgram[];
  portfolio?: EntityPortfolioEntry[];
  milestones?: EntityMilestone[];
  partners?: { ko: string; en: string }; // 파트너십 목록 서술형
  links?: {
    website?: string;
    linkedin?: string;
    press?: string;
  };
}

export const entityDetails: Record<string, EntityDetail> = {
  korea: {
    slug: 'korea',
    story: {
      ko: '스파크랩 Korea는 2013년 이한주·김호민·버나드 문 세 명의 창업가 출신 파트너가 공동 창업한 한국 대표 액셀러레이터입니다. 연 2회 개최되는 Demo Day는 아시아 최대 규모로, 글로벌 투자자와 창업가가 한자리에 모이는 자리입니다.\n\n서울 강남 Maru180을 거점으로 AI · SaaS · 딥테크 중심 330+ 포트폴리오를 운영하며, Vint Cerf, Mark Cuban, Tom Peters 등 150+ 글로벌 어드바이저 네트워크를 통해 포트폴리오사의 글로벌 확장을 지원합니다. TIPS · 시드 TIPS 운영사로도 선정되어 국내 창업 생태계의 핵심 인프라 역할을 하고 있습니다.',
      en: "SparkLabs Korea was co-founded in 2013 by three founder-partners — HanJoo Lee, Jimmy Kim, and Bernard Moon — as Korea's flagship accelerator. Our biannual Demo Day is one of Asia's largest, bringing global investors and founders into one room twice a year.\n\nBased at Maru180 in Seoul's Gangnam startup cluster, we operate a 330+ portfolio focused on AI, SaaS, and deep-tech, supported by a 150+ global advisor network including Vint Cerf, Mark Cuban, and Tom Peters. As an official TIPS and Seed TIPS operator, SparkLabs Korea is a core pillar of the country's startup ecosystem.",
    },
    stats: [
      { value: '330+', label: { ko: '포트폴리오', en: 'Portfolio companies' } },
      { value: '150+', label: { ko: '글로벌 어드바이저', en: 'Global advisors' } },
      { value: '22+', label: { ko: '배치 운영', en: 'Batches run' } },
      { value: '$75K', label: { ko: '배치 시드 투자', en: 'Seed check per team' } },
    ],
    leaders: [
      {
        name: 'Jimmy Kim',
        role: { ko: '공동 창업자 · Partner', en: 'Co-founder & Partner' },
        bio: {
          ko: '넥슨 일본 상장을 주도한 초대 CFO이자 Studio Ex(디즈니 인수)·Nexonova 창업자 출신의 시리얼 앙트러프러너.',
          en: 'Serial entrepreneur. Former founding CFO at Nexon (led its Japan IPO) and founder of Studio Ex (acquired by Disney) and Nexonova.',
        },
      },
      {
        name: 'Eugene Kim',
        role: { ko: 'Partner, 액셀러레이팅 총괄', en: 'Partner, Head of Acceleration' },
        bio: {
          ko: '텐센트 코리아 BD 디렉터 출신. 배치 프로그램 전반과 포트폴리오 오퍼레이션을 총괄.',
          en: 'Former BD Director at Tencent Korea. Runs the batch program and portfolio operations.',
        },
      },
      {
        name: 'John Park',
        role: { ko: 'Partner, 후속 투자 · 글로벌 확장', en: 'Partner, Follow-on & Global Expansion' },
      },
    ],
    programs: [
      {
        title: { ko: 'Batch Program (22기+)', en: 'Batch Program (22+ cohorts)' },
        body: {
          ko: '연 2회 운영되는 22주 액셀러레이팅 프로그램. 팀당 약 $75K 시드 투자 · 6% equity · Maru180 오피스 · 멘토링 · 글로벌 어드바이저 연결.',
          en: 'A 22-week accelerator that runs twice a year. Includes a ~$75K seed check for 6% equity, office at Maru180, structured mentoring, and introductions to our global advisor network.',
        },
      },
      {
        title: { ko: 'SparkLabs Demo Day', en: 'SparkLabs Demo Day' },
        body: {
          ko: '4월과 11월에 개최되는 아시아 최대 규모 데모데이. 매회 수백 명의 글로벌 투자자가 참석해 포트폴리오사의 라운드 조달을 가속화.',
          en: 'Held in April and November, one of Asia\'s largest demo days. Hundreds of global investors attend each edition to back SparkLabs portfolio rounds.',
        },
      },
      {
        title: { ko: 'TIPS · 시드 TIPS 운영사', en: 'TIPS & Seed TIPS Operator' },
        body: {
          ko: '한국 정부의 대표 초기 창업 지원 프로그램 TIPS와 시드 TIPS의 공식 운영사로 선정되어 초기 창업가에 비희석 자금과 성장 지원을 제공.',
          en: 'Official operator of TIPS and Seed TIPS — Korea\'s flagship early-stage startup programs — providing non-dilutive capital and growth support to founders.',
        },
      },
    ],
    portfolio: [
      {
        name: 'MarqVision',
        blurb: {
          ko: 'AI 기반 B2B IP 보호 SaaS. 2024년 $16.5M Series A 클로징.',
          en: 'AI-powered B2B intellectual-property protection SaaS. Closed $16.5M Series A in 2024.',
        },
        tag: { ko: 'AI · IP', en: 'AI · IP' },
      },
      {
        name: 'QuadMedicine',
        blurb: {
          ko: '마이크로니들 기반 백신·바이오. 2025.12 KRX 상장 (시총 약 $115M).',
          en: 'Microneedle-based vaccine and biotech. KRX-listed in Dec 2025 (~$115M market cap).',
        },
        tag: { ko: '바이오 · IPO', en: 'Biotech · IPO' },
      },
      {
        name: 'FESCARO',
        blurb: {
          ko: '자동차 사이버보안. 2025.12 KRX 상장 (시총 약 $102M).',
          en: 'Automotive cybersecurity. KRX-listed in Dec 2025 (~$102M market cap).',
        },
        tag: { ko: '모빌리티 · IPO', en: 'Mobility · IPO' },
      },
      {
        name: 'Genoplan',
        blurb: {
          ko: '개인 유전체 기반 맞춤형 헬스 서비스. SparkBioLabs 공동 포트폴리오.',
          en: 'Personalized genomics-based health services. Co-portfolio with SparkBioLabs.',
        },
        tag: { ko: '바이오 · 헬스', en: 'Biotech · Health' },
      },
      {
        name: 'KnowRe',
        blurb: {
          ko: 'AI 수학 교육 플랫폼. 대교에 인수.',
          en: 'AI-driven math education platform. Acquired by Daekyo.',
        },
        tag: { ko: '에듀테크 · 엑싯', en: 'Edtech · Exit' },
      },
      {
        name: 'Piero Company',
        blurb: {
          ko: '2025년 시드 투자 — 스파크랩 Korea 최신 배치 포트폴리오.',
          en: 'Seed investment in 2025 — latest SparkLabs Korea batch portfolio.',
        },
        tag: { ko: '시드', en: 'Seed' },
      },
    ],
    milestones: [
      {
        date: '2012.12',
        title: { ko: '스파크랩 창립 · Batch 1 출범', en: 'SparkLabs founded; Batch 1 launched' },
      },
      {
        date: '2014.05',
        title: { ko: 'TIPS 운영사 선정', en: 'Selected as a TIPS operator' },
      },
      {
        date: '2022.11',
        title: { ko: '10주년 Demo Day', en: '10th anniversary Demo Day' },
      },
      {
        date: '2024.10',
        title: { ko: 'MarqVision Series A $16.5M 클로징', en: 'MarqVision closes $16.5M Series A' },
      },
      {
        date: '2025.12',
        title: { ko: 'QuadMedicine · FESCARO 연속 IPO', en: 'QuadMedicine & FESCARO back-to-back IPOs' },
      },
    ],
    links: {
      website: 'https://www.sparklabs.co.kr',
      linkedin: 'https://www.linkedin.com/company/sparklabs-group',
    },
  },

  group: {
    slug: 'group',
    story: {
      ko: 'SparkLabs Group은 스파크랩 글로벌 네트워크의 마스터 엔티티로, 2013년 이한주·버나드 문 등 공동 창업진이 결성한 글로벌 벤처 플랫폼입니다. 한국·대만·중국·호주·싱가포르·오만·사우디아라비아·미국 등 6대륙 10+ 프로그램을 총괄하며, 550+ 포트폴리오를 관리합니다.\n\nAI 시대의 초입에 OpenAI · Anthropic · xAI · Perplexity 등 프런티어 AI 연구소에 선제적으로 투자해 글로벌 AI-First 포지셔닝을 구축했습니다. 2024년 9월 $50M 규모의 AIM AI Fund를 결성하며 AI 확신을 한층 강화했습니다.',
      en: 'SparkLabs Group is the master entity of the SparkLabs global network, formed in 2013 by HanJoo Lee, Bernard Moon, and the co-founding partners. It orchestrates 10+ programs across six continents — Korea, Taiwan, China, Australia, Singapore, Oman, Saudi Arabia, and the US — and oversees a 550+ portfolio.\n\nAt the inflection point of the AI era, the Group made early bets on frontier AI labs like OpenAI, Anthropic, xAI, and Perplexity, establishing a global AI-First posture. The $50M AIM AI Fund, closed in September 2024, doubled down on that conviction.',
    },
    stats: [
      { value: '10+', label: { ko: '글로벌 프로그램', en: 'Global programs' } },
      { value: '6', label: { ko: '대륙', en: 'Continents' } },
      { value: '550+', label: { ko: '포트폴리오', en: 'Portfolio companies' } },
      { value: '$50M', label: { ko: 'AIM AI Fund', en: 'AIM AI Fund' } },
    ],
    leaders: [
      {
        name: 'HanJoo Lee',
        role: { ko: '공동 창업자 · Partner', en: 'Co-founder & Partner' },
        bio: {
          ko: 'Hostway · Bespin Global 공동 창업자. 서울·미국을 오가며 글로벌 오퍼레이션과 LP 관계를 총괄.',
          en: 'Co-founder of Hostway and Bespin Global. Leads global operations and LP relations from Seoul and the US.',
        },
      },
      {
        name: 'Bernard Moon',
        role: { ko: '공동 창업자 · General Partner', en: 'Co-founder & General Partner' },
        bio: {
          ko: 'Vidquik CEO 출신. 실리콘밸리를 거점으로 글로벌 네트워크의 미국 파트너십과 투자 활동을 이끈다.',
          en: 'Former CEO of Vidquik. Based in Silicon Valley, he leads US partnerships and investment activity for the global network.',
        },
      },
      {
        name: 'Jimmy Kim',
        role: { ko: '공동 창업자 · Partner', en: 'Co-founder & Partner' },
        bio: {
          ko: 'SparkLabs Korea와 Partners 대표 겸임. 한국 액셀러레이터 운영을 주도.',
          en: 'Concurrently leading SparkLabs Korea and SparkLabs Partners. Drives the Korea accelerator operations.',
        },
      },
    ],
    programs: [
      {
        title: { ko: 'AIM AI Fund ($50M)', en: 'AIM AI Fund ($50M)' },
        body: {
          ko: '2024.09 결성한 글로벌 AI 전용 펀드. 약 35%는 스파크랩 액셀러레이터 참여사의 후속 라운드에, 65%는 글로벌 Series A/B AI 딜에 배분.',
          en: 'A global AI-dedicated fund closed in Sep 2024. Approximately 35% is deployed into SparkLabs accelerator follow-ons and 65% into global Series A/B AI rounds.',
        },
      },
      {
        title: { ko: '10+ 글로벌 프로그램 네트워크', en: '10+ global program network' },
        body: {
          ko: '각 지역 엔티티가 독립적으로 운영하는 액셀러레이터·배치·코퍼레이트 이노베이션·정부 파트너십 프로그램을 Group 차원에서 조율.',
          en: 'The Group coordinates independently-run accelerators, batches, corporate-innovation partnerships, and government programs across each regional entity.',
        },
      },
    ],
    portfolio: [
      {
        name: 'OpenAI',
        blurb: {
          ko: 'ChatGPT를 만든 AI 연구·배포 리더. 2024년 1월 라운드 9개 초청 투자사 중 하나로 참여.',
          en: 'Research & deployment leader behind ChatGPT. Invited as one of nine investors in the Jan 2024 round.',
        },
        tag: { ko: 'Frontier AI', en: 'Frontier AI' },
      },
      {
        name: 'Anthropic',
        blurb: {
          ko: '안전하고 조향 가능한 AI를 추구하는 AI 연구소. Claude 모델 제작.',
          en: 'AI-safety company building steerable, reliable AI — makers of Claude.',
        },
        tag: { ko: 'Frontier AI', en: 'Frontier AI' },
      },
      {
        name: 'xAI (Grok)',
        blurb: {
          ko: 'Elon Musk가 설립한 AI 연구소. 2026년 SpaceX에 인수.',
          en: "Elon Musk's AI research company. Acquired by SpaceX in 2026.",
        },
        tag: { ko: 'Frontier AI', en: 'Frontier AI' },
      },
      {
        name: 'Perplexity',
        blurb: {
          ko: 'AI-native 검색 엔진. 답을 주는 검색의 새로운 표준.',
          en: 'AI-native answer engine redefining what search looks like.',
        },
        tag: { ko: 'AI · Search', en: 'AI · Search' },
      },
      {
        name: 'Vectara',
        blurb: {
          ko: '엔터프라이즈용 RAG · 검색 AI 플랫폼.',
          en: 'Enterprise RAG and search AI platform.',
        },
        tag: { ko: 'Enterprise AI', en: 'Enterprise AI' },
      },
      {
        name: 'Kneron',
        blurb: {
          ko: '엣지 AI 반도체. 누적 $190M 조달.',
          en: 'Edge-AI silicon company. Has raised $190M cumulatively.',
        },
        tag: { ko: 'AI Hardware', en: 'AI Hardware' },
      },
      {
        name: 'Allganize',
        blurb: {
          ko: '엔터프라이즈 LLM 플랫폼. 한미 동시 운영.',
          en: 'Enterprise LLM platform with dual presence in Korea and the US.',
        },
        tag: { ko: 'Enterprise AI', en: 'Enterprise AI' },
      },
    ],
    milestones: [
      {
        date: '2012.12',
        title: { ko: 'SparkLabs Group 결성', en: 'SparkLabs Group founded' },
      },
      {
        date: '2016',
        title: { ko: 'OpenAI 초기 투자', en: 'Early position in OpenAI' },
      },
      {
        date: '2024.09',
        title: { ko: '$50M AIM AI Fund 클로징', en: '$50M AIM AI Fund closed' },
      },
      {
        date: '2026.02',
        title: { ko: 'SparkLabs KSU Fund I ($20M) 출범', en: 'SparkLabs KSU Fund I ($20M) launched' },
      },
    ],
    links: {
      website: 'https://www.sparklabsgroup.com',
      linkedin: 'https://www.linkedin.com/company/sparklabs-group',
    },
  },

  taipei: {
    slug: 'taipei',
    story: {
      ko: 'SparkLabs Taiwan은 2018년 Edgar Chiu가 공동 창립한 대만 기반 액셀러레이터로, 3개월 집중 멘토십 프로그램을 중심으로 대만 스타트업의 글로벌 진출을 가속합니다. IoT · AI/ML · 반도체 · 디지털 헬스케어 · 핀테크 등 대만 고유의 하드웨어·소프트웨어 역량에 특화되어 있습니다.\n\n팀당 $40K · 최대 6% equity 구조로 연 2회 배치를 운영하며, DemoDay 10에서는 400+ 글로벌 투자자가 참석했습니다. 포트폴리오사 Kneron(엣지 AI 반도체), TMYTEK(2025.01 TWSE 상장)은 대만 딥테크 생태계의 대표 사례로 꼽힙니다.',
      en: 'SparkLabs Taiwan, co-founded in 2018 by Edgar Chiu, is a Taiwan-based accelerator helping local startups go global through an intensive 3-month mentorship program. The program is specialized in IoT, AI/ML, semiconductors, digital healthcare, and fintech — the verticals where Taiwan has deep hardware and software strengths.\n\nWith a $40K check per team for up to 6% equity, it runs two batches per year. DemoDay 10 attracted 400+ global investors. Portfolio companies like Kneron (edge-AI silicon) and TMYTEK (Taiwan Stock Exchange listing in Jan 2025) exemplify the depth of Taiwan\'s deep-tech ecosystem.',
    },
    stats: [
      { value: '2018', label: { ko: '출범', en: 'Founded' } },
      { value: '$40K', label: { ko: '배치 시드 투자', en: 'Seed check per team' } },
      { value: '3', label: { ko: '개월 프로그램', en: 'Month program' } },
      { value: '400+', label: { ko: 'DemoDay 참석 투자자', en: 'DemoDay investors' } },
    ],
    leaders: [
      {
        name: 'Edgar Chiu',
        role: { ko: '공동 창업자 · Managing Partner', en: 'Co-founder & Managing Partner' },
        bio: {
          ko: 'Gogolook(Whoscall) 창립 COO 출신. 2013년 NAVER에 인수된 후 일본·한국·중동·동남아 글로벌 파트너십을 총괄.',
          en: 'Founding COO of Gogolook (Whoscall). After the 2013 acquisition by NAVER, he led global partnerships across Japan, Korea, the Middle East, and Southeast Asia.',
        },
      },
    ],
    programs: [
      {
        title: { ko: '3-Month Accelerator Program', en: '3-Month Accelerator Program' },
        body: {
          ko: '시드~얼리 단계 팀 대상 3개월 집중 프로그램. $40K / 최대 6% equity · 사무실 · 멘토 · Demo Day 피칭 포함.',
          en: 'A 3-month program for seed-to-early-stage teams. $40K for up to 6% equity, office space, mentors, and a Demo Day pitch slot.',
        },
      },
      {
        title: { ko: 'DemoDay (연 1-2회)', en: 'DemoDay (annually)' },
        body: {
          ko: '글로벌 VC·전략 투자자 400+명이 참석하는 대만 최대 규모의 스타트업 쇼케이스. Cleantech · AI MarTech · 반도체 · 헬스케어 등 버티컬 피처.',
          en: 'Taiwan\'s largest startup showcase with 400+ global VCs and strategic investors, featuring verticals from cleantech and AI martech to semiconductors and healthcare.',
        },
      },
    ],
    portfolio: [
      {
        name: 'Kneron',
        blurb: {
          ko: '엣지 AI 반도체. 누적 약 $190M 조달. Foxconn · Horizon Ventures · Liteon 등 투자.',
          en: 'Edge-AI silicon. ~$190M raised with backing from Foxconn, Horizon Ventures, and Liteon.',
        },
        tag: { ko: 'AI Hardware', en: 'AI Hardware' },
      },
      {
        name: 'TMYTEK',
        blurb: {
          ko: '5G/6G mmWave 안테나 솔루션. 2025.01 대만증권거래소(TT) 상장.',
          en: '5G/6G mmWave antenna solutions. Listed on the Taiwan Stock Exchange in Jan 2025.',
        },
        tag: { ko: '반도체 · IPO', en: 'Semiconductor · IPO' },
      },
      {
        name: 'JustKitchen',
        blurb: {
          ko: '클라우드 키친 플랫폼. TSX-V 상장.',
          en: 'Cloud kitchen platform. Listed on TSX-V.',
        },
        tag: { ko: '푸드테크 · IPO', en: 'Foodtech · IPO' },
      },
      {
        name: 'Aiseed',
        blurb: {
          ko: '공공안전·방위용 고성능 AI 드론. Pegatron 공동 시드 $6M 리딩.',
          en: 'Defense-grade AI drone platform. Co-led $6M seed with Pegatron.',
        },
        tag: { ko: 'AI · Defense', en: 'AI · Defense' },
      },
      {
        name: 'CannerFlow',
        blurb: {
          ko: '데이터 인프라·분석 플랫폼.',
          en: 'Data infrastructure and analytics platform.',
        },
        tag: { ko: 'Data Infra', en: 'Data Infra' },
      },
    ],
    milestones: [
      {
        date: '2018',
        title: { ko: 'SparkLabs Taiwan 출범', en: 'SparkLabs Taiwan founded' },
      },
      {
        date: '2024.05',
        title: { ko: 'DemoDay 10 개최 (400+ 투자자)', en: 'DemoDay 10 held with 400+ investors' },
      },
      {
        date: '2025.01',
        title: { ko: 'TMYTEK TWSE 상장', en: 'TMYTEK listed on the Taiwan Stock Exchange' },
      },
    ],
    links: {
      website: 'https://www.sparklabstaiwan.com',
      linkedin: 'https://www.linkedin.com/company/sparklabs-taiwan',
    },
  },

  'saudi-arabia': {
    slug: 'saudi-arabia',
    story: {
      ko: 'SparkLabs Saudi Arabia는 2023년 11월 NTDP(National Technology Development Program) 지원으로 리야드에 론칭한 액셀러레이터·벤처캐피털입니다. Saudi Vision 2030에 발맞춰 MCIT · NTDP · KAUST · SDAIA와 공동으로 사우디 국가 AI 이니셔티브 AI.M 및 AIM-X 액셀러레이터 프로그램을 운영합니다.\n\n시드~Series A 단계 로컬 및 글로벌 창업자를 대상으로 $150K–$200K 체크를 집행하며, MENA AI 분야 최대 투자자로 자리매김하고 있습니다. 2026년 2월에는 King Saud University 및 Riyadh Valley Company와 공동으로 $20M SparkLabs KSU Fund I를 출범시켰습니다.',
      en: 'SparkLabs Saudi Arabia launched in Riyadh in November 2023 with NTDP (National Technology Development Program) backing. Aligned with Saudi Vision 2030, it operates the national AI initiative AI.M and the AIM-X accelerator alongside MCIT, NTDP, KAUST, and SDAIA.\n\nIt writes $150K–$200K checks into seed/Series A local and global founders and has become a leading MENA AI investor. In February 2026, together with King Saud University and Riyadh Valley Company, it launched the $20M SparkLabs KSU Fund I.',
    },
    stats: [
      { value: '2023.11', label: { ko: '출범', en: 'Launched' } },
      { value: '$200K', label: { ko: 'AIM-X 투자', en: 'AIM-X check' } },
      { value: '14', label: { ko: 'AIM-X 1기 선발사', en: 'AIM-X Cohort 1 companies' } },
      { value: '$20M', label: { ko: 'KSU Fund I', en: 'KSU Fund I' } },
    ],
    leaders: [
      {
        name: 'Ivan Grlic',
        role: { ko: '공동 창업자 · Managing Partner', en: 'Co-founder & Managing Partner' },
        bio: {
          ko: 'CMT Group Balkan(2005 설립, 2009 매각) · Primus Group(2014) 창업자 출신의 시리얼 앙트러프러너.',
          en: 'Serial entrepreneur. Founder of CMT Group Balkan (founded 2005, sold 2009) and Primus Group (2014).',
        },
      },
      {
        name: 'Bodin Scepanovic',
        role: { ko: '공동 창업자 · Partner', en: 'Co-founder & Partner' },
        bio: {
          ko: '2021년 Taj Holding Group 최연소 임원으로 $1.4B 포트폴리오(리테일·항공·헬스케어·제조·IT·서비스 6개 섹터)를 관리.',
          en: 'In 2021 became the youngest executive at Taj Holding Group, managing a $1.4B portfolio across retail, aviation, healthcare, manufacturing, IT, and services.',
        },
      },
      {
        name: 'William Chu',
        role: { ko: 'AI.M / AIM-X Lead', en: 'AI.M / AIM-X Lead' },
        bio: {
          ko: 'SparkLabs Fintech 공동 창업자. AI.M 및 AIM-X 프로그램 운영 총괄.',
          en: 'Co-founder of SparkLabs Fintech. Leads the AI.M and AIM-X programs.',
        },
      },
    ],
    programs: [
      {
        title: { ko: 'AIM-X Accelerator (AI.M 플래그십)', en: 'AIM-X Accelerator (AI.M flagship)' },
        body: {
          ko: 'NTDP가 주관하는 국가 AI 이니셔티브 AI.M 하의 플래그십 액셀러레이터. 팀당 $200K · 최대 6% equity. 1기 14개 AI 스타트업 2024.09 출범.',
          en: 'The flagship accelerator under AI.M, the national AI initiative led by NTDP. $200K for up to 6% equity. Cohort 1 of 14 AI startups launched in Sep 2024.',
        },
      },
      {
        title: { ko: '플래그십 Accelerator (4개월)', en: '4-Month Flagship Accelerator' },
        body: {
          ko: '시드~Series A 전 단계 창업자 대상 4개월 프로그램. 팀당 $150K · 최대 7% equity. MENA 혁신 가속의 핵심 채널.',
          en: 'A 4-month program for pre-seed to Series A founders. $150K for up to 7% equity — a core channel for accelerating MENA innovation.',
        },
      },
      {
        title: { ko: 'SparkLabs KSU Fund I ($20M)', en: 'SparkLabs KSU Fund I ($20M)' },
        body: {
          ko: '2026.02 King Saud University · Riyadh Valley Company와 공동 조성한 $20M 규모의 대학 연계 벤처 펀드.',
          en: 'A $20M university-linked venture fund co-established in Feb 2026 with King Saud University and Riyadh Valley Company.',
        },
      },
    ],
    portfolio: [
      {
        name: 'Lucidya',
        blurb: {
          ko: '사우디 아랍어 CX·AI 애널리틱스 SaaS. 2025.07 $30M Series B — MENA AI 최대 라운드.',
          en: 'Saudi Arabic CX and AI analytics SaaS. Closed $30M Series B in July 2025 — the largest AI round in MENA.',
        },
        tag: { ko: 'AI · SaaS', en: 'AI · SaaS' },
      },
      {
        name: 'AIM-X Cohort 1',
        blurb: {
          ko: 'NTDP·SDAIA·KAUST와 공동 선발한 14개 AI 스타트업. 2024.09 프로그램 개시.',
          en: '14 AI startups selected jointly with NTDP, SDAIA, and KAUST. Program started Sep 2024.',
        },
        tag: { ko: '1기 배치', en: 'Cohort 1' },
      },
    ],
    milestones: [
      {
        date: '2023.11',
        title: { ko: 'SparkLabs Saudi Arabia 출범', en: 'SparkLabs Saudi Arabia launched' },
      },
      {
        date: '2024.09',
        title: { ko: 'AIM-X 1기 14개 AI 스타트업 선발', en: 'AIM-X Cohort 1 of 14 AI startups selected' },
      },
      {
        date: '2025.07',
        title: { ko: 'Lucidya $30M Series B — MENA AI 최대', en: 'Lucidya closes $30M Series B — MENA\'s largest AI round' },
      },
      {
        date: '2026.02',
        title: { ko: 'SparkLabs KSU Fund I ($20M) 출범', en: 'SparkLabs KSU Fund I ($20M) launched' },
      },
    ],
    links: {
      website: 'https://sparklabssaudi.com',
      linkedin: 'https://www.linkedin.com/company/sparklabs-saudi-arabia',
    },
  },

  cultiv8: {
    slug: 'cultiv8',
    story: {
      ko: 'SparkLabs Cultiv8은 2017년 출범한 호주 기반 글로벌 애그리푸드·클린테크 액셀러레이터입니다. NSW 주(州) Department of Primary Industries 산하 Orange에 거점을 두고 6개월 프로그램을 운영하며, 호주·뉴질랜드·아시아태평양의 지속가능 농업·식품·기후 기술 스타트업을 집중적으로 커버합니다.\n\n세계에서 가장 활발한 agtech 액셀러레이터 중 하나로, 50+ 포트폴리오가 누적 AUD 7.5억+를 조달했고, 밸류에이션 AUD 17.5억+, 750+ 일자리를 창출했습니다. 자매 엔티티 Cultiv8 Funds Management가 시드~Series B 단계 후속 투자를 담당합니다.',
      en: 'SparkLabs Cultiv8, launched in 2017, is an Australia-based global agri-food and cleantech accelerator. Embedded within the NSW Department of Primary Industries in Orange, it runs a six-month program covering sustainable agriculture, food, and climate-tech startups across Australia, New Zealand, and Asia-Pacific.\n\nRegarded as one of the world\'s most active agtech accelerators, its 50+ portfolio has raised AUD 750M+ cumulatively with AUD 1.75B+ in aggregate valuation and 750+ jobs created. The sister entity Cultiv8 Funds Management handles follow-on seed to Series B investments.',
    },
    stats: [
      { value: '2017', label: { ko: '출범', en: 'Launched' } },
      { value: '50+', label: { ko: '포트폴리오', en: 'Portfolio companies' } },
      { value: 'AUD 750M+', label: { ko: '누적 조달', en: 'Cumulative raised' } },
      { value: '750+', label: { ko: '창출 일자리', en: 'Jobs created' } },
    ],
    leaders: [
      {
        name: 'Malcolm Nutt',
        role: { ko: '공동 창업자 · Managing Partner', en: 'Co-founder & Managing Partner' },
        bio: {
          ko: 'Cultiv8 Funds Management 창립 파트너. agri-food tech 전담 시드·Series B 펀드 운영.',
          en: 'Founding partner of Cultiv8 Funds Management, the dedicated seed-to-Series B agri-food tech fund.',
        },
      },
      {
        name: 'Jonathon Quigley',
        role: { ko: '공동 창업자 · Partner', en: 'Co-founder & Partner' },
      },
    ],
    programs: [
      {
        title: { ko: 'Agri-Food Tech Accelerator (플래그십)', en: 'Agri-Food Tech Accelerator (flagship)' },
        body: {
          ko: '6개월 글로벌 프로그램 · Orange NSW 기반 · 호주·NZ·APAC 지속가능 농업·식품 스타트업 중심.',
          en: 'A 6-month global program based in Orange NSW, focused on sustainable agriculture and food startups from Australia, NZ, and APAC.',
        },
      },
      {
        title: { ko: 'CleanTech Accelerator (2023 출범)', en: 'CleanTech Accelerator (launched 2023)' },
        body: {
          ko: 'NSW 정부 Department of Climate Change, Energy, Environment and Water가 2년간 AUD 1.2M · 총 AUD 4M 지원. 누적 20+ 클린테크 스타트업 배출.',
          en: 'Backed by the NSW Department of Climate Change, Energy, Environment and Water with AUD 1.2M over two years (AUD 4M total). 20+ cleantech startups graduated.',
        },
      },
      {
        title: { ko: 'Cultiv8 Funds Management', en: 'Cultiv8 Funds Management' },
        body: {
          ko: '시드~Series B agri-food tech 전문 VC 펀드. 액셀러레이터 참여사를 후속 라운드로 연결.',
          en: 'A dedicated seed-to-Series B agri-food tech VC fund, channeling accelerator graduates into follow-on rounds.',
        },
      },
    ],
    portfolio: [
      {
        name: 'Dendra Systems',
        blurb: {
          ko: 'AI·드론 기반 생태 복원 및 재조림 플랫폼.',
          en: 'AI and drone-driven ecosystem restoration and reforestation platform.',
        },
        tag: { ko: 'ClimateTech', en: 'ClimateTech' },
      },
      {
        name: 'Aquabyte',
        blurb: {
          ko: '컴퓨터비전 기반 연어 양식 모니터링. 2025.12 엑싯.',
          en: 'Computer-vision salmon aquaculture monitoring. Exited in Dec 2025.',
        },
        tag: { ko: 'AgriTech · Exit', en: 'AgriTech · Exit' },
      },
      {
        name: 'InnerPlant',
        blurb: {
          ko: '작물 자체를 바이오센서화하는 식물 바이오테크.',
          en: 'Plant biotech that turns crops themselves into biosensors.',
        },
        tag: { ko: 'AgriTech · Biotech', en: 'AgriTech · Biotech' },
      },
      {
        name: 'Bovotica',
        blurb: {
          ko: '축우 메탄 80% 감소, 체중 증가 10%의 프로바이오틱 기술.',
          en: 'Probiotic cattle technology reducing methane by 80% and boosting weight gain by 10%.',
        },
        tag: { ko: 'Livestock', en: 'Livestock' },
      },
      {
        name: 'Levur',
        blurb: {
          ko: '효모 기반 지속가능 팜오일 대체재.',
          en: 'Yeast-based sustainable palm-oil alternative.',
        },
        tag: { ko: 'FoodTech', en: 'FoodTech' },
      },
    ],
    partners: {
      ko: 'NSW Department of Primary Industries(호스트), Meat & Livestock Australia (MLA), Grains Research & Development Corporation (GRDC), Cotton RDC, Agriculture Innovation Australia, Fisheries RDC, Hort Innovation, Science & Technology Australia.',
      en: 'NSW Department of Primary Industries (host), Meat & Livestock Australia (MLA), Grains Research & Development Corporation (GRDC), Cotton RDC, Agriculture Innovation Australia, Fisheries RDC, Hort Innovation, and Science & Technology Australia.',
    },
    milestones: [
      {
        date: '2017',
        title: { ko: 'SparkLabs Cultiv8 출범', en: 'SparkLabs Cultiv8 launched' },
      },
      {
        date: '2023',
        title: { ko: 'CleanTech Accelerator 첫 번째 배치', en: 'CleanTech Accelerator launches first cohort' },
      },
      {
        date: '2024',
        title: { ko: '연간 액셀러레이터 6회차 · 9개사 쇼케이스', en: 'Annual accelerator cohort 6 — 9 companies showcased' },
      },
      {
        date: '2025.12',
        title: { ko: 'Aquabyte 엑싯 (포트폴리오 2번째 엑싯)', en: 'Aquabyte exits — second portfolio exit' },
      },
    ],
    links: {
      website: 'https://www.sparklabscultiv8.com',
      linkedin: 'https://au.linkedin.com/company/sparklabs-cultiv8',
    },
  },

  biolabs: {
    slug: 'biolabs',
    story: {
      ko: 'SparkBioLabs(스파크바이오랩)는 2023년 스파크랩이 출범시킨 바이오·헬스케어 전담 액셀러레이터입니다. 상시 모집(rolling admissions) 방식으로 초기 바이오·헬스테크 스타트업을 발굴하며, 서울대학교병원(SNUH), 연세대학교(Biohealth Technology Holdings), 한국건강관리협회, 포항시와의 파트너십이 핵심 인프라입니다.\n\n2024년 4월 한국 최초 "건강검진 기관 운영 공유 실험실"인 MediOpenLab을 개소해 R&D 인프라 · 사업화 · 후속 투자 · 오픈 이노베이션을 한 공간에서 제공합니다. Partners Investment와 공동 MOU를 체결해 후속 투자 연계를 강화했습니다.',
      en: 'SparkBioLabs, launched by SparkLabs in 2023, is a bio and healthcare-dedicated accelerator operating on rolling admissions. Its backbone is a network of partnerships with Seoul National University Hospital (SNUH), Yonsei University (Biohealth Technology Holdings), the Korea Association of Health Promotion, and Pohang City.\n\nIn April 2024 it opened MediOpenLab — Korea\'s first shared laboratory operated by a health-screening institution — bringing R&D infrastructure, commercialization, follow-on capital, and open innovation under one roof. A joint MOU with Partners Investment reinforces the follow-on investment pipeline.',
    },
    stats: [
      { value: '2023', label: { ko: '출범', en: 'Launched' } },
      { value: '100+', label: { ko: 'MediOpenLab 수용 규모', en: 'MediOpenLab capacity' } },
      { value: '₩2B+', label: { ko: '연구 인프라 투자', en: 'R&D infrastructure invested' } },
    ],
    leaders: [],
    programs: [
      {
        title: { ko: 'MediOpenLab (2024.04 개소)', en: 'MediOpenLab (opened Apr 2024)' },
        body: {
          ko: '한국 최초 건강검진기관 운영 공유 실험실. 약 100명 수용 규모, 20억 원 상당 첨단 연구 인프라. 한국건강관리협회 운영 + 스파크바이오랩 액셀러레이팅 공동 모델.',
          en: "Korea's first shared laboratory operated by a health-screening institution. 100-person capacity with ~₩2B worth of advanced research infrastructure. The Korea Association of Health Promotion operates the space while SparkBioLabs runs the accelerator.",
        },
      },
      {
        title: { ko: 'Rolling Admissions 액셀러레이팅', en: 'Rolling-admissions acceleration' },
        body: {
          ko: '정해진 배치가 아닌 상시 모집 방식으로 초기 바이오·헬스테크 스타트업을 발굴. SNUH 바이오메디컬 연구소, 연세대 Biohealth Holdings와 공동 사업화 프로젝트 운영.',
          en: 'Bio and healthtech startups are admitted on a rolling basis — not in fixed cohorts. Joint commercialization projects run with the SNUH Biomedical Research Institute and Yonsei Biohealth Holdings.',
        },
      },
      {
        title: { ko: 'Partners Investment 공동 MOU', en: 'Joint MOU with Partners Investment' },
        body: {
          ko: '바이오헬스 초기 창업 공동 발굴·육성·후속 투자 연계를 위한 전략적 파트너십.',
          en: 'A strategic partnership for jointly sourcing, incubating, and funding early-stage bio-health startups.',
        },
      },
    ],
    portfolio: [
      {
        name: 'Genecast',
        blurb: {
          ko: '정밀의료 유전체 진단. MediOpenLab 입주.',
          en: 'Precision-medicine genomic diagnostics. Resident at MediOpenLab.',
        },
        tag: { ko: '정밀의료', en: 'Precision Medicine' },
      },
      {
        name: 'InnoGenix',
        blurb: {
          ko: '바이오테크. MediOpenLab 입주사.',
          en: 'Biotech company. Resident at MediOpenLab.',
        },
        tag: { ko: '바이오', en: 'Biotech' },
      },
      {
        name: 'Genoplan',
        blurb: {
          ko: '개인 유전체 기반 맞춤형 헬스 서비스. SparkLabs Korea 공동 포트폴리오.',
          en: 'Personalized genomics-based health services. Co-portfolio with SparkLabs Korea.',
        },
        tag: { ko: '바이오 · 헬스', en: 'Biotech · Health' },
      },
      {
        name: 'CurioChips',
        blurb: {
          ko: '바이오 디바이스. MediOpenLab 입주사.',
          en: 'Bio-device company. Resident at MediOpenLab.',
        },
        tag: { ko: '바이오 디바이스', en: 'Bio Devices' },
      },
    ],
    partners: {
      ko: '서울대학교병원 바이오메디컬 연구소(SNUH), 연세대학교 Biohealth Technology Holdings, 한국건강관리협회, 포항시, Partners Investment.',
      en: 'SNUH Biomedical Research Institute, Yonsei Biohealth Technology Holdings, Korea Association of Health Promotion, Pohang City, Partners Investment.',
    },
    milestones: [
      {
        date: '2023.07',
        title: { ko: 'SparkBioLabs 정식 출범', en: 'SparkBioLabs officially launched' },
      },
      {
        date: '2024.04',
        title: { ko: 'MediOpenLab 개소', en: 'MediOpenLab opened' },
      },
      {
        date: '2024.09',
        title: { ko: 'Yonsei Biohealth Tech Holdings MOU', en: 'MOU with Yonsei Biohealth Tech Holdings' },
      },
      {
        date: '2024.10',
        title: { ko: 'SNU 바이오메디컬 연구소 MOU', en: 'MOU with SNU Biomedical Research Institute' },
      },
    ],
    links: {
      website: 'https://www.sparkbiolabs.com',
      press: 'https://www.sparkbiolabs.com/en/in-the-press',
    },
  },

  partners: {
    slug: 'partners',
    story: {
      ko: 'SparkLabs Partners(스파크랩파트너스)는 김호민 대표가 이끄는 스파크랩 그룹 내 VC 법인으로, 서울 수도권을 넘어 포항·경북 지역 거점 확장을 주도합니다. 2025년 9월 한동대학교 캠퍼스 내 경상북도 지사를 개소하며 포항 AI·바이오 생태계 구축을 본격화했습니다.\n\n한동대 · 포항테크노파크 · 포항연합기술지주와 다자 MOU를 통해 지역 창업 생태계 활성화와 AI·바이오 중심 지역 거점 투자를 실행합니다. Partnership Program을 통해 지자체·산업계와의 연계 프로그램도 독자적으로 운영합니다.',
      en: 'SparkLabs Partners is the SparkLabs Group venture capital arm led by CEO Jimmy Kim, driving regional expansion beyond the Seoul capital region into Pohang and the Gyeongbuk province. In September 2025, it opened its Gyeongsangbuk-do branch on the Handong Global University campus, kicking off the Pohang AI and bio ecosystem initiative.\n\nMulti-party MOUs with Handong, Pohang TechnoPark, and Pohang United Technology Holdings anchor its regional strategy — activating the local startup ecosystem and investing in AI and bio hubs outside the capital. A dedicated Partnership Program delivers customized co-operating programs with local governments and industry.',
    },
    stats: [
      { value: '2025.09', label: { ko: '경상북도 지사 개소', en: 'Gyeongbuk branch opened' } },
      { value: 'AI · Bio', label: { ko: '집중 영역', en: 'Focus verticals' } },
    ],
    leaders: [
      {
        name: 'Jimmy Kim',
        role: { ko: '대표이사', en: 'CEO' },
        bio: {
          ko: 'SparkLabs 공동 창업자. Partners를 통해 포항·경북 지역 거점 투자와 Partnership Program을 직접 리드.',
          en: 'SparkLabs co-founder. Directly leads the Pohang/Gyeongbuk regional investment strategy and the Partnership Program through SparkLabs Partners.',
        },
      },
    ],
    programs: [
      {
        title: { ko: '경상북도 지사 (한동대 캠퍼스)', en: 'Gyeongbuk Branch (Handong GU campus)' },
        body: {
          ko: '2025.09 개소한 지역 거점. 한동대 · 포항TP와의 연계로 지역 창업가 발굴·멘토링·투자를 일원화.',
          en: 'Regional hub opened Sep 2025. In partnership with Handong Global University and Pohang TechnoPark, it centralizes local founder sourcing, mentoring, and investment.',
        },
      },
      {
        title: { ko: 'Partnership Program', en: 'Partnership Program' },
        body: {
          ko: '지자체 · 산업계 · 대학과의 맞춤형 코퍼레이트 이노베이션 프로그램. 오픈 이노베이션 · 글로벌 진출 설계.',
          en: 'Custom corporate-innovation programs with municipalities, industry, and universities — designed around open innovation and global expansion.',
        },
      },
      {
        title: { ko: '포항연합기술지주 MOU', en: 'Pohang United Technology Holdings MOU' },
        body: {
          ko: '2025.11 업무협약으로 경북 창업·투자 생태계 조성 가속. 지역 대학 기술지주와 공동 투자·육성 채널 구축.',
          en: 'A Nov 2025 MOU accelerating the Gyeongbuk startup and investment ecosystem through joint investment and incubation channels with regional university tech-holdings.',
        },
      },
    ],
    partners: {
      ko: '한동대학교, 포항테크노파크, 포항연합기술지주, SparkLabs Group.',
      en: 'Handong Global University, Pohang TechnoPark, Pohang United Technology Holdings, SparkLabs Group.',
    },
    milestones: [
      {
        date: '2025.09',
        title: {
          ko: '한동대 캠퍼스 내 경상북도 지사 개소',
          en: 'Gyeongbuk branch opened at Handong Global University campus',
        },
      },
      {
        date: '2025.11',
        title: {
          ko: '포항연합기술지주 업무협약 체결',
          en: 'MOU signed with Pohang United Technology Holdings',
        },
      },
    ],
    links: {
      website: 'https://partners.sparklabs.co.kr',
    },
  },
};

export function getEntityDetail(slug: string): EntityDetail | undefined {
  return entityDetails[slug];
}
