/**
 * SparkLabs 리더십 · 어드바이저 · 팀 데이터.
 * Team · Advisors 페이지의 source of truth.
 */

export interface TeamMember {
  slug: string;
  name: string; // English name
  koName?: string; // Korean name (optional for non-Korean partners)
  title: { ko: string; en: string };
  entity: string; // entity slug or 'group'
  bio?: { ko: string; en: string }; // Partners have bios; team members often don't
  linkedinUrl?: string;
}

export interface Advisor {
  name: string;
  koName?: string;
  role: { ko: string; en: string };
  affiliation: string; // e.g. 'SparkLabs Korea', 'SparkLabs Group'
  bio?: { ko: string; en: string };
  photo?: string; // relative path under /public (e.g. /team/advisors/slug.jpg)
}

export interface TeamDivision {
  slug: string;
  title: { ko: string; en: string };
  members: TeamMember[];
}

// ---------------------------------------------------------------------------
// Co-founders & Partners (5)
// ---------------------------------------------------------------------------
export const coFounders: TeamMember[] = [
  {
    slug: 'jimmy-kim',
    name: 'Jimmy Kim',
    koName: '김호민',
    title: {
      ko: '공동설립자 & 제너럴 파트너, SparkLabs Korea',
      en: 'Co-founder & General Partner, SparkLabs Korea',
    },
    entity: 'korea',
    bio: {
      ko: '넥슨 초대 CFO로 넥슨의 일본 상장을 주도하고, 넥소노바·Studio Ex (디즈니 인수) 창업. 스파크랩 공동 창업 후 대한민국 대표 액셀러레이터로 성장시켰다.',
      en: 'Launched Nexon\'s IPO in Tokyo as its first CFO. Founded Nexonova and Studio Ex (acquired by Disney). Co-founded SparkLabs and grew it into Korea\'s flagship accelerator.',
    },
  },
  {
    slug: 'hanjoo-lee',
    name: 'John HanJoo Lee',
    koName: '이한주',
    title: {
      ko: '공동설립자 & 제너럴 파트너, SparkLabs Group',
      en: 'Co-founder & General Partner, SparkLabs Group',
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
    koName: '버나드 문',
    title: {
      ko: '공동설립자 & 제너럴 파트너, SparkLabs Group',
      en: 'Co-founder & General Partner, SparkLabs Group',
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
    koName: '김유진',
    title: {
      ko: '제너럴 파트너, SparkLabs Korea',
      en: 'General Partner, SparkLabs Korea',
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
    koName: '박태순',
    title: {
      ko: '파트너, SparkLabs Korea',
      en: 'Partner, SparkLabs Korea',
    },
    entity: 'korea',
    bio: {
      ko: '스파크랩 코리아 파트너. 포트폴리오사의 후속 투자·글로벌 확장을 담당하며, 심사·멘토링·파트너십 트랙을 이끈다.',
      en: 'Partner at SparkLabs Korea. Drives follow-on investments and global expansion for portfolio companies across the investment, mentorship, and partnership tracks.',
    },
  },
];

// ---------------------------------------------------------------------------
// Entity (Regional) Partners (5)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Venture Partners (7) — SparkLabs Korea
// ---------------------------------------------------------------------------
export const venturePartners: TeamMember[] = [
  {
    slug: 'chan-ho-park',
    name: 'Chan Ho Park',
    koName: '박찬호',
    title: { ko: '벤처 파트너', en: 'Venture Partner' },
    entity: 'korea',
    bio: {
      ko: '한국 최초 메이저리거. LA 다저스 입단 후 메이저리그 통산 124승을 기록한 한국야구의 글로벌 아이콘. 1997년부터 박찬호 장학재단을 운영하며 유소년 육성에 힘써왔고, 글로벌 진출을 목표로 하는 스타트업을 지원하기 위해 스파크랩 벤처 파트너로 합류했다.',
      en: 'Korea\'s first Major League Baseball player with 124 career MLB wins — the Asian record. Runs the Chan Ho Park Foundation for youth baseball. Joined SparkLabs as a Venture Partner to help Korean startups make the leap into global markets.',
    },
  },
  {
    slug: 'michael-cho',
    name: 'Michael Cho',
    koName: '조민식',
    title: { ko: '벤처 파트너', en: 'Venture Partner' },
    entity: 'korea',
    bio: {
      ko: '베스핀글로벌 한국 총괄 대표. KPMG Korea 창업 멤버로 22년간 대한민국 최고의 M&A 하우스로 성장시키는 데 핵심 역할을 했고, KPMG China 한국 책임자로서 헬스케어 분야 중심의 중국 진출도 이끌었다. 카카오 사외이사·감사위원장, 기획재정부 혁신성장본부 자문위원 등을 역임하며 6년간 1,500개가 넘는 스타트업을 멘토링해 왔다.',
      en: 'Korea Country Head at Bespin Global. Founding member of KPMG Korea, where he played a key role for 22 years in building the country\'s leading M&A advisory house, and led KPMG China\'s Korea desk with a healthcare focus. Former Independent Director & Head of Audit at Kakao and advisor to Korea\'s Ministry of Economy. Has mentored 1,500+ startups over six years as an active angel investor.',
    },
  },
  {
    slug: 'byung-joon-choi',
    name: 'Byung Joon Choi',
    koName: '최병준',
    title: { ko: '벤처 파트너', en: 'Venture Partner' },
    entity: 'korea',
    bio: {
      ko: 'Dialoguespace 대표이사로 KT와 공동 사업을 통해 KB국민은행·삼성카드 등 15만여 금융·법인 고객에 대용량 메시징 서비스를 제공하고 있다. 이전에는 P2P 기반 음악 공유 서비스 소리바다 개발본부장으로 Audio Fingerprinting 기반 필터링 시스템을 개발하고 Sony BMG·Universal·EMI·Warner 등 세계 4대 음반사와 음원 연동을 이끌었다.',
      en: 'CEO of Dialoguespace, which serves 150,000+ corporate clients (KB Kookmin Bank, Samsung Card, Hana Card and more) with high-volume messaging infrastructure in partnership with KT. Previously Head of Engineering at Soribada — "Korea\'s Napster" — where he built the audio-fingerprinting filtering system and landed catalog deals with Sony BMG, Universal, EMI and Warner.',
    },
  },
  {
    slug: 'daniel-kim',
    name: 'Daniel Kim',
    koName: '다니엘 김',
    title: { ko: '벤처 파트너', en: 'Venture Partner' },
    entity: 'korea',
    bio: {
      ko: 'Meta 엔지니어링 디렉터. 2007년 약 200번째로 입사한 최장기 근속자 중 한 명으로, 가장 최근에는 NPE(New Product Experimentation) Korea 리드를 맡았다. Instagram Growth 엔지니어링 팀을 창설해 사용자를 1억 7,000만에서 11억 명으로 키웠고, Oculus에서 Quest 헤드셋의 Horizon Home·Guardian 팀을 이끌었다. Facebook 모바일 전환과 Growth 팀 창립 멤버.',
      en: 'Engineering Director at Meta. Joined Facebook in 2007 as roughly the 200th employee; still one of the company\'s longest-tenured engineers. Most recently led NPE Korea, Meta\'s in-house incubator. Founded and led Instagram\'s Growth engineering team that took the product from 170M to 1.1B users, and led engineering for Oculus Quest\'s Horizon Home, Guardian, and Notifications. Founding member of Facebook\'s mobile and Growth teams.',
    },
  },
  {
    slug: 'kyum-kim',
    name: 'Kyum Kim',
    koName: '김성겸',
    title: { ko: '벤처 파트너', en: 'Venture Partner' },
    entity: 'korea',
    bio: {
      ko: '블라인드(Blind) 공동창업자 겸 前 CBO. 미국 시장 진출을 이끌어 페이스북·구글·마이크로소프트 직원 커뮤니티로 자리 잡게 했으며, 블라인드는 Time지 "세계에서 가장 영향력 있는 100대 기업"에 선정됐다. 티몬 세일즈 디렉터로 200명 규모 팀을 총괄한 경험이 있고, 현재 타입캐스트·오늘의집(버킷플레이스)·라이너의 고문으로 한국 스타트업의 글로벌 진출을 돕고 있다.',
      en: 'Co-founder and former CBO of Blind, where he led the company\'s expansion into the US and established its foothold with engineers at Facebook, Google and Microsoft — earning Blind a spot on TIME\'s 100 Most Influential Companies. Former Sales Director at TMON overseeing a 200-person team. Currently advising Typecast, OHouse (Bucketplace) and Liner on international growth.',
    },
  },
  {
    slug: 'sam-sung',
    name: 'Sam Sung',
    title: { ko: '벤처 파트너', en: 'Venture Partner' },
    entity: 'korea',
    bio: {
      ko: 'AI 기반 10배 성장을 지원하는 AI Fluent 공동창업자 겸 CEO. Confirm.io에서 Director of Product로 Meta(Facebook) 인수를 이끌었고, IDEMIA에서 미국·프랑스·폴란드 50명 규모 글로벌 팀을 지휘하며 머신러닝 기반 신원확인 플랫폼을 개발했다. Neo.Tax의 첫 프로덕트 리드로 Series A 1,000만 달러 유치를 이끌었고, TripAdvisor 모바일팀에서 2.7억 사용자 규모 기능을 출시한 바 있다. 미 해병대 군수 장교로 복무. 성균관대 MBA 겸임강사.',
      en: 'Co-founder & CEO of AI Fluent, which drives 10x growth through AI transformation. Previously led product at Confirm.io through its acquisition by Meta, managed a 50+ person global team at IDEMIA across the US/France/Poland building ML-based identity verification, and was the first Product Lead at Neo.Tax — raising a $10M Series A. Shipped features reaching 270M+ users at TripAdvisor. Former US Marine Corps Logistics Officer deployed to southern Afghanistan. Adjunct lecturer in entrepreneurship and AI at Sungkyunkwan MBA.',
    },
  },
  {
    slug: 'jay-jinkun-mok',
    name: 'Jay Jinkun Mok',
    koName: '목진건',
    title: { ko: '벤처 파트너', en: 'Venture Partner' },
    entity: 'korea',
    bio: {
      ko: '스파크랩의 첫 컴퍼니 빌딩 프로젝트인 스파크플러스(SPARKPLUS) 창업 CEO. 공유오피스 사업을 5년 만에 연 매출 750억 원 규모의 국내 선도 운영사로 키워 800억 원 투자유치와 대기업 지분 매각을 성공시켰다. 前 Monitor Deloitte 서울 오피스 전략컨설턴트, GS홈쇼핑 M&A 팀 출신이며, WePlanet 공동창업자로 스파크랩 1기 배치에 참여했다.',
      en: 'Founding CEO of SparkPlus, SparkLabs\' first company-building project, which he scaled to ₩75B in annual revenue as Korea\'s leading coworking operator within five years — culminating in an ₩80B funding round and a strategic sale to a major Korean conglomerate. Former strategy consultant at Monitor Deloitte Seoul and the GS Home Shopping M&A team. Co-founded WePlanet, which went through SparkLabs\' very first batch.',
    },
  },
];

// ---------------------------------------------------------------------------
// Full Team by Division (25 people, SparkLabs Korea organization)
// ---------------------------------------------------------------------------
export const teamByDivision: TeamDivision[] = [
  {
    slug: 'management-advisor',
    title: { ko: 'Management Advisor', en: 'Management Advisor' },
    members: [
      {
        slug: 'seoko-han',
        name: 'Seoko Han',
        koName: '한석오',
        title: { ko: '전무, Management Advisor', en: 'Managing Director, Management Advisor' },
        entity: 'korea',
        bio: {
          ko: '스파크랩그룹의 대외협력 부문을 총괄한다. 법무법인 대해아주 총무부장, ㈜케이아나라와 ㈜이노티브 법무·관리 본부장, ㈜랜엔드에스사이언트 대표이사를 역임했다.',
          en: 'Heads external affairs across the SparkLabs group. Previously General Affairs Chief at Daehae Aju Law Firm, Head of Legal & Admin at Kianara and Innotive, and CEO of Lane&S Sciient.',
        },
      },
      {
        slug: 'yoobeen-park',
        name: 'Yoo Been Park',
        koName: '박유빈',
        title: { ko: '감사, Auditor', en: 'Auditor' },
        entity: 'korea',
        bio: {
          ko: '스파크랩의 감사 업무를 담당한다. KB 국민은행 지점장 출신.',
          en: 'Serves as auditor at SparkLabs. Former Branch Manager at KB Kookmin Bank.',
        },
      },
    ],
  },
  {
    slug: 'accelerator',
    title: { ko: 'Accelerator Division', en: 'Accelerator Division' },
    members: [
      {
        slug: 'seongjin-hong',
        name: 'Seong Jin Hong',
        koName: '홍성진',
        title: { ko: '전무, Accelerator Division', en: 'Managing Director, Accelerator Division' },
        entity: 'korea',
        bio: {
          ko: '정부기관 연계 스타트업 육성 프로그램과 기업 오픈이노베이션 프로그램 운영을 총괄한다. 라쿨드아크 액셀러레이팅 총괄, 무선블루·버티고게임즈·오토로로코리아·삼보컴퓨터를 거쳤다.',
          en: 'Heads government-linked startup acceleration programs and corporate open-innovation engagements. Previously led acceleration at La Cold Ark, and held roles at Musunblue, Vertigo Games, Otoro Korea and Sambo Computer.',
        },
      },
    ],
  },
  {
    slug: 'batch',
    title: { ko: 'Batch Team', en: 'Batch Team' },
    members: [
      {
        slug: 'christina-min',
        name: 'Christina Min',
        koName: '민승기',
        title: { ko: '상무, Batch Team', en: 'Executive Director, Batch Team' },
        entity: 'korea',
        bio: {
          ko: '초기 단계 스타트업을 발굴하고, 자금·멘토링·네트워킹·교육과 데모데이 무대를 포함한 이니셔티브 전반을 이끈다. 前 Square Chief Product Officer이자 월드뷰·입구정한의원 창업자로, 뉴욕대 치과대학(DDS)과 존스홉킨스(Public Health) 학위를 가지고 있다.',
          en: 'Leads end-to-end batch programming — sourcing early-stage founders and delivering capital, mentorship, networking, curriculum and the demo-day stage. Former Chief Product Officer at Square and founder of Worldview and Ipgujeong Dental Clinic. DDS from NYU College of Dentistry; BA in Public Health from Johns Hopkins.',
        },
      },
      {
        slug: 'sarah-chang',
        name: 'Sarah Chang',
        koName: '장민영',
        title: { ko: '팀장, Batch Team', en: 'Team Lead, Batch Team' },
        entity: 'korea',
        bio: {
          ko: '스파크랩 배치팀의 액셀러레이팅 프로그램을 운영하며 선발부터 데모데이까지 전 과정을 지원한다.',
          en: 'Runs the SparkLabs batch acceleration program end-to-end — from founder selection through demo day.',
        },
      },
      {
        slug: 'heeju-lee',
        name: 'Heeju Lee',
        koName: '이희주',
        title: { ko: '매니저, Batch Team', en: 'Manager, Batch Team' },
        entity: 'korea',
        bio: {
          ko: '스파크랩 배치팀의 액셀러레이팅 프로그램을 운영하며 선발부터 데모데이까지 과정을 지원한다. ㈜베이캠스 프로젝트 매니저와 스파크플러스 커뮤니티 매니저를 거쳤다.',
          en: 'Supports the SparkLabs batch program from founder selection to demo day. Previously Project Manager at Baycams and Community Manager at SparkPlus.',
        },
      },
    ],
  },
  {
    slug: 'innovation',
    title: { ko: 'Innovation Team', en: 'Innovation Team' },
    members: [
      {
        slug: 'eungyeong-song',
        name: 'EunGyeong Song',
        koName: '송은경',
        title: { ko: '상무, Innovation Team', en: 'Executive Director, Innovation Team' },
        entity: 'korea',
        bio: {
          ko: '스타트업 생태계 프로그램을 기획해 이해관계자와 창업가를 연결하며 포트폴리오 성장을 돕는다. 前 베이븐스 대표, 스파크플러스·한국여성경제인협회 경력.',
          en: 'Designs ecosystem programs that connect founders with stakeholders and accelerate portfolio growth. Former CEO of Bebbens; prior roles at SparkPlus and the Korea Women Entrepreneurs Association.',
        },
      },
      {
        slug: 'seungwon-park',
        name: 'Seung Won Park',
        koName: '박승원',
        title: { ko: '팀장, Innovation Team', en: 'Team Lead, Innovation Team' },
        entity: 'korea',
        bio: {
          ko: '정부지원 사업과 이노베이션 사업을 통해 스타트업을 발굴하고 액셀러레이팅 프로그램을 기획·운영한다. 前 상록대학교 산학협력단 현업매니저, 서울지역 창업보육매니저협의회 사무국장.',
          en: 'Sources startups and builds acceleration programs through government- and corporate-funded innovation initiatives. Previously at Sangrok University\'s Industry-Academic Cooperation Foundation and Secretary General of the Seoul Incubator Managers Council.',
        },
      },
      {
        slug: 'yejin-sim',
        name: 'Ye Jin Sim',
        koName: '심예진',
        title: { ko: '선임매니저, Innovation Team', en: 'Senior Manager, Innovation Team' },
        entity: 'korea',
        bio: {
          ko: '초기 스타트업을 발굴하고 성장을 지원하는 이노베이션 프로그램을 기획·운영한다. 前 쎄엔티파크(주) 팀장, (사)한국여성벤처협회 주임.',
          en: 'Builds and runs innovation programs that discover and scale early-stage startups. Previously Team Lead at Senty Park and at the Korea Women-Owned Business Association.',
        },
      },
      {
        slug: 'yejin-kwon',
        name: 'YeJin Kwon',
        koName: '권예진',
        title: { ko: '매니저, Innovation Team', en: 'Manager, Innovation Team' },
        entity: 'korea',
        bio: {
          ko: 'Early-stage 스타트업을 발굴하고 정부·기관 사업 및 이노베이션 액셀러레이팅 프로그램을 기획·운영한다. 前 블루포인트 이노베이션팀 RA, 아산나눔재단 영세계업 인턴.',
          en: 'Sources early-stage startups and runs government, institutional and innovation acceleration programs. Previously Research Associate at Bluepoint\'s Innovation Team and an intern at the Asan Nanum Foundation.',
        },
      },
      {
        slug: 'yoon-bae',
        name: 'Yoon Bae',
        koName: '배윤',
        title: { ko: '매니저, Innovation Team', en: 'Manager, Innovation Team' },
        entity: 'korea',
        bio: {
          ko: '글로벌 스타트업 성장을 지원하는 액셀러레이팅 프로그램을 기획·운영한다. 前 한불상공회의소 세일즈 어시스턴트 인턴.',
          en: 'Designs and operates acceleration programs that help global startups scale. Previously a Sales Assistant intern at the Korea-France Chamber of Commerce.',
        },
      },
      {
        slug: 'jaeyoung-jeong',
        name: 'Jaeyoung Jeong',
        koName: '정재영',
        title: { ko: '매니저, Innovation Team', en: 'Manager, Innovation Team' },
        entity: 'korea',
        bio: {
          ko: '동남권 창업 생태계 활성화를 위해 지역 창업자 대상 사업을 기획·운영한다. 前 ㈜자스, 경남대학교와 부경대학교 창업지원단 경력.',
          en: 'Plans and runs regional programs activating the startup ecosystem across southeastern Korea. Previously at Jas Corp. and the startup support offices of Kyungnam and Pukyong National universities.',
        },
      },
      {
        slug: 'seoeun-lee',
        name: 'Seoeun Lee',
        koName: '이서은',
        title: { ko: '매니저, Innovation Team', en: 'Manager, Innovation Team' },
        entity: 'korea',
        bio: {
          ko: '스파크랩 액셀러레이터본부 이노베이션팀에서 글로벌 액셀러레이팅 프로그램을 담당한다. 前 ㈜오픈뉴 투자사업부 매니저, 스타트업얼라이언스 매니저.',
          en: 'Runs SparkLabs\' global acceleration programs inside the Innovation Team. Former Investment Manager at OpenNu and Manager at Startup Alliance.',
        },
      },
    ],
  },
  {
    slug: 'vc-1',
    title: { ko: 'Venture Capital Division 1', en: 'Venture Capital Division 1' },
    members: [
      {
        slug: 'heeyoon-lee',
        name: 'Hee Yoon Lee',
        koName: '이희윤',
        title: { ko: '상무, VC Division 1', en: 'Executive Director, VC Division 1' },
        entity: 'korea',
        bio: {
          ko: '스파크랩의 투자 업무를 총괄한다. 前 SparkPlus 커뮤니티 리드매니저, 아산나눔재단 MARU180 및 엔젤투자기금 매니저. 고려대학교 사회학·경영학 학사.',
          en: 'Heads SparkLabs Korea\'s investment function. Previously Lead Community Manager at SparkPlus, and Manager at MARU180 / the Angel Investment Fund under the Asan Nanum Foundation. BA in Sociology & Business from Korea University.',
        },
      },
      {
        slug: 'hajin-lee',
        name: 'Hajin Lee',
        koName: '이하진',
        title: { ko: '매니저, VC Division 1', en: 'Manager, VC Division 1' },
        entity: 'korea',
        bio: {
          ko: '스파크랩 펀드와 개인투자조합 관리에 필요한 전반적인 업무를 담당한다. 前 유진마그룹코리아 LP본부(펀드 관리).',
          en: 'Handles end-to-end operations for SparkLabs\' funds and private investment vehicles. Previously in the LP/fund administration team at Eugene Ma Group Korea.',
        },
      },
      {
        slug: 'anthony-rhim',
        name: 'Anthony Rhim',
        koName: '임해룡',
        title: { ko: '심사역, VC Division 1', en: 'Investment Associate, VC Division 1' },
        entity: 'korea',
        bio: {
          ko: '스파크랩 포트폴리오를 발굴하는 투자심사 업무를 담당한다. 前 라구나인베스트먼트·트랜스링크 인베스트먼트 투자심사.',
          en: 'Sources and evaluates SparkLabs deals as part of the investment committee. Previously in deal teams at Laguna Investment and TransLink Capital.',
        },
      },
      {
        slug: 'junhaeng-lee',
        name: 'Jun Haeng Lee',
        koName: '이준행',
        title: { ko: '심사역, VC Division 1', en: 'Investment Associate, VC Division 1' },
        entity: 'korea',
        bio: {
          ko: '스타트업의 시작부터 도약까지 함께 고민하는 페이스메이커. 투자 검토와 포트폴리오 관리, 조합 정산 업무를 담당한다. 前 경기콘텐츠진흥원 매니저.',
          en: 'A pace-maker for founders from day one to breakout. Handles deal screening, portfolio management and fund settlement. Previously Manager at Gyeonggi Content Agency.',
        },
      },
      {
        slug: 'hansun-son',
        name: 'Hansun Son',
        koName: '손한선',
        title: { ko: '심사역, VC Division 1', en: 'Investment Associate, VC Division 1' },
        entity: 'korea',
        bio: {
          ko: '스파크랩 포트폴리오를 발굴하는 투자심사 업무를 담당한다. 前 언더독스 디렉터, 아르곤 사업기획실 과장, 처들에드립 창업.',
          en: 'Sources and evaluates SparkLabs deals. Former Director at Underdogs, Senior Manager of Business Planning at Argon, and founder of Chdre-Edrip.',
        },
      },
      {
        slug: 'dabin-lee',
        name: 'Dabin Lee',
        koName: '이다빈',
        title: { ko: '매니저, VC Division 1', en: 'Manager, VC Division 1' },
        entity: 'korea',
        bio: {
          ko: '스파크랩에서 TIPS 프로그램 운영 전반을 담당한다. 강남대학교 경영학과 출신.',
          en: 'Owns operations of SparkLabs\' TIPS program. BA in Business from Gangnam University.',
        },
      },
    ],
  },
  {
    slug: 'vc-2',
    title: { ko: 'Venture Capital Division 2', en: 'Venture Capital Division 2' },
    members: [
      {
        slug: 'justin-park',
        name: 'Justin Park',
        koName: '박종한',
        title: { ko: '상무, VC Division 2', en: 'Executive Director, VC Division 2' },
        entity: 'korea',
        bio: {
          ko: '포트폴리오사의 시너지 전략 수립과 회수, 펀드 관리 업무를 담당한다. 前 SLL(JTBC스튜디오) 전략기획실 해외 IP 투자, SM Entertainment 동남아 CIC 팀장, 딜로이트 안진 FAS(재무자문) 출신.',
          en: 'Leads portfolio-company synergy strategy, exits and fund management. Previously led overseas IP investment in strategic planning at SLL (formerly JTBC Studio), headed SM Entertainment\'s Southeast Asia CIC, and advised at Deloitte Anjin\'s Financial Advisory Services.',
        },
      },
      {
        slug: 'jinwoo-bae',
        name: 'Jinwoo Bae',
        koName: '배진우',
        title: { ko: '매니저, VC Division 2', en: 'Manager, VC Division 2' },
        entity: 'korea',
        bio: {
          ko: '스파크랩 액셀러레이터 펀드와 포트폴리오 관리 업무를 수행한다. 前 파이어스톤자산운용 투자운용부.',
          en: 'Operates SparkLabs\' accelerator funds and portfolio administration. Previously in the investment management team at Firestone Asset Management.',
        },
      },
    ],
  },
  {
    slug: 'communication',
    title: { ko: 'Communication Division', en: 'Communication Division' },
    members: [
      {
        slug: 'eunbit-jang',
        name: 'Eun Bit Jang',
        koName: '장은빛',
        title: { ko: '상무, Communication Division', en: 'Executive Director, Communication Division' },
        entity: 'korea',
        bio: {
          ko: '스파크랩과 스파크랩그룹의 홍보와 마케팅, 투자사들의 대외 커뮤니케이션을 이끈다. 前 이뉴자 홍보팀 팀장, 선플맨나다 PR 매니저, 지오코리아 프로젝트 매니저.',
          en: 'Leads communications and marketing across SparkLabs and its portfolio. Previously Head of PR at Enuja, PR Manager at Sunplemannada, and Project Manager at Geo Korea.',
        },
      },
      {
        slug: 'isu-jang',
        name: 'Isu Jang',
        koName: '장이수',
        title: { ko: '선임매니저, Communication Division', en: 'Senior Manager, Communication Division' },
        entity: 'korea',
        bio: {
          ko: '스파크랩의 대내외 홍보와 투자 포트폴리오사들의 홍보를 지원한다. 前 낙성벤처창업센터 홍보 매니저, 사회적경제지원센터 홍보팀 매니저.',
          en: 'Runs internal and external communications and drives portfolio-company PR. Previously PR Manager at Nakseong Venture Center and at the Social Economy Support Center.',
        },
      },
    ],
  },
  {
    slug: 'management-support',
    title: { ko: 'Management Support Division', en: 'Management Support Division' },
    members: [
      {
        slug: 'jiyeon-hwang',
        name: 'Ji Yeon Hwang',
        koName: '황지연',
        title: { ko: '이사, Management Support', en: 'Director, Management Support' },
        entity: 'korea',
        bio: {
          ko: '스파크랩과 스파크랩그룹(파트너스·벤처스) 펀드들의 재무회계를 담당한다. 前 ㈜트라이아노르즈 경영지원팀 팀장, ㈜쿠아인베스트먼트 경영지원실 과장.',
          en: 'Oversees finance and accounting across SparkLabs and SparkLabs group funds (Partners / Ventures). Previously Head of Management Support at Trianors and Senior Manager at Kua Investment.',
        },
      },
      {
        slug: 'gayeong-noh',
        name: 'Gayeong Noh',
        koName: '노가영',
        title: { ko: '매니저, Management Support', en: 'Manager, Management Support' },
        entity: 'korea',
        bio: {
          ko: '스파크랩 임직원의 급여·회계·총무 업무를 담당한다. 前 동남화/법인인 대리. 전북대학교 경영학부(회계학)·영어영문학 전공.',
          en: 'Runs payroll, accounting and general affairs for the SparkLabs team. Previously at Dongnamhwa. BA in Business (Accounting) and English from Jeonbuk National University.',
        },
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Board of Advisors (5) — 스파크랩 코리아 페이지 노출
// ---------------------------------------------------------------------------
export const boardOfAdvisors: Advisor[] = [
  {
    name: 'Ray Ozzie',
    koName: '레이 오지',
    role: { ko: 'Founder & CEO, Talko', en: 'Founder & CEO of Talko' },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/ray-ozzie.jpg',
    bio: {
      ko: '독보적인 소프트웨어 기업인이자 CSCW(Computer-Supported Cooperative Work) 분야의 선구자. 차세대 모바일 커뮤니케이션 서비스 기업 Talko의 창업자이자 CEO이며, 2012년부터 마이크로소프트의 최고 소프트웨어 설계책임자 및 최고 기술책임자로 Bill Gates의 기술 전략 역할을 승계했다. 1997년 Groove Networks를 설립해 2005년 마이크로소프트에 매각했고, 그에 앞서 Iris Associates를 창업해 Lotus Notes를 개발했다(10년 후 IBM에 인수). 이전에는 VisiCalc·TK!Solver 등 초기 전자 스프레드시트 프로그램을 개발했으며, 일리노이대학교 어바나-샴페인에서 컴퓨터공학을 연구했다. PC Magazine 올해의 인물, IEEE W. Wallace McDowell Award, SD Visionary Award 등을 수상했고, 2004년 국립 기술연구원, 2010년 미국 기술과학아카데미에 헌액되었다. 현재 EPIC(Electronic Privacy Information Center) 이사회 임원이다.',
      en: 'A pioneer of Computer-Supported Cooperative Work (CSCW) and one of the most influential software entrepreneurs of his generation. Founder and CEO of Talko, a next-generation mobile communication platform, and Microsoft\'s Chief Software Architect and CTO from 2012, succeeding Bill Gates in technical strategy. Founded Groove Networks in 1997 (acquired by Microsoft in 2005) and, earlier, Iris Associates — creators of Lotus Notes (later acquired by IBM). Previously developed the pioneering spreadsheet programs VisiCalc and TK!Solver. Studied computer science at the University of Illinois Urbana-Champaign. Named PC Magazine\'s Person of the Year; recipient of the IEEE W. Wallace McDowell Award and SD Visionary Award. Elected to the National Academy of Engineering (2004) and the American Academy of Arts & Sciences (2010). Current board member of the Electronic Privacy Information Center (EPIC).',
    },
  },
  {
    name: 'Michael Crow',
    koName: '마이클 크로우',
    role: {
      ko: '총장, Arizona State University',
      en: 'President, Arizona State University',
    },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/michael-crow.jpg',
    bio: {
      ko: '2002년 7월 1일 애리조나주립대 16대 총장으로 선출되어 "새로운 미국의 대학" 모델을 이끌고 있다. 그의 지도하에 애리조나주립대의 7만여 학생들은 학습·연구·창조성을 추구하며 애리조나와 국민의 삶의 질, 지속 가능한 성장, 경제적 경쟁력 향상에 기여한다. Biodesign Institute, Global Institute of Sustainability(GIOS), School of Sustainability, 법인제단, Mary Lou Fulton Teachers College 등 10개 이상의 초학제 연구기관을 설립했고, 재임 기간 연구 지출을 3배 가까이 증대시켰다. W. P. Carey 경영대학원, Ira A. Fulton 공학대학원, Mary Lou Fulton Teachers College 등의 기명권 수여를 선언했다. 前 컬럼비아대 부학장으로 컬럼비아 이노베이션 법인(현 Columbia Technology Ventures)과 Earth Institute 설립을 주도했고, 1998년 Center for Science, Policy, and Outcomes(CSPO)를 설립했다(2003년 애리조나주립대로 재편). CIA 벤처기금 In-Q-Tel 이사회 의장을 역임했으며, 국립행정 과학원 회원이자 혁신과 기업가정신 협의회·외교문제 위원회 멤버.',
      en: 'Elected the 16th President of Arizona State University on July 1, 2002, where he leads the "New American University" model — combining academic excellence with massive research output and social impact for the 70,000+ ASU community. Founded 10+ transdisciplinary institutes including the Biodesign Institute, Global Institute of Sustainability (GIOS), School of Sustainability, and Mary Lou Fulton Teachers College, and roughly tripled ASU\'s research expenditure. Oversaw the naming of the W. P. Carey School of Business, Ira A. Fulton Schools of Engineering, and Mary Lou Fulton Teachers College. Previously Executive Vice Provost at Columbia, where he founded Columbia Innovation Enterprise (now Columbia Technology Ventures) and the Earth Institute, and in 1998 established the Center for Science, Policy, and Outcomes (CSPO, moved to ASU in 2003). Founding Chairman of In-Q-Tel, the CIA\'s venture capital fund. Member of the National Academy of Public Administration and the Council on Foreign Relations.',
    },
  },
  {
    name: 'Mark Cuban',
    koName: '마크 큐반',
    role: { ko: 'Owner, Dallas Mavericks', en: 'Owner, Dallas Mavericks' },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/mark-cuban.jpg',
    bio: {
      ko: '12살 때부터 집집마다 방문하여 쓰레기 봉투를 판매하면서 기업가로서 첫발을 내딛었다. 오늘날 마크는 HDNet·Broadcast.com·MicroSolutions를 설립한 성공적인 기업가이자 투자자이며, Mahalo·JungleCents.com·motionloft.com·Filesanywhere.com·네이키드 피자·140Fire.com 등 신생 업체에 투자해 왔다. 2006년 GQ 매거진 "올해의 인물" 수상자이며 뉴욕타임스 발행 잡지 "Year of Ideas"에 등재된 적이 있고, 케이블과 스포츠 산업 분야에서 가장 영향력 있는 인물 중 하나로 꼽힌다. 2000년 1월 4일 댈러스 매버릭스를 인수하며 세상에 널리 알려졌고, 독창적 동영상·첨단 기술·매버릭스 ManiAACs 등 특별한 오락 기능을 도입해 홈 관중들의 팬심을 끌어올렸다. 매버릭스 인수 전 인터넷 멀티미디어 스트리밍 선도 업체 Broadcast.com을 공동 설립했으며(1999년 7월 야후에 매각), 전국 시스템 통합 업체 MicroSolutions는 1983년 파트너 마틴 우드웰과 함께 설립해 CompuServe에 매각했다. 현재 HDNet과 HDNet Movies의 기업주이자 회장이며, 파트너 로드 와그너와 함께 랜드마크 극장 체인·매그놀리아 픽처스·매그놀리아 홈 비디오를 공동 소유하고 있다. 2005년에는 영화 상영 4주 전부터 유선·위성으로 미리 시청할 수 있는 주문형 비디오 플랫폼 "Ultra VOD"를 도입하며 극장·TV·DVD 동시 배급 전략을 펼치기도 했다.',
      en: 'Began his entrepreneurial career at age 12, going door to door selling garbage bags. Today, Mark is the founder and investor behind HDNet, Broadcast.com and MicroSolutions, and backs emerging companies including Mahalo, JungleCents.com, motionloft.com, Filesanywhere.com, Naked Pizza, and 140Fire.com. GQ Magazine\'s "Man of the Year" (2006) and a fixture in the New York Times Magazine\'s "Year in Ideas," he is one of the most influential figures in cable TV and professional sports. Acquired the Dallas Mavericks on January 4, 2000, reinventing the in-arena experience with original video, advanced technology and the Mavericks ManiAACs. Before the Mavericks, co-founded internet streaming pioneer Broadcast.com (sold to Yahoo in July 1999); in 1983, co-founded MicroSolutions with partner Martin Woodall, later sold to CompuServe. Currently owner and chairman of HDNet and HDNet Movies, two of the few independently owned HD TV networks, alongside co-owning the Landmark Theatres chain, Magnolia Pictures and Magnolia Home Video with partner Todd Wagner. In 2005, introduced the breakthrough "Ultra VOD" platform, releasing films simultaneously in theaters, on HD cable/satellite and on DVD.',
    },
  },
  {
    name: 'Vint Cerf',
    koName: '빈트 서프',
    role: {
      ko: 'VP & Chief Internet Evangelist, Google',
      en: 'VP & Chief Internet Evangelist, Google',
    },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/vint-cerf.jpg',
    bio: {
      ko: '"인터넷의 아버지"로 널리 알려진 인터넷 아키텍처와 기본 프로토콜(TCP/IP)의 공동 발명가. 2005년 10월부터 구글 부사장 겸 수석 인터넷 책임자(Chief Internet Evangelist)로 활동하며 신규 상용 가능 기술을 식별해 인터넷 기반 상품화·서비스화에 활용하는 사업을 담당하고 있다. 과거 MCI, 국립과학재단, 미국방위고등연구계획국(DARPA)에서 근무했으며 스탠포드 대학교 교수진으로도 재임했다. 1997년 12월 클린턴 대통령으로부터 로버트 칸과 함께 국가 기술훈장을 수여받았고, "컴퓨터 과학의 노벨상"으로 불리는 튜링 어워드 수상자이며, 2005년 11월 부시 대통령으로부터 미국 최고 시민훈장인 자유 훈장을, 2008년 4월에는 Japan Prize를 받았다. 2000~2007년 ICANN(Internet Corporation for Assigned Names and Numbers) 이사회 의장직을 맡았고, 1992~1995년 Internet Society 창립 회장, 1999년 이사회 의장을 지냈으며, IPv6 포럼 명예 회장이다. 1997~2001년 미국 대통령 정보기술자문위원회(PITAC) 멤버, 사이버 보안 관련 각국 기관·협회·위원회 구성원으로도 활동했다. 마르코니 협회상, 공학 학회 찰스 스탁 드레이퍼 상, 튀니지 국가 과학 훈장 등을 수상했으며 IEEE·ACM·AAAS·미국 예술과학아카데미·국가공학아카데미·스웨덴 왕립공학아카데미·미국 철학회 등의 멤버이다. 2011년 영국 컴퓨터 학회 특별 회원, 1994년 12월 People지 "올해의 가장 흥미로운 인물 25인"에 선정되었다. 스탠포드 대학교 수학 학사, UCLA 컴퓨터공학 석사·박사 학위를 받았으며 20여 개의 명예학위를 보유하고 있다.',
      en: 'Widely known as one of the "Fathers of the Internet," Vint Cerf is co-inventor of the internet architecture and the fundamental TCP/IP protocols. Since October 2005, has served as VP and Chief Internet Evangelist at Google, where he identifies emerging technologies and helps bring them to market as internet-based products and services. Previously at MCI, the National Science Foundation, and DARPA, and has held faculty appointments at Stanford. Received the US National Medal of Technology from President Clinton in December 1997 (shared with Robert Kahn) and the Turing Award — the "Nobel Prize of computing." Awarded the Presidential Medal of Freedom by President Bush in November 2005, and the Japan Prize in April 2008. Served as Chairman of ICANN (2000–2007), founding president of the Internet Society (1992–1995) and its 1999 board chair, and is honorary chairman of the IPv6 Forum. A member of PITAC (the US President\'s Information Technology Advisory Committee, 1997–2001). Other honors include the Marconi Prize, the Charles Stark Draper Prize from the National Academy of Engineering, and Tunisia\'s National Medal of Science. Fellow of IEEE, ACM, AAAS, the American Academy of Arts and Sciences, the National Academy of Engineering, the Royal Swedish Academy of Engineering, the American Philosophical Society, and more; elected a Distinguished Fellow of the British Computer Society in 2011, and named among People magazine\'s "25 Most Intriguing People" in December 1994. BA in Mathematics from Stanford; MS and PhD in Computer Science from UCLA; holds more than 20 honorary degrees.',
    },
  },
  {
    name: 'Tom Peters',
    koName: '톰 피터스',
    role: {
      ko: '경영 구루 · 『초우량 기업의 조건』 저자',
      en: 'Business thought leader · Author of "In Search of Excellence"',
    },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/tom-peters.jpg',
    bio: {
      ko: '"경제학자들의 스승"이라 불리는 경영 사상가. 로스앤젤레스 타임지는 그를 "포스트모던 기업의 아버지"라 칭했고, 포춘지는 "우리는 톰 피터스의 세계에 살고 있다"라고 표현했다. 로버트 워터맨과 공동 집필한 첫 번째 책 『기업의 조건(In Search of Excellence)』은 1982년 출간 즉시 베스트셀러에 올랐으며, NPR은 이 책을 20세기 3대 경영서 중 하나로 꼽았다. 이어 『초우량 기업에 대한 열정』, 『경영혁명』, 『해방경영』, 『톰 피터스 세미나』, 『경영 창조』, 『혁신 경영』, 『자신을 브랜드화하는 50가지 방법』, 『나의 일은 프로젝트다』, 『우리는 프로젝트로 일한다』 등 국내외 베스트셀러를 다수 집필했고, 『미래를 경영하라!』에서는 리더십·디자인·트렌드·재능을 다뤘다. 연 50회 이상 글로벌 세미나 강연자로 활동 중이다. 코넬대 졸업 후 스탠포드 MBA를 마쳤으며, 백악관 약물남용방지 자문위원, 맥킨지 앤 컴퍼니 파트너, 4년간 미 해군 장교(베트남전 2차 참전)로 복무했다. 가족과 함께 버몬트에 거주한다.',
      en: 'One of the foundational voices of modern management thought — "the father of the post-modern corporation," per the LA Times; Fortune wrote "we live in Tom Peters\' world." His 1982 book "In Search of Excellence," co-authored with Robert Waterman, was an immediate bestseller and was named by NPR as one of the three most important management books of the 20th century. Author of many subsequent bestsellers including "A Passion for Excellence," "Liberation Management," "The Tom Peters Seminar," "The Pursuit of Wow!," "The Circle of Innovation," "The Brand You 50," "The Project 50," and "Re-imagine!" Delivers 50+ global keynotes per year. Cornell and Stanford MBA; former White House advisor on drug abuse prevention, McKinsey partner, and US Navy officer (two tours in Vietnam). Lives in Vermont with his family.',
    },
  },
];

// ---------------------------------------------------------------------------
// Fund Advisors (6)
// ---------------------------------------------------------------------------
export const fundAdvisors: Advisor[] = [
  {
    name: 'Soon Hoon Bae',
    koName: '배순훈',
    role: { ko: '회장, S&T 중공업 · 경영학자', en: 'Chairman, S&T Heavy Industries · Economist' },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/soon-hoon-bae.jpg',
    bio: {
      ko: '경영학자이자 S&T 중공업 회장. 경기고와 서울대 기계공학과를 졸업한 뒤 미국 MIT에서 공학박사 학위를 받았고, 미국 BorgWarner Corporation 엔지니어로 사회에 첫 발을 디뎠다. 이후 한국과학기술원 조교수를 거쳐 대우전자 사장·회장, 대우엔지니어링·대우조선 부사장 등 대우그룹 계열사 경영진으로 근무했다. 1998년 제44대 정보통신부 장관을 역임했고 2003년부터 대통령직속 정책기획위원회 동북아경제중심추진위원장을 지냈다. 1999~2008년 KAIST 특훈초빙교수(종신직위)로 재직하며 2006~2008년 KAIST 서울부총장 겸 경영대학원장을, 2009~2011년 국립현대미술관 관장을 역임했다. 1988년 철탑산업훈장, 1989년 대한민국 과학기술상, 1993년 대한민국 경영인상과 프랑스 레종 도뇌르 훈장을 수훈했고, 제8회 인물대상 정보통신대상·대한민국 창조 경영 훈장도 받았다. 제우스 코어퍼레이션·SJ존슨 등의 사외이사로 활동했으며 모니터그룹·CVC·맥쿼리그룹 등 다양한 기업의 고문으로도 활동하였다.',
      en: 'Chairman of S&T Heavy Industries. Graduated from Kyunggi High School and Seoul National University in Mechanical Engineering, with a PhD from MIT. Began his career as an engineer at BorgWarner Corporation in the US. Later held academic and executive posts including Assistant Professor at KAIST, CEO & Chairman of Daewoo Electronics, and Vice Chairman of Daewoo Engineering and Daewoo Shipbuilding. Served as the 44th Minister of Information and Communications in 1998 and led the Northeast Asia Economic Hub Committee under the Presidential Commission on Policy Planning from 2003. Distinguished Visiting Professor at KAIST (1999–2008) and Vice President of KAIST Seoul / Dean of the KAIST Business School (2006–2008); Director General of the National Museum of Modern and Contemporary Art, Korea (2009–2011). Recipient of the Iron Tower Order of Industrial Service Merit (1988), Korea Science and Technology Award (1989), Korea Management Award (1993) and France\'s Legion of Honour. Has served on the boards of Zeus Corporation and SC Johnson, and advised Monitor Group, CVC and Macquarie.',
    },
  },
  {
    name: 'Young Cho Chi',
    koName: '지영조',
    role: {
      ko: '사장 · 전략기술본부장, 현대자동차그룹',
      en: 'President & Chief Innovation Officer, Hyundai Motor Group',
    },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/young-cho-chi.jpg',
    bio: {
      ko: '한국과 해외의 다국적 기업에서 전략과 운영을 두루 담당한 기업인. 삼성전자 부사장으로 재직하며 삼성전자가 $200B 매출을 달성하는 데 기여했고, 지난 9년간 기획팀의 수장으로서 신규사업·M&A·플랫폼과 서비스·산업 혁신 관련 이슈 등을 포함한 전사 전략을 담당했다. 삼성전자 이전에는 Accenture 아태지역 모바일 사업 부문 총괄 대표파트너(Managing Partner)이자 Accenture 서울 오피스 Board Member로 활약했으며, 8개국을 커버하는 이동통신 사업자 마케팅·R&D·3G 사업 전략·포털 컨텐츠 전략 등 100건 이상의 정보통신 전략 컨설팅 프로젝트를 10년간 수행했다. 1995년부터 3년간 McKinsey & Company 한국·스웨덴 오피스에서 멀티미디어 사업 전략, 범유럽 글로벌 통신 사업체의 마케팅·가격 전략·수입 업무를 진행했다. 첫 직장은 미국 뉴저지 AT&T Bell Labs의 Software Algorithm 수석연구원이었다. 서울대 기계공학과 3학년을 마치고 Brown University에서 기계공학 학사·석사, 응용수학 박사 학위를 취득했다. 글로벌 ICT 산업에서의 27년 경험을 토대로 한국 스타트업의 발전과 성장을 돕기 위해 스파크랩에서 고문 역할을 맡고 있다.',
      en: 'A seasoned executive who has led strategy and operations across Korean and multinational companies. As EVP at Samsung Electronics, led enterprise strategy — new business, M&A, platforms and services, and industry innovation — during a period when Samsung grew past $200B in revenue. Previously Managing Partner for Accenture\'s Asia-Pacific Mobile Practice (covering 8 countries) and board member of Accenture Seoul, running 100+ telecom strategy projects over a decade. From 1995, spent three years with McKinsey & Company in Seoul and Stockholm on multimedia strategy and pan-European telecom pricing and market-entry work. Began his career as a Senior Researcher in Software Algorithms at AT&T Bell Labs in New Jersey. BS/MS in Mechanical Engineering and PhD in Applied Mathematics from Brown University, after three years at Seoul National University. Draws on 27 years in the global ICT industry to advise SparkLabs founders.',
    },
  },
  {
    name: 'Joyce Kim',
    koName: '조이스 김',
    role: { ko: 'Co-founder & CEO, Simplehoney', en: 'Co-founder & CEO, Simplehoney' },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/joyce-kim.jpg',
    bio: {
      ko: '인기 호텔을 손쉽게 검색할 수 있는 검색 플랫폼 Simplehoney의 공동설립자이자 CEO. 아시아 드라마·음악·영화 영상 콘텐츠를 포괄하는 팝업 엔터테인먼트 팬 사이트 Soompi의 CEO를 역임했으며, 이에 앞서 Wilmer Cutler Pickering Hale and Dorr와 Shearman & Sterling 뉴욕 사무소에서 변호사로 활동했다. 고등학교 교육과정을 1년만에 마쳤으며 19세에 코넬대를 졸업했고, 하버드대 동아시아지역연구학 석사학위와 컬럼비아대 법학박사 학위를 수여받았다. 과거 뉴욕에서 거주했으며 현재는 캘리포니아 주 샌프란시스코에서 살고 있다.',
      en: 'Co-founder and CEO of Simplehoney, a popular hotel-search platform. Formerly CEO of Soompi, a leading fan site for Asian drama, music and film content. Earlier in her career, practiced law at Wilmer Cutler Pickering Hale and Dorr and Shearman & Sterling in New York. Finished high school in one year and graduated from Cornell at 19; holds an MA in East Asian Studies from Harvard and a JD from Columbia Law School. Previously based in New York, she now lives in San Francisco.',
    },
  },
  {
    name: 'David Lee',
    koName: '데이비드 리',
    role: { ko: 'Co-founder, Refactor Capital', en: 'Co-founder, Refactor Capital' },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/david-lee.jpg',
    bio: {
      ko: '의료 산업에 집중 투자하는 벤처투자 회사 Refactor Capital의 공동 설립자. Refactor Capital을 설립하기 이전에는 Twitter·Pinterest·Dropbox·AirBnB·Product Hunt·Snapchat 등 유명 기업에 투자한 SV Angel의 설립자이자 대표로 활동했다. 그 전에는 대표적인 시드 투자 기업으로 알려진 Baseline Ventures에서 근무한 바 있으며, 구글의 신사업 개발팀 초기 멤버였고 StumbleUpon에서 회사가 eBay에 매각되기 전까지 사업개발 부문을 이끌었다. 또한 기술 전문 법인 사무소의 변호사이기도 하다. 스탠포드대학교 국립 과학 재단 대학원 연구원으로 재직했으며, 전기공학 석사를 수료했고, 뉴욕대학교에서 법학 박사를, 존스 홉킨스 대학교에서 문학 학사 학위를 받았다. 현재 아동 건강을 위한 의료 재단인 루실 패커드 재단의 이사회 임원으로도 활동하고 있다. 2011년 Marc Andreessen과 Ben Horowitz는 David Lee를 "신기술 분야에서 가장 영향력 있는 7인" 중 1명으로 선정했으며, Business Insider는 그를 "실리콘밸리의 숨겨진 파워 브로커"로 선정했고 실리콘밸리 100인에 뽑히는 영광을 두 번이나 누렸다.',
      en: 'Co-founder of Refactor Capital, an early-stage venture fund focused on healthcare. Previously founder and Managing Partner at SV Angel, backing companies including Twitter, Pinterest, Dropbox, AirBnB, Product Hunt and Snapchat. Earlier in his career, was at Baseline Ventures (one of the archetypal seed firms), part of Google\'s early business-development team, and led business development at StumbleUpon through its acquisition by eBay. Also practiced as a technology lawyer. MS in Electrical Engineering from Stanford (NSF Fellow), JD from NYU, BA from Johns Hopkins. Currently serves on the board of the Lucile Packard Foundation for Children\'s Health. Named one of "The 7 Most Influential People in New Technology" by Marc Andreessen and Ben Horowitz (2011); named by Business Insider as one of "Silicon Valley\'s Hidden Power Brokers" and to the Silicon Valley 100 list twice.',
    },
  },
  {
    name: 'Yul Kwon',
    koName: '권 율',
    role: {
      ko: 'Director of Product Management, Facebook',
      en: 'Director of Product Management, Facebook',
    },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/yul-kwon.jpg',
    bio: {
      ko: 'IT·법률·정책·중소기업 및 미디어 등 다양한 분야에서 커리어를 쌓았다. Facebook(현 수석 프라이버시 담당)과 구글, McKinsey, Venture Law Group, Harris, Wiltshire & Grannis에서 근무한 경험이 있으며, 캘리포니아 북부 개발 담당자로 여러 스타트업을 운영했다. 뿐만 아니라 FCC Consumer & Governmental Affairs Bureau, FBI Academy 감사, 미국 상원위원회 법률상담가 및 항소심 법률서기 등 다양한 정부기관에서 일한 경험이 있다. 2011~2013년 PBS 시리즈 『America Revealed』 호스트, KCETLink의 주간 뉴스 프로그램 LinkAsia 앵커로 활동했으며, 디스커버리 채널과 스미스소니언 채널의 다큐멘터리 호스트이자 CNN의 특별 통신원으로도 활약했다. 2006년에는 CBS 리얼리티 쇼 『Survivor』에서 첫 아시아계 우승자가 되었으며, VIBE Magazine의 연간 특별호 「권력을 가진 사람들」, People지의 「세상에서 가장 섹시한 남자」 및 Entrepreneur Magazine 등에 소개되었다. 스탠포드 대학교에서 Symbolic Systems 학사학위를 Phi Beta Kappa로 졸업했으며, 예일 법대에서 예일 법잡지 편집위원으로 활동하며 석사과정을 이수했다.',
      en: 'Built a career across IT, law, policy, small business and media. Currently Director of Product Management at Facebook (leading privacy); previously at Google, McKinsey, Venture Law Group, and Harris, Wiltshire & Grannis, and ran several startups in Northern California. Public-sector experience includes the FCC Consumer & Governmental Affairs Bureau, the FBI Academy, counsel to a US Senate committee, and appellate law clerking. Host of the PBS series "America Revealed" (2011–2013) and anchor of KCETLink\'s LinkAsia, plus documentary host on the Discovery and Smithsonian channels and a CNN contributor. Won CBS\'s "Survivor" in 2006 as the first Asian-American winner, and was featured in VIBE Magazine\'s "Power Issue," People\'s "Sexiest Men Alive," and Entrepreneur Magazine. BA in Symbolic Systems from Stanford (Phi Beta Kappa); JD from Yale Law School, where he served on the Yale Law Journal.',
    },
  },
  {
    name: 'John Lee',
    koName: '존 리',
    role: {
      ko: 'Portfolio Manager, Major League Baseball',
      en: 'Portfolio Manager, Major League Baseball',
    },
    affiliation: 'SparkLabs Korea',
    photo: '/team/advisors/john-lee.jpg',
    bio: {
      ko: '2007년부터 미국 메이저리그(MLB)에서 투자 포트폴리오를 관리했다. 현재는 공공시장·대안 투자·사모펀드 및 벤처전략 등을 책임지고 있으며, 신흥 미디어·엔터테인먼트·스포츠 관련 기업이 주 관심사이다. MLB에 합류하기 전에는 endowment model로 전 세계 여러 자산군에 투자하는 $7B 사설 투자기관에서 일한 경험이 있다. 또한 여러 정부기관에서 정책 고문으로도 활동했으며, 세계 최대 규모 온라인 거래회사의 초기 멤버로 커리어를 시작했다. 현재 샌프란시스코와 뉴욕 외 다수 도시를 오가며 일하고 있으며, 스탠포드 대학교에서 학사학위를 취득했다.',
      en: 'Has managed the Major League Baseball investment portfolio since 2007, currently overseeing public markets, alternatives, private equity and venture strategy — with a focus on emerging media, entertainment and sports companies. Prior to MLB, invested across global asset classes at a $7B endowment-model institution and served as a policy advisor across government agencies. Began his career as an early team member of one of the world\'s largest online trading companies. Splits time between San Francisco, New York and other cities. BA from Stanford.',
    },
  },
];

// ---------------------------------------------------------------------------
// Featured Advisors (글로벌 네트워크 하이라이트 — 150+ 중 선별)
// ---------------------------------------------------------------------------
export const featuredAdvisors: Advisor[] = [
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
];
