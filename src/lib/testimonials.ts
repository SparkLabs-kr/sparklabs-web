/**
 * 홈 Testimonials 섹션에 사용되는 창업가 증언 데이터.
 * 샘플 2건으로 시작. 사진/문구는 추후 공식 버전으로 교체 예정.
 */
export interface Testimonial {
  slug: string;
  founderName: string;
  founderKoName?: string;
  role: { ko: string; en: string };
  company: string;
  photo?: string; // /public path
  quote: { ko: string; en: string };
}

export const testimonials: Testimonial[] = [
  {
    slug: 'dino-ha-mbx',
    founderName: 'Dino Ha',
    founderKoName: '하형석',
    role: {
      ko: '공동창업자 & CEO',
      en: 'Co-founder & CEO',
    },
    company: 'MBX (구 미미박스)',
    quote: {
      ko: '스파크랩의 열정은 미미박스가 실리콘밸리로 진출하고 Y Combinator를 졸업하기까지 모든 여정의 원동력이 되었습니다. 파트너십 체결 후 1년 만에 시리즈 A, B 투자를 성공적으로 유치했으며, 글로벌 시장으로 도약하는 과정에서 가장 든든한 투자자이자 파트너였습니다.',
      en: "SparkLabs' passion was the driving force behind Memebox's journey to Silicon Valley and through Y Combinator. Within a year of partnering, we successfully closed Series A and B rounds — and they remained our most trusted investor and partner through every step of going global.",
    },
  },
  {
    slug: 'sample-founder-2',
    founderName: 'Jane Park',
    founderKoName: '박지은',
    role: {
      ko: '공동창업자 & CEO',
      en: 'Co-founder & CEO',
    },
    company: 'SampleCo',
    quote: {
      ko: '스파크랩 팀은 매주 밀착해서 사업의 핵심 지표와 채용, 투자 라운드 전략까지 함께 고민해 주셨습니다. 덕분에 시드에서 시리즈 A까지 1년 만에 도달할 수 있었고, 글로벌 VC와의 첫 미팅도 스파크랩 네트워크를 통해 연결됐습니다.',
      en: 'The SparkLabs team worked side-by-side with us every week — on our core metrics, hiring, and fundraising strategy. We went from seed to Series A in twelve months, and our first meetings with global VCs all came through the SparkLabs network.',
    },
  },
];
