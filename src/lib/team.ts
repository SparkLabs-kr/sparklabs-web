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
    bio: {
      ko: '독보적인 소프트웨어 기업인이자 CSCW(Computer-Supported Cooperative Work) 분야의 선구자. 2012년부터 마이크로소프트의 최고 소프트웨어 설계책임자 겸 최고 기술책임자로 Bill Gates의 기술 전략 역할을 승계했다. 1997년 Groove Networks를 설립해 2005년 마이크로소프트에 매각했고, 그에 앞서 Iris Associates를 창업해 Lotus Notes를 개발했다. 일리노이대학교 어바나-샴페인에서 컴퓨터 공학을 연구했으며, 국립 기술연구원·미국 기술과학아카데미 회원이다.',
      en: 'A pioneer of Computer-Supported Cooperative Work (CSCW) and one of the most influential software entrepreneurs of his generation. Served as Microsoft\'s Chief Software Architect and Chief Technical Officer starting in 2012, succeeding Bill Gates. Founded Groove Networks (acquired by Microsoft in 2005) and, earlier, Iris Associates — creators of Lotus Notes. Member of the National Academy of Engineering and the American Academy of Arts & Sciences.',
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
    bio: {
      ko: '2002년부터 애리조나주립대 16대 총장으로 "새로운 미국의 대학" 모델을 이끌고 있다. Biodesign Institute, Global Institute of Sustainability, School of Sustainability 등 10개 이상의 초학제 연구기관을 설립했으며, 재임 기간 연구 지출을 3배 가까이 증대시켰다. 前 컬럼비아대 부학장으로 컬럼비아 이노베이션 법인(현 Columbia Technology Ventures)과 Earth Institute 설립을 주도했으며, CIA 벤처기금 In-Q-Tel 이사회 의장을 역임했다.',
      en: 'President of Arizona State University since 2002, where he leads the "New American University" model — combining academic excellence, massive research output and social impact. Founded 10+ transdisciplinary institutes including the Biodesign Institute, Global Institute of Sustainability and School of Sustainability, and roughly tripled the university\'s research expenditure during his tenure. Previously Executive Vice Provost at Columbia, where he founded Columbia Technology Ventures and the Earth Institute, and served as founding Chairman of In-Q-Tel, the CIA\'s venture capital fund.',
    },
  },
  {
    name: 'Mark Cuban',
    koName: '마크 큐반',
    role: { ko: 'Owner, Dallas Mavericks', en: 'Owner, Dallas Mavericks' },
    affiliation: 'SparkLabs Korea',
  },
  {
    name: 'Vint Cerf',
    koName: '빈트 서프',
    role: {
      ko: 'VP & Chief Internet Evangelist, Google',
      en: 'VP & Chief Internet Evangelist, Google',
    },
    affiliation: 'SparkLabs Korea',
  },
  {
    name: 'Tom Peters',
    koName: '톰 피터스',
    role: {
      ko: '경영 구루 · 『초우량 기업의 조건』 저자',
      en: 'Business thought leader · Author of "In Search of Excellence"',
    },
    affiliation: 'SparkLabs Korea',
    bio: {
      ko: '"경제학자들의 스승"이라 불리는 경영 사상가. 1982년 『기업의 조건(In Search of Excellence)』 출간 즉시 베스트셀러에 올랐으며, NPR은 이 책을 20세기 3대 경영서 중 하나로 꼽았다. 『초우량 기업에 대한 열정』, 『경영혁명』, 『톰 피터스 세미나』, 『미래를 경영하라』 등 국내외 베스트셀러를 다수 집필했고 연 50회 이상 글로벌 세미나 강연자로 활동하고 있다. 코넬대 졸업 후 스탠포드 MBA를 마쳤으며, 백악관 자문위원, 맥킨지 앤 컴퍼니 파트너, 4년간 미 해군 장교(베트남 파병)로 복무했다.',
      en: 'One of the foundational voices of modern management thought — "the father of the post-modern corporation," per the LA Times. His 1982 book "In Search of Excellence" (co-authored with Robert Waterman) became an immediate bestseller and was named by NPR as one of the three most important management books of the 20th century. Author of many subsequent bestsellers including "A Passion for Excellence," "Liberation Management," "The Tom Peters Seminar" and "Re-imagine!" Delivers 50+ global keynotes per year. Cornell and Stanford MBA; former White House advisor, McKinsey partner, and US Navy officer (two tours in Vietnam).',
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
    bio: {
      ko: '서울대 기계공학과 졸업, MIT에서 공학박사. 대우전자 회장, 대우엔지니어링·대우조선 부사장을 역임했고, 1998년 제44대 정보통신부 장관으로 재임했다. 2003년부터 대통령직속 정책기획위원회 동북아경제중심추진위원장을 지냈으며 1999~2009년 KAIST 특훈초빙교수로 재직하면서 KAIST 서울부총장 겸 경영대학원장을 지냈다. 2009~2011년 국립현대미술관장. 1988년 철탑산업훈장, 1993년 프랑스 레종 도뇌르 수훈.',
      en: 'Chairman of S&T Heavy Industries. Graduated in Mechanical Engineering from Seoul National University with a PhD from MIT. Former Chairman of Daewoo Electronics and Vice Chairman of Daewoo Engineering and Daewoo Shipbuilding. Served as the 44th Minister of Information and Communications of Korea in 1998 and led the Northeast Asia Economic Hub Committee under the Presidential Commission on Policy Planning from 2003. Distinguished Visiting Professor at KAIST (1999–2009) and Director General of the National Museum of Modern and Contemporary Art, Korea (2009–2011).',
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
    bio: {
      ko: '삼성전자 부사장으로서 전사 전략을 총괄하며 $200B 매출 달성에 기여했다. 이전에는 Accenture 아태지역 모바일 사업부문 총괄 대표파트너로 활동했고 서울 오피스 Board Member를 겸했다. McKinsey & Company의 한국·스페인 오피스에서 유럽 통신사업자 전략을 수립했고, AT&T Bell Labs에서 Software Algorithm 수석연구원으로 커리어를 시작했다. 서울대 기계공학을 거쳐 Brown University에서 응용수학 박사 학위를 받았다.',
      en: 'Former Executive Vice President at Samsung Electronics, where he led enterprise strategy (new business, M&A, platforms and services) during a period when Samsung grew past $200B in revenue. Previously Managing Partner for Accenture\'s Asia-Pacific Mobile Practice and board member of Accenture Seoul. Prior to Accenture, was a consultant at McKinsey & Company in Seoul and Madrid, and a Senior Researcher in Software Algorithms at AT&T Bell Labs. PhD in Applied Mathematics from Brown University.',
    },
  },
  {
    name: 'Joyce Kim',
    koName: '조이스 김',
    role: { ko: 'Co-founder & CEO, Simplehoney', en: 'Co-founder & CEO, Simplehoney' },
    affiliation: 'SparkLabs Korea',
    bio: {
      ko: '호텔을 손쉽게 검색할 수 있는 검색 플랫폼 Simplehoney의 공동설립자이자 CEO. 아시아 드라마·음악·영상 콘텐츠를 포괄하는 엔터테인먼트 플랫폼 Soompi의 CEO를 역임했으며, 이전에는 Wilmer Cutler Pickering Hale and Dorr와 Shearman & Sterling 뉴욕 오피스에서 변호사로 활동했다. 고등학교 과정을 1년만에 마치고 19세에 코넬대를 졸업했으며, 하버드 동아시아지역학 석사와 컬럼비아대 법학박사(JD) 학위를 취득했다.',
      en: 'Co-founder and CEO of Simplehoney, a travel-search platform focused on boutique hotels. Formerly CEO of Soompi, a leading online destination for Asian entertainment. Earlier in her career, practiced law at Wilmer Cutler Pickering Hale and Dorr and Shearman & Sterling in New York. Finished high school in one year and graduated from Cornell at 19; holds an MA in East Asian Studies from Harvard and a JD from Columbia Law School.',
    },
  },
  {
    name: 'David Lee',
    koName: '데이비드 리',
    role: { ko: 'Co-founder, Refactor Capital', en: 'Co-founder, Refactor Capital' },
    affiliation: 'SparkLabs Korea',
    bio: {
      ko: 'Refactor Capital 공동 설립자. 이전에 SV Angel의 설립자이자 대표로 Twitter, Pinterest, Dropbox, Airbnb, Product Hunt, Snapchat 등 유명 스타트업에 투자했고, 그에 앞서 Baseline Ventures와 구글 초기 사업개발, StumbleUpon의 사업개발 부문을 이끌었다(eBay 매각). 스탠포드대 국립 과학 재단 대학원 연구원, 전기공학 석사, NYU 법학박사, 존스홉킨스 인문학 학사. 2011년 Marc Andreessen과 Ben Horowitz가 선정한 "신기술 분야에서 가장 영향력 있는 7인" 중 한 명.',
      en: 'Co-founder of Refactor Capital, an early-stage venture fund. Previously Managing Partner at SV Angel, backing companies including Twitter, Pinterest, Dropbox, Airbnb, Product Hunt and Snapchat. Earlier in his career, was at Baseline Ventures, part of Google\'s early business-development team, and led business development at StumbleUpon through its acquisition by eBay. MS in Electrical Engineering from Stanford (NSF Fellow), JD from NYU, BA from Johns Hopkins. Named one of "The 7 Most Influential People in New Technology" by Marc Andreessen and Ben Horowitz in 2011.',
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
    bio: {
      ko: 'Facebook의 프로덕트 매니지먼트 디렉터(현 수석 프라이버시 담당). 이전에 구글, McKinsey, Venture Law Group에서 근무했으며, FCC Consumer & Governmental Affairs Bureau, FBI Academy 감사, 미국 상원외 법률상담가를 역임했다. 2011~2013년 PBS 시리즈 『America Revealed』 호스트, KCETLink의 주간 뉴스 프로그램 LinkAsia 앵커로 활동했고, 2006년 CBS 리얼리티 쇼 『Survivor』의 첫 아시아계 우승자가 됐다. 스탠포드에서 Symbolic Systems 학사를 Phi Beta Kappa로 졸업하고 예일 로스쿨에서 JD를 취득했다.',
      en: 'Director of Product Management at Facebook (currently leading privacy). Previously at Google, McKinsey, Venture Law Group and Harris, Wiltshire & Grannis, with public-sector experience at the FCC\'s Consumer & Governmental Affairs Bureau, the FBI Academy and the US Senate. Host of the PBS series "America Revealed" (2011–2013) and anchor of KCETLink\'s LinkAsia. Won CBS\'s "Survivor" in 2006 as the first Asian-American winner. BA in Symbolic Systems from Stanford (Phi Beta Kappa); JD from Yale Law School.',
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
    bio: {
      ko: '2007년부터 미국 메이저리그(MLB)에서 투자 포트폴리오를 관리하며, 현재 공공시장·대안 투자·사모펀드·벤처 전략을 책임지고 있다. 미디어·엔터테인먼트·스포츠 관련 기업이 주 관심사. MLB 합류 전에는 endowment 모델로 전 세계 자산군에 투자하는 $7B 규모 기관투자자에서 근무했으며, 여러 정부기관에서 정책 고문으로도 활동했다. 스탠포드대 학사.',
      en: 'Has managed the Major League Baseball investment portfolio since 2007, currently overseeing public markets, alternatives, private equity and venture strategy — with a focus on media, entertainment and sports companies. Prior to MLB, invested across global asset classes at a $7B endowment-model institution, and has served as a policy advisor across government agencies. BA from Stanford.',
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
