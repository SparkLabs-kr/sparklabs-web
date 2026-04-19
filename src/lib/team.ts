/**
 * SparkLabs 리더십 · 어드바이저 · LP 데이터.
 * Team 및 About 페이지의 source of truth.
 */

export interface TeamMember {
  slug: string;
  name: string;
  title: { ko: string; en: string };
  entity: string; // entity slug or 'group'
  bio: { ko: string; en: string };
  linkedinUrl?: string;
}

export interface Advisor {
  name: string;
  role: { ko: string; en: string };
  affiliation: string; // e.g. 'SparkLabs Korea', 'SparkLabs Group'
}

export const coFounders: TeamMember[] = [
  {
    slug: 'jimmy-kim',
    name: 'Jimmy Kim',
    title: {
      ko: 'Co-founder & Partner, SparkLabs Korea',
      en: 'Co-founder & Partner, SparkLabs Korea',
    },
    entity: 'korea',
    bio: {
      ko: '넥슨 초대 CFO로 넥슨의 일본 상장을 주도하고, 넥소노바·Studio Ex (디즈니 인수) 창업. 스파크랩 공동 창업 후 대한민국 대표 액셀러레이터로 성장시켰다.',
      en: 'Launched Nexon\'s IPO in Tokyo as its first CFO. Founded Nexonova and Studio Ex (acquired by Disney). Co-founded SparkLabs and grew it into Korea\'s flagship accelerator.',
    },
  },
  {
    slug: 'hanjoo-lee',
    name: 'HanJoo Lee',
    title: {
      ko: 'Co-founder & Partner, SparkLabs Group',
      en: 'Co-founder & Partner, SparkLabs Group',
    },
    entity: 'group',
    bio: {
      ko: 'Hostway 공동 창업자 및 베스핀글로벌 공동 창업자·회장. 스파크랩 글로벌 네트워크 확장을 이끌고 있다.',
      en: 'Co-founder of Hostway and Co-founder & Chairman of Bespin Global. Leads SparkLabs\' global network expansion.',
    },
  },
  {
    slug: 'bernard-moon',
    name: 'Bernard Moon',
    title: {
      ko: 'Co-founder & Partner, SparkLabs Group',
      en: 'Co-founder & Partner, SparkLabs Group',
    },
    entity: 'group',
    bio: {
      ko: 'Vidquik CEO, Lunsford Group, iRG를 거친 연쇄 창업가. VentureBeat·Mashable·TechCrunch·ReadWrite 기고가로 글로벌 테크 생태계에 영향력을 행사해 왔다.',
      en: 'Serial entrepreneur (CEO at Vidquik, Lunsford Group, iRG). Regular contributor to VentureBeat, Mashable, TechCrunch, and ReadWrite.',
    },
  },
  {
    slug: 'eugene-kim',
    name: 'Eugene Kim',
    title: {
      ko: 'Partner, SparkLabs Korea',
      en: 'Partner, SparkLabs Korea',
    },
    entity: 'korea',
    bio: {
      ko: '텐센트 코리아 BD 디렉터 출신으로 스파크랩 코리아의 액셀러레이터 프로그램을 이끈다. 포도트리·Vertigo Games·NHN USA 경력.',
      en: 'Leads SparkLabs Korea\'s accelerator program. Former BD Director at Tencent Korea, with experience at Podotree, Vertigo Games, and NHN USA.',
    },
  },
  {
    slug: 'john-park',
    name: 'John Park',
    title: {
      ko: 'Partner, SparkLabs Korea',
      en: 'Partner, SparkLabs Korea',
    },
    entity: 'korea',
    bio: {
      ko: '스파크랩 코리아 파트너. 포트폴리오사의 후속 투자·글로벌 확장을 담당하며, 심사·멘토링·파트너십 트랙을 이끈다.',
      en: 'Partner at SparkLabs Korea. Drives follow-on investments and global expansion for portfolio companies across the investment, mentorship, and partnership tracks.',
    },
  },
];

export const entityPartners: TeamMember[] = [
  {
    slug: 'edgar-chiu',
    name: 'Edgar Chiu',
    title: {
      ko: 'Managing Partner, SparkLabs Taipei',
      en: 'Managing Partner, SparkLabs Taipei',
    },
    entity: 'taipei',
    bio: {
      ko: '대만 스타트업 생태계 베테랑. 스파크랩 타이베이를 이끌며 대만 혁신 기업을 글로벌 시장과 연결.',
      en: 'Veteran of Taiwan\'s startup ecosystem. Leads SparkLabs Taipei, bridging Taiwanese innovators to global markets.',
    },
  },
  {
    slug: 'ivan-grlic',
    name: 'Ivan Grlic',
    title: {
      ko: 'Co-founder & Managing Partner, SparkLabs Saudi Arabia',
      en: 'Co-founder & Managing Partner, SparkLabs Saudi Arabia',
    },
    entity: 'saudi-arabia',
    bio: {
      ko: 'MENA 지역 투자·창업 네트워크를 기반으로 스파크랩 사우디아라비아를 공동 창업. 사우디 Vision 2030 연계 혁신 가속을 담당.',
      en: 'Co-founded SparkLabs Saudi Arabia, leveraging a deep MENA investment network. Drives innovation acceleration aligned with Saudi Vision 2030.',
    },
  },
  {
    slug: 'bodin-scepanovic',
    name: 'Bodin Scepanovic',
    title: {
      ko: 'Partner, SparkLabs Saudi Arabia',
      en: 'Partner, SparkLabs Saudi Arabia',
    },
    entity: 'saudi-arabia',
    bio: {
      ko: '스파크랩 사우디의 MCIT·정부 파트너십을 주도. Tech Founders in Korea 2025 프로그램을 공동 기획.',
      en: 'Leads SparkLabs Saudi\'s MCIT and government partnerships. Co-architect of the Tech Founders in Korea 2025 program.',
    },
  },
  {
    slug: 'malcom-nutt',
    name: 'Malcom Nutt',
    title: {
      ko: 'Partner, SparkLabs Cultiv8',
      en: 'Partner, SparkLabs Cultiv8',
    },
    entity: 'cultiv8',
    bio: {
      ko: 'Agrifood·지속가능성 투자 전문가. 스파크랩 컬티베이트를 통해 호주·뉴질랜드 혁신 기업을 발굴.',
      en: 'Agrifood & sustainability investor. Sources and scales ANZ innovators through SparkLabs Cultiv8.',
    },
  },
  {
    slug: 'jonathon-quigley',
    name: 'Jonathon Quigley',
    title: {
      ko: 'Partner, SparkLabs Cultiv8',
      en: 'Partner, SparkLabs Cultiv8',
    },
    entity: 'cultiv8',
    bio: {
      ko: '호주 스타트업·혁신 생태계의 중진. 스파크랩 컬티베이트 운영 파트너로 agrifood 딜을 이끈다.',
      en: 'Senior figure in Australia\'s startup ecosystem. Operating partner at SparkLabs Cultiv8 leading agrifood deals.',
    },
  },
];

/**
 * 대표 어드바이저 셀렉션 — 전체 150+ 중 브랜드·네트워크 대표성을 갖는 인물 중심.
 * Full list는 향후 별도 페이지로 확장.
 */
export const featuredAdvisors: Advisor[] = [
  {
    name: 'Vint Cerf',
    role: { ko: 'VP & Chief Internet Evangelist, Google', en: 'VP & Chief Internet Evangelist, Google' },
    affiliation: 'SparkLabs Korea',
  },
  {
    name: 'Mark Cuban',
    role: { ko: 'Owner, Dallas Mavericks', en: 'Owner, Dallas Mavericks' },
    affiliation: 'SparkLabs Korea',
  },
  {
    name: 'Ray Ozzie',
    role: { ko: 'Creator of Lotus Notes', en: 'Creator of Lotus Notes' },
    affiliation: 'SparkLabs Korea',
  },
  {
    name: 'Xavier Niel',
    role: { ko: 'Founder, Iliad · Co-owner, Le Monde', en: 'Founder of Iliad · Co-owner of Le Monde' },
    affiliation: 'SparkLabs Group',
  },
  {
    name: 'Jessica Jackley',
    role: { ko: 'Co-founder, Kiva', en: 'Co-founder of Kiva' },
    affiliation: 'SparkLabs Group',
  },
  {
    name: 'Jim McKelvey',
    role: { ko: 'Co-founder, Square', en: 'Co-founder of Square' },
    affiliation: 'SparkLabs FinTech',
  },
  {
    name: 'Wu Choy Peng',
    role: { ko: 'CTO, GIC', en: 'CTO at GIC' },
    affiliation: 'SparkLabs Group',
  },
  {
    name: 'Youngcho Chi',
    role: {
      ko: 'President & Chief Innovation Officer, Hyundai Motor Group',
      en: 'President & Chief Innovation Officer, Hyundai Motor Group',
    },
    affiliation: 'SparkLabs Group',
  },
  {
    name: 'Lily Cheng',
    role: {
      ko: 'CVP & Distinguished Engineer, Microsoft',
      en: 'CVP & Distinguished Engineer, Microsoft',
    },
    affiliation: 'SparkLabs Korea',
  },
  {
    name: 'Michael Crow',
    role: { ko: 'President, Arizona State University', en: 'President, Arizona State University' },
    affiliation: 'SparkLabs Korea',
  },
  {
    name: 'Lars Peter Hansen',
    role: {
      ko: 'David Rockefeller Distinguished Professor, U. Chicago',
      en: 'David Rockefeller Distinguished Professor, University of Chicago',
    },
    affiliation: 'SparkLabs Group',
  },
  {
    name: 'Amr Awadallah',
    role: { ko: 'CEO, Vectara', en: 'CEO, Vectara' },
    affiliation: 'SparkLabs Saudi Arabia',
  },
  {
    name: 'Tom Peters',
    role: {
      ko: '경영 구루 · 『초우량 기업의 조건』 저자',
      en: 'Business thought leader · Author of "In Search of Excellence"',
    },
    affiliation: 'SparkLabs Korea',
  },
];
