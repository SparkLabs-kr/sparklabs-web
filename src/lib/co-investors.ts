/**
 * 스파크랩과 함께 포트폴리오사에 공동 투자하거나
 * 글로벌 후속 투자에 참여한 주요 VC·전략투자자 리스트.
 * 홈 "In Great Company" 섹션의 source of truth.
 */
export interface CoInvestor {
  slug: string;
  name: string;
  logo: string; // path under /public
}

export const coInvestors: CoInvestor[] = [
  { slug: 'gv', name: 'GV (Google Ventures)', logo: '/co-investors/gv.png' },
  { slug: 'y-combinator', name: 'Y Combinator', logo: '/co-investors/y-combinator.png' },
  { slug: 'andreessen-horowitz', name: 'Andreessen Horowitz (a16z)', logo: '/co-investors/andreessen-horowitz.png' },
  { slug: 'sequoia', name: 'Sequoia Capital', logo: '/co-investors/sequoia.png' },
  { slug: 'accel', name: 'Accel', logo: '/co-investors/accel.png' },
  { slug: 'nea', name: 'NEA', logo: '/co-investors/nea.png' },
  { slug: 'khosla-ventures', name: 'Khosla Ventures', logo: '/co-investors/khosla-ventures.png' },
  { slug: 'thrive-capital', name: 'Thrive Capital', logo: '/co-investors/thrive-capital.png' },
  { slug: 'coatue', name: 'Coatue', logo: '/co-investors/coatue.png' },
  { slug: 'silver-lake', name: 'Silver Lake', logo: '/co-investors/silver-lake.png' },
  { slug: 'sv-angel', name: 'SV Angel', logo: '/co-investors/sv-angel.png' },
  { slug: 'horizons-ventures', name: 'Horizons Ventures', logo: '/co-investors/horizons-ventures.png' },
  { slug: 'lerer-hippeau', name: 'Lerer Hippeau', logo: '/co-investors/lerer-hippeau.png' },
  { slug: 'kima-ventures', name: 'Kima Ventures', logo: '/co-investors/kima-ventures.png' },
  { slug: 'white-star-capital', name: 'White Star Capital', logo: '/co-investors/white-star-capital.png' },
  { slug: 'altos-ventures', name: 'Altos Ventures', logo: '/co-investors/altos-ventures.png' },
  { slug: 'rakuten', name: 'Rakuten', logo: '/co-investors/rakuten.png' },
  { slug: 'alibaba', name: 'Alibaba Group', logo: '/co-investors/alibaba.png' },
  { slug: 'sbva', name: 'SBVA', logo: '/co-investors/sbva.png' },
  { slug: 'kdb', name: 'KDB', logo: '/co-investors/kdb.png' },
  { slug: 'mirae-asset', name: 'Mirae Asset', logo: '/co-investors/mirae-asset.png' },
];
