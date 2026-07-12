/**
 * 포트폴리오 상세 페이지용 데이터 계층.
 * portfolio.ts(라이브 카드 데이터)와 portfolio-full.ts(스크랩된 국·영문 장문 소개)를
 * slug 기준으로 병합한다. portfolio-full.ts는 자동 생성 파일이므로 직접 수정하지 않고,
 * 스크랩본에 없는 회사의 소개문은 여기 authoredDescriptions에 직접 작성한다.
 */

import { portfolio, type PortfolioCompany } from './portfolio';
import { portfolioCompanies } from './portfolio-full';

/** portfolio.ts slug → portfolio-full.ts slug (이름만 다른 동일 회사). */
const slugAliases: Record<string, string> = {
  wanted: 'wantedlab',
  bemyfriends: 'bemyfriends-co-ltd',
};

/** 스크랩본(portfolio-full.ts)에 소개문이 없는 회사들의 직접 작성 소개. */
const authoredDescriptions: Record<string, { ko: string; en: string }> = {
  openai: {
    ko: 'OpenAI는 ChatGPT와 GPT 모델 패밀리를 만든 AI 연구·배포 기업입니다. 범용 인공지능(AGI)이 인류 전체에 이롭게 작동하도록 하는 것을 사명으로, 언어·멀티모달 모델 연구와 API·소비자 제품을 통해 전 세계에서 가장 널리 쓰이는 AI 서비스를 운영하고 있습니다. 스파크랩은 글로벌 AI 포트폴리오의 일환으로 OpenAI에 투자했습니다.',
    en: 'OpenAI is the AI research and deployment company behind ChatGPT and the GPT model family. Its mission is to ensure that artificial general intelligence benefits all of humanity, and its models power some of the most widely used AI products and APIs in the world. SparkLabs invested in OpenAI as part of its global AI portfolio.',
  },
  anthropic: {
    ko: 'Anthropic은 AI 안전성 연구를 기반으로 신뢰할 수 있고 조향 가능한 AI 시스템을 만드는 기업이며, AI 어시스턴트 Claude를 개발·운영하고 있습니다. 해석 가능성과 정렬(alignment) 연구를 모델 개발의 중심에 두는 접근으로 프런티어 AI 연구소 가운데 독자적인 위치를 확보했습니다. 스파크랩은 글로벌 AI 포트폴리오의 일환으로 Anthropic에 투자했습니다.',
    en: 'Anthropic is an AI safety company building reliable, steerable AI systems, and the maker of the AI assistant Claude. Its approach places interpretability and alignment research at the center of model development, giving it a distinct position among frontier AI labs. SparkLabs invested in Anthropic as part of its global AI portfolio.',
  },
  perplexity: {
    ko: 'Perplexity는 질문에 대해 출처와 함께 답을 제시하는 AI 검색(answer engine) 기업입니다. 링크 목록 대신 검증 가능한 답변을 제공하는 대화형 검색 경험으로 기존 검색의 대안으로 빠르게 자리 잡았습니다. 스파크랩은 글로벌 AI 포트폴리오의 일환으로 Perplexity에 투자했습니다.',
    en: 'Perplexity is an AI-native answer engine that responds to questions with cited, verifiable answers instead of a list of links. Its conversational search experience has quickly established it as an alternative to traditional search. SparkLabs invested in Perplexity as part of its global AI portfolio.',
  },
  xai: {
    ko: 'xAI는 Elon Musk가 설립한 AI 기업으로, 대화형 AI Grok을 개발했습니다. X 플랫폼과의 통합을 바탕으로 실시간 정보 접근에 강점을 지닌 AI 어시스턴트를 지향합니다. 스파크랩은 글로벌 AI 포트폴리오의 일환으로 xAI에 투자했습니다.',
    en: "xAI is the AI company founded by Elon Musk and the maker of the conversational AI Grok. Built around its integration with the X platform, Grok is designed as an AI assistant with strong access to real-time information. SparkLabs invested in xAI as part of its global AI portfolio.",
  },
  groq: {
    ko: 'Groq은 AI 추론에 특화된 반도체 LPU(Language Processing Unit)를 개발한 기업입니다. 초저지연·고속 추론 성능으로 대규모 언어 모델 서빙 분야에서 독보적인 속도를 보여주며 AI 인프라 시장의 핵심 플레이어로 성장했습니다. 스파크랩은 글로벌 AI 포트폴리오의 일환으로 Groq에 투자했습니다.',
    en: 'Groq is the company behind the LPU (Language Processing Unit), silicon purpose-built for AI inference. Its ultra-low-latency, high-throughput performance in serving large language models made it a key player in AI infrastructure. SparkLabs invested in Groq as part of its global AI portfolio.',
  },
  switchon: {
    ko: '스위치온은 산업 현장의 전력 데이터를 기반으로 설비 상태를 진단하는 전력 IoT·산업 AI 기업입니다. 설비의 전류·전력 신호를 수집·분석해 이상 징후를 조기에 감지함으로써, 제조 현장의 비계획 정지를 줄이고 설비 운영 효율을 높이는 데 기여합니다.',
    en: 'SwitchOn is a power IoT and industrial AI company that diagnoses equipment health from electrical data. By collecting and analyzing current and power signals from machinery, it detects anomalies early — helping manufacturers reduce unplanned downtime and run equipment more efficiently.',
  },
  aboraLabs: {
    ko: '아보라랩스는 AI 기반 언어 학습 플랫폼을 개발하는 스타트업입니다. 학습자의 수준과 목표에 맞춘 개인화된 학습 경험을 AI로 구현해, 실제로 사용할 수 있는 언어 능력을 기르는 데 초점을 맞추고 있습니다.',
    en: "Abora Labs is building an AI-powered language learning platform. It uses AI to personalize the learning experience to each learner's level and goals, focusing on language skills people can actually use.",
  },
};

const descriptionBySlug = new Map(
  portfolioCompanies.map((c) => [c.slug, c.description])
);

/** 스크랩 원문에 남아 있는 감싸는 따옴표·불필요 공백 제거 (예: gint 항목). */
function cleanDescription(text: string): string {
  const trimmed = text.trim();
  const unwrapped = trimmed.match(/^["“](.*)["”]$/s);
  return unwrapped ? unwrapped[1].trim() : trimmed;
}

export interface PortfolioDetail {
  company: PortfolioCompany;
  description: { ko: string; en: string };
}

export function getPortfolioDetail(slug: string): PortfolioDetail | undefined {
  const company = portfolio.find((p) => p.slug === slug);
  if (!company) return undefined;

  const raw =
    authoredDescriptions[slug] ??
    descriptionBySlug.get(slugAliases[slug] ?? slug);
  if (!raw) return undefined;

  return {
    company,
    description: {
      ko: cleanDescription(raw.ko),
      en: cleanDescription(raw.en),
    },
  };
}
