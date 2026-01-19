
export enum BrainType {
  CHEETAH = 'CHEETAH',
  OWL = 'OWL',
  DOLPHIN = 'DOLPHIN',
  ELEPHANT = 'ELEPHANT'
}

export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    type: BrainType;
  }[];
}

export interface BrainTypeInfo {
  type: BrainType;
  name: string;
  englishName: string;
  color: string;
  description: string;
  readingStrategy: string[];
  memoryStrategy: string[];
  decisionStrategy: string[];
  successCareers: string[]; // 추가: 성공적인 직업군
  chemistry: {
    partner: string;
    partnerType: BrainType;
    synergy: string;
    description: string; // 추가: 상호관계 상세 설명
  };
  blindSpot: string;
  declaration: string;
  recommendedAction: string;
}

export interface DiagnosticResult {
  primary: BrainTypeInfo;
  secondary: BrainTypeInfo;
  scores: Record<BrainType, number>;
}

export type Step = 'SPLASH' | 'NAME_INPUT' | 'QUIZ' | 'LOADING' | 'RESULT';
