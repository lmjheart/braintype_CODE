
import { BrainType, Question, BrainTypeInfo } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "문제에 직면했을 때 당신이 선호하는 방식은 무엇인가?",
    options: [
      { label: "결정을 내리기 전에 여러 관점을 고려한다.", type: BrainType.DOLPHIN },
      { label: "자신의 직감을 믿고 즉각적으로 조치한다.", type: BrainType.CHEETAH },
      { label: "행동하기 전에 분석하고 전략을 세운다.", type: BrainType.OWL },
      { label: "다른 사람들과 협력하고 합의를 이끌어낸다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 2,
    text: "새로운 것을 배울 때 당신은 어떻게 하는가?",
    options: [
      { label: "논리적으로 세분화한다.", type: BrainType.OWL },
      { label: "바로 학습을 시작해 직접 체험하며 배운다.", type: BrainType.CHEETAH },
      { label: "다른 사람들과 토론하고 아이디어를 교환한다.", type: BrainType.ELEPHANT },
      { label: "자신의 기존 지식과 어떻게 연결되어 있는지 숙고한다.", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 3,
    text: "그룹 프로젝트에서 대체로 당신은 어떻게 하는가?",
    options: [
      { label: "모든 사람의 의견을 듣고 고려한다.", type: BrainType.ELEPHANT },
      { label: "신속하고 효율적으로 과업을 실행한다.", type: BrainType.CHEETAH },
      { label: "창의적인 아이디어와 해결책을 제안한다.", type: BrainType.DOLPHIN },
      { label: "사람들의 능력에 따라 다른 역할을 부여한다.", type: BrainType.OWL },
    ]
  },
  {
    id: 4,
    text: "결정을 내려야 할 때 당신이 더 의존하는 것은 무엇인가?",
    options: [
      { label: "직관과 직감", type: BrainType.CHEETAH },
      { label: "논리와 이성", type: BrainType.OWL },
      { label: "개인적 가치와 원칙", type: BrainType.DOLPHIN },
      { label: "다른 사람들의 제안과 집단 합의", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 5,
    text: "당신이 자유 시간에 할 가능성이 가장 큰 것은 무엇인가?",
    options: [
      { label: "독서를 하거나 지적 탐구에 참여한다.", type: BrainType.OWL },
      { label: "상상력을 발휘하게 하는 취미나 관심사를 추구한다.", type: BrainType.DOLPHIN },
      { label: "친구와 어울리거나 공공 행사에 참여한다.", type: BrainType.ELEPHANT },
      { label: "신체 활동이나 스포츠에 참여한다.", type: BrainType.CHEETAH },
    ]
  },
  {
    id: 6,
    text: "의사소통을 할 때 당신은 어떤 방식을 취하는가?",
    options: [
      { label: "공감과 이해", type: BrainType.DOLPHIN },
      { label: "포용적이고 열린 마음", type: BrainType.ELEPHANT },
      { label: "열정과 표현", type: BrainType.CHEETAH },
      { label: "정확하고 직접적인 설명", type: BrainType.OWL },
    ]
  },
  {
    id: 7,
    text: "목표를 정할 때 당신은 어떤 유형인가?",
    options: [
      { label: "세부적인 계획과 일정을 수립한다.", type: BrainType.OWL },
      { label: "목표가 미치는 광범위한 영향을 고려한다.", type: BrainType.DOLPHIN },
      { label: "속도에 우선순위를 둔다.", type: BrainType.CHEETAH },
      { label: "정기적으로 다른 사람들의 아이디어를 통합한다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 8,
    text: "당신에게 가장 편안한 역할은 무엇인가?",
    options: [
      { label: "팀워크와 협력을 촉진하는 역할", type: BrainType.ELEPHANT },
      { label: "업무 또는 과제 시 생각할 시간을 주는 역할", type: BrainType.OWL },
      { label: "신속한 결정과 적응력을 요구하는 역할", type: BrainType.CHEETAH },
      { label: "자유로운 아이디어의 흐름을 장려하는 역할", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 9,
    text: "당신이 가장 성취감을 느킬 때는 언제인가?",
    options: [
      { label: "사람들을 하나로 모아 공동의 목표를 달성할 때", type: BrainType.ELEPHANT },
      { label: "작업을 효율적으로 완료할 때", type: BrainType.CHEETAH },
      { label: "참신한 아이디어가 떠오를 때", type: BrainType.DOLPHIN },
      { label: "복잡한 문제를 해결할 때", type: BrainType.OWL },
    ]
  },
  {
    id: 10,
    text: "피드백을 제공할 때 당신은 어떠한가?",
    options: [
      { label: "세심하게 공감하며 당신의 생각을 공유한다.", type: BrainType.DOLPHIN },
      { label: "솔직하게 직설적으로 말해준다.", type: BrainType.CHEETAH },
      { label: "열린 대화와 토론을 장려한다.", type: BrainType.ELEPHANT },
      { label: "객관적이고 건설적인 비판을 제공한다.", type: BrainType.OWL },
    ]
  },
  {
    id: 11,
    text: "학습 환경에서 당신이 학습할 때 가장 도움이 되는 방식은 무엇인가?",
    options: [
      { label: "체험 활동 참여와 경험을 통한 학습", type: BrainType.CHEETAH },
      { label: "단계별, 구조화된 학습 방식", type: BrainType.OWL },
      { label: "시각 자료를 사용하고 상상력을 활용하는 학습", type: BrainType.DOLPHIN },
      { label: "집단토론 참여", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 12,
    text: "누군가를 설득하려 할 때 당신은 자신이 어떤 스타일이라고 설명할 것인가?",
    options: [
      { label: "수용하고 이해해주는 스타일", type: BrainType.ELEPHANT },
      { label: "직설적이고 간결하며 이성적인 스타일", type: BrainType.OWL },
      { label: "역동적이고 설득력 있는 스타일", type: BrainType.CHEETAH },
      { label: "활기차고 마음을 사로잡는 스타일", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 13,
    text: "당신은 일반적으로 갈등을 어떻게 처리하는가?",
    options: [
      { label: "상황을 분석하고 합리적인 해결책을 제시한다.", type: BrainType.OWL },
      { label: "정면으로 문제와 부딪히고 단호한 조치를 취한다.", type: BrainType.CHEETAH },
      { label: "창의적인 타협점을 찾는다.", type: BrainType.DOLPHIN },
      { label: "모든 당사자 간의 열린 의사소통과 이해를 증진한다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 14,
    text: "당신은 어떤 업무 환경이 가장 마음에 드는가?",
    options: [
      { label: "협력적이고 서로 지지해주는 분위기", type: BrainType.ELEPHANT },
      { label: "체계적이고 구조화된 환경", type: BrainType.OWL },
      { label: "속도감 있고 활기찬 환경", type: BrainType.CHEETAH },
      { label: "혁신과 브레인스토밍을 장려하는 공간", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 15,
    text: "당신이 가장 좋아하는 업무는 다음 중 무엇인가?",
    options: [
      { label: "신체적 도전이나 경쟁적 업무", type: BrainType.CHEETAH },
      { label: "새로운 제품이나 콘셉트의 설계", type: BrainType.DOLPHIN },
      { label: "팀을 이끌거나 집단토론을 진행하는 일", type: BrainType.ELEPHANT },
      { label: "수집한 데이터의 심층 분석", type: BrainType.OWL },
    ]
  },
  {
    id: 16,
    text: "당신은 평소 스트레스를 어떻게 처리하는가?",
    options: [
      { label: "스트레스의 원인을 해결할 계획을 세운다.", type: BrainType.OWL },
      { label: "믿을 수 있는 사람과 의논한다.", type: BrainType.ELEPHANT },
      { label: "긴장을 풀기 위해 신체 활동을 한다.", type: BrainType.CHEETAH },
      { label: "감정을 표출할 배출구를 창의적으로 찾아본다.", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 17,
    text: "휴가를 계획할 때 당신이 선호하는 방식은 무엇인가?",
    options: [
      { label: "미리 상세한 여행 일정을 짠다.", type: BrainType.OWL },
      { label: "가볼 만한 매력적인 장소가 많은 여행지를 선택한다.", type: BrainType.DOLPHIN },
      { label: "최소한의 계획으로 모험을 떠난다.", type: BrainType.CHEETAH },
      { label: "단체로 가서 대부분 시간을 함께 보낸다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 18,
    text: "당신의 어떤 유형의 영화나 TV 프로그램을 가장 좋아하는가?",
    options: [
      { label: "액션이나 스릴러", type: BrainType.CHEETAH },
      { label: "추리극이나 범죄 드라마", type: BrainType.OWL },
      { label: "SF나 판타지", type: BrainType.DOLPHIN },
      { label: "캐릭터 관계가 강한 드라마나 코미디", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 19,
    text: "당신의 시간 관리 방식을 가장 잘 설명하는 문장은 무엇인가?",
    options: [
      { label: "어떤 아이디어들은 일정에 차질을 줄 수 있음을 이해하고 개의치 않는다.", type: BrainType.DOLPHIN },
      { label: "일단 일정을 정하면 그대로 지키기 위해 최선을 다한다.", type: BrainType.OWL },
      { label: "변화하는 우선순위에 유연하게 적응하는 것을 선호한다.", type: BrainType.CHEETAH },
      { label: "일정을 지키는 가장 좋은 방법은 업무를 분산시키는 것이다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 20,
    text: "개인적 성장에 대한 당신의 접근 방식을 가장 잘 묘사하는 것은 무엇인가?",
    options: [
      { label: "항상 새로운 업무 처리 방식을 고려한다.", type: BrainType.DOLPHIN },
      { label: "돈독한 관계를 형성하고 다른 사람들로부터 배운다.", type: BrainType.ELEPHANT },
      { label: "도전을 받아들이고 한계를 뛰어넘는다.", type: BrainType.CHEETAH },
      { label: "정기적으로 자신의 강점과 약점을 분석하여 개선할 부분을 찾는다.", type: BrainType.OWL },
    ]
  },
];

export const BRAIN_TYPE_DETAILS: Record<BrainType, BrainTypeInfo> = {
  [BrainType.CHEETAH]: {
    type: BrainType.CHEETAH,
    name: "민첩한 치타",
    englishName: "Cheetah",
    color: "#FFD700",
    description: "신속한 사고와 뛰어난 적응력, 강한 직관을 가진 행동파입니다.",
    successCareers: ["영업 (Sales)", "이벤트 기획", "전문 스포츠", "스타트업 창업", "마케팅 실행"],
    readingStrategy: [
      "빠르게 훑어보기: 텍스트를 빠르게 스캔하며 핵심 사항, 제목, 키워드를 식별하세요.",
      "독서 목표 설정: 일정 시간 안에 몇 장을 읽을지 구체적인 목표를 세우세요.",
      "능동적인 읽기: 질문하고 예측하며 본인의 경험과 연결 지을 때 몰입도가 극대화됩니다."
    ],
    memoryStrategy: [
      "행동을 통한 학습: 체험 활동이나 실전 연습을 통해 기억력을 향상시키세요.",
      "시나리오 시각화: 정보를 실제 행동 상황으로 시각화하여 뇌에 각인시키세요.",
      "타인에게 가르치기: 배운 내용을 즉시 다른 사람에게 설명하며 지식을 확고히 하세요."
    ],
    decisionStrategy: [
      "직감의 신뢰: 신속한 결정이 필요한 상황에서 본능적인 직관을 적극 활용하세요.",
      "경험을 통한 보정: 행동 후 결과를 검토하고 접근법을 즉시 수정하며 배우세요."
    ],
    chemistry: {
      partner: "공감하는 코끼리 (Elephant)",
      partnerType: BrainType.ELEPHANT,
      synergy: "추진력과 조화의 결합",
      description: "치타의 폭발적인 추진력을 코끼리의 안정적인 지원과 공감 능력이 뒷받침할 때, 팀은 방향성을 잃지 않고 거대한 성과를 냅니다."
    },
    blindSpot: "속도 때문에 세부 사항을 놓치기 쉽습니다.",
    declaration: "나는 나의 폭발적인 에너지를 믿으며, 목표를 향해 거침없이 나아가는 실행의 화신이다.",
    recommendedAction: "오늘 당장 30분 이내에 끝낼 수 있는 가장 중요한 할 일 하나를 정하고 즉시 실행해 보세요!"
  },
  [BrainType.OWL]: {
    type: BrainType.OWL,
    name: "현명한 올빼미",
    englishName: "Owl",
    color: "#9370DB",
    description: "뛰어난 분석력과 논리적 사고, 세부 사항에 대한 강한 집중력을 가진 전략가입니다.",
    successCareers: ["회계 및 재무", "과학 연구", "소프트웨어 개발", "데이터 분석", "시스템 설계"],
    readingStrategy: [
      "개요 작성: 내용의 구조를 먼저 파악하여 정보의 흐름을 논리적으로 정리하세요.",
      "체계적인 메모: 요점을 간결하고 논리적인 위계로 정리하는 습관을 들이세요."
    ],
    memoryStrategy: [
      "기억술의 활용: 약어나 연상법을 통해 복잡한 정보를 구조화하세요.",
      "정보의 범주화: 정보를 논리적 그룹이나 계층 구조로 분류하여 정리하세요.",
      "간격을 둔 반복: 시간 간격을 늘려가며 반복 학습하여 장기 기억으로 전환하세요."
    ],
    decisionStrategy: [
      "문제의 세분화: 큰 문제를 작은 요소로 나누어 본질적인 원인을 파악하세요.",
      "객관적 평가: 분석 능력을 사용해 각 해결책의 장단점을 철저히 비교하세요."
    ],
    chemistry: {
      partner: "창의적인 돌고래 (Dolphin)",
      partnerType: BrainType.DOLPHIN,
      synergy: "논리와 영감의 조화",
      description: "올빼미의 정교한 시스템과 돌고래의 혁신적인 아이디어가 만나면, 현실 가능하면서도 세상을 놀라게 할 파괴적인 혁신이 탄생합니다."
    },
    blindSpot: "지나친 분석(Analysis Paralysis)으로 실행이 늦어질 수 있습니다.",
    declaration: "나는 명석한 지혜와 논리력을 활용하여, 복잡한 세상의 해답을 찾아내는 탐구자이다.",
    recommendedAction: "현재 해결이 안 되는 고민 하나를 마인드맵으로 그려보고, 논리적인 인과관계를 분석해 보세요."
  },
  [BrainType.DOLPHIN]: {
    type: BrainType.DOLPHIN,
    name: "창의적인 돌고래",
    englishName: "Dolphin",
    color: "#00BFFF",
    description: "혁신, 틀을 벗어난 사고, 강한 직관력이 특징인 창의적 비전가입니다.",
    successCareers: ["그래픽 디자인", "건축가", "작가 (Writer)", "광고 기획 (Creative Director)", "신제품 개발"],
    readingStrategy: [
      "비판적 패턴 찾기: 정보를 읽는 것을 넘어 서로 다른 아이디어 간의 숨겨진 패턴을 찾으세요.",
      "창의적 연결: 새로운 지식을 전혀 다른 분야의 아이디어와 연결하며 읽으세요."
    ],
    memoryStrategy: [
      "장면 시각화: 내용을 생생한 이미지나 영상으로 떠올리며 기억하세요.",
      "다감각 활용: 음악, 색상 등 다양한 감각적 요소를 학습에 통합하여 기억력을 강화하세요."
    ],
    decisionStrategy: [
      "스토리텔링: 정보를 이야기로 엮어 창의적으로 기억하고 타인에게 전달하세요.",
      "마인드맵 활용: 시각적 도구를 통해 복잡한 관계를 한눈에 파악하고 직관을 활용하세요."
    ],
    chemistry: {
      partner: "현명한 올빼미 (Owl)",
      partnerType: BrainType.OWL,
      synergy: "비전과 전략의 완성",
      description: "돌고래의 구속받지 않는 상상력을 올빼미가 현실적인 로드맵과 체계적인 전략으로 다듬어줄 때, 꿈은 현실이 됩니다."
    },
    blindSpot: "현실적인 제약 조건을 무시하거나 주의가 산만해질 수 있습니다.",
    declaration: "나는 무한한 상상력을 발휘하여, 세상에 새로운 가치와 영감을 전하는 비전가이다.",
    recommendedAction: "오늘 배운 지식 하나를 나만의 재미있는 스토리로 만들어 보거나, 그림으로 시각화해 보세요!"
  },
  [BrainType.ELEPHANT]: {
    type: BrainType.ELEPHANT,
    name: "공감하는 코끼리",
    englishName: "Elephant",
    color: "#3CB371",
    description: "높은 EQ와 타인에 대한 깊은 공감 능력, 조화로운 팀 플레이가 특징인 조력자입니다.",
    successCareers: ["인사 관리 (HR)", "교육 및 코칭", "심리 상담", "고객 서비스 매니저", "공공 사업"],
    readingStrategy: [
      "내용 토론: 다른 사람들과 의견을 나누며 지식을 내면화할 때 가장 잘 습득합니다.",
      "독서 일정 수립: 따로 집중할 시간을 고정적으로 확보하여 안정감을 유지하세요."
    ],
    memoryStrategy: [
      "스터디 그룹: 사회적 상호작용을 통해 정보를 공유할 때 기억이 더욱 강화됩니다.",
      "기억 궁전: 익숙한 장소나 사람과의 관계를 기억의 매개체로 활용하세요."
    ],
    decisionStrategy: [
      "협력과 합의: 다양한 관점을 수집하고 모두가 납득할 수 있는 지속 가능한 해결책을 찾으세요.",
      "공감 기반 판단: 상황이 사람들에게 미칠 영향을 고려하여 따뜻한 의사결정을 내리세요."
    ],
    chemistry: {
      partner: "민첩한 치타 (Cheetah)",
      partnerType: BrainType.CHEETAH,
      synergy: "안정성과 동력의 결합",
      description: "코끼리의 세심한 지원과 포용력이 치타의 저돌적인 성격과 결합하면, 팀 전체가 지치지 않고 목표를 완수하는 최고의 팀워크가 형성됩니다."
    },
    blindSpot: "변화에 소극적일 수 있으며 본인의 욕구보다 타인의 입장을 먼저 고려합니다.",
    declaration: "나는 흔들리지 않는 끈기와 포용력으로, 어떠한 어려움도 이겨내는 견고한 실천가이다.",
    recommendedAction: "가장 친한 사람 한 명에게 오늘 배운 핵심 내용을 5분 동안 친절하게 설명해 주는 시간을 가져 보세요."
  },
};
