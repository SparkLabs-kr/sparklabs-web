/**
 * 홈 Founder Voices(인용 캐러셀) 데이터 — v5 승인 시안의 3개 인용 기준.
 */
export interface Testimonial {
  slug: string;
  founderName: string;
  founderKoName?: string;
  role: { ko: string; en: string };
  company?: string;
  photo?: string; // /public path
  quote: { ko: string; en: string };
}

export const testimonials: Testimonial[] = [
  {
    slug: 'bokkee-lee-wantedlab',
    founderName: 'Bokkee Lee',
    founderKoName: '이복기',
    role: {
      ko: '원티드랩 대표',
      en: 'CEO, Wantedlab',
    },
    quote: {
      ko: '창업자의 하루하루는 전쟁의 연속입니다. 그 길을 걸으면서 성공과 실패의 교훈을 몸에 새긴 사람들과 함께 하세요.',
      en: "A founder's every day is a battle. Walk that road with people who carry the lessons of success and failure earned on the same path.",
    },
  },
  {
    slug: 'dino-ha-mbx',
    founderName: 'Dino Ha',
    founderKoName: '하형석',
    role: {
      ko: '미미박스 대표',
      en: 'CEO, Memebox',
    },
    quote: {
      ko: '스파크랩은 우리가 불과 1년 만에 시리즈A, 시리즈B 투자를 유치하고 해외 진출하는 데 큰 도움을 주었죠.',
      en: 'SparkLabs was instrumental in helping us raise our Series A and B within a single year and expand overseas.',
    },
  },
  {
    slug: 'jungyoon-lee-batch',
    founderName: 'Jungyoon Lee',
    founderKoName: '이정윤',
    role: {
      ko: '배치 프로그램 참여 창업자',
      en: 'Batch Program founder',
    },
    quote: {
      ko: '매주 테스트와 멘토링으로 EV 개념을 잡고, 20만 명의 가입자를 모집해 투자 유치에 성공했습니다.',
      en: 'Weekly tests and mentoring sharpened our EV concept — we signed up 200,000 users and closed our round.',
    },
  },
];
