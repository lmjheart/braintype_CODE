
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import { BrainType, Step, DiagnosticResult } from './types';
import { QUESTIONS, BRAIN_TYPE_DETAILS } from './constants';
import Button from './components/Button';
import Progress from './components/Progress';
import DeclarationCard from './components/DeclarationCard';
import { 
  Download, 
  RefreshCw, 
  BrainCircuit, 
  BarChart3, 
  Edit3, 
  Sparkles,
  Target,
  Zap,
  Lightbulb,
  Award,
  Briefcase,
  Users2,
  ArrowRightLeft
} from 'lucide-react';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('SPLASH');
  const [userName, setUserName] = useState('');
  const [customCommitment, setCustomCommitment] = useState('');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<(BrainType | null)[]>(new Array(QUESTIONS.length).fill(null));
  const [diagnosticData, setDiagnosticData] = useState<DiagnosticResult | null>(null);
  const [showCard, setShowCard] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const cardAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showCard && cardAreaRef.current) {
      setTimeout(() => {
        cardAreaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [showCard]);

  const calculateResult = () => {
    const counts = answers.reduce((acc, type) => {
      if (type) acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {
      [BrainType.CHEETAH]: 0,
      [BrainType.OWL]: 0,
      [BrainType.DOLPHIN]: 0,
      [BrainType.ELEPHANT]: 0
    } as Record<BrainType, number>);

    const sortedTypes = (Object.keys(counts) as BrainType[]).sort((a, b) => counts[b] - counts[a]);
    
    setDiagnosticData({
      primary: BRAIN_TYPE_DETAILS[sortedTypes[0]],
      secondary: BRAIN_TYPE_DETAILS[sortedTypes[1]],
      scores: counts
    });

    setStep('LOADING');
    setTimeout(() => {
      setStep('RESULT');
      window.scrollTo(0, 0);
    }, 2000);
  };

  const handleSelectOption = (type: BrainType) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIdx] = type;
    setAnswers(newAnswers);
    
    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQuestionIdx(prev => prev + 1), 300);
    }
  };

  const handleFinalCommitment = () => {
    if (!customCommitment.trim() || customCommitment.length < 5) {
      alert('당신을 변화시킬 다짐을 5자 이상 정성껏 입력해주세요!');
      return;
    }
    
    setIsProcessing(true);
    setTimeout(() => {
      setShowCard(true);
      setIsProcessing(false);
    }, 600);
  };

  const saveAsImage = async () => {
    if (!cardRef.current) return;
    try {
      // 캡처 시 요소의 전체 높이를 반영하기 위해 window의 스크롤 위치를 고려하거나 요소를 복제하지 않고 직접 캡처
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff", // 투명 방지 및 흰색 배경 강제
        scrollY: -window.scrollY, // 스크롤 위치에 따른 잘림 방지
        windowHeight: cardRef.current.scrollHeight + 100 // 여유 높이 확보
      });
      const link = document.createElement('a');
      link.download = `${userName}_Limitless_Brain_Card.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error(err);
      alert('이미지 저장 중 오류가 발생했습니다.');
    }
  };

  const resetTest = () => {
    setStep('SPLASH');
    setUserName('');
    setCustomCommitment('');
    setCurrentQuestionIdx(0);
    setAnswers(new Array(QUESTIONS.length).fill(null));
    setDiagnosticData(null);
    setShowCard(false);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white shadow-2xl relative overflow-x-hidden font-['Pretendard']">
      <AnimatePresence mode="wait">
        {step === 'SPLASH' && (
          <motion.div key="splash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="w-24 h-24 bg-indigo-600 rounded-[2.2rem] flex items-center justify-center text-white mb-10 shadow-2xl">
              <BrainCircuit size={52} />
            </motion.div>
            <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight">마지막 몰입<br/><span className="text-indigo-600">뇌 유형 진단</span></h1>
            <p className="text-gray-500 mb-12 font-medium">당신 안에 잠든 슈퍼브레인을 깨우는<br/>C.O.D.E 시스템</p>
            <Button size="lg" fullWidth onClick={() => setStep('NAME_INPUT')} className="h-16 text-xl">나의 한계 돌파하기</Button>
          </motion.div>
        )}

        {step === 'NAME_INPUT' && (
          <motion.div key="name_input" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col justify-center p-8 min-h-screen">
            <h2 className="text-3xl font-black text-gray-800 mb-4">반갑습니다!</h2>
            <p className="text-gray-500 mb-10 font-medium text-lg">마스터리 선언서에 각인될<br/><span className="text-indigo-600 font-bold">당신의 이름</span>은 무엇인가요?</p>
            <input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              placeholder="예: 홍길동" 
              className="w-full px-7 py-5 rounded-2xl border-2 border-gray-100 focus:border-indigo-500 outline-none text-2xl font-bold bg-gray-50 mb-12 transition-all"
              autoFocus
            />
            <Button size="lg" fullWidth disabled={!userName.trim()} onClick={() => setStep('QUIZ')} className="h-16 shadow-indigo-100">다음 단계로</Button>
          </motion.div>
        )}

        {step === 'QUIZ' && (
          <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col p-6 min-h-screen">
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4 px-1">
                <span className="text-sm font-black text-indigo-600 uppercase tracking-widest">Question {currentQuestionIdx + 1}</span>
                <span className="text-xs text-gray-400 font-bold">{currentQuestionIdx + 1} / {QUESTIONS.length}</span>
              </div>
              <Progress current={currentQuestionIdx + 1} total={QUESTIONS.length} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-black text-gray-800 mb-12 break-keep leading-tight">{QUESTIONS[currentQuestionIdx].text}</h3>
              <div className="space-y-4">
                {QUESTIONS[currentQuestionIdx].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSelectOption(opt.type)}
                    className={`w-full p-6 text-left rounded-[1.5rem] border-2 transition-all flex items-center gap-5 relative overflow-hidden group ${
                      answers[currentQuestionIdx] === opt.type 
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100' 
                        : 'bg-white border-gray-100 hover:border-indigo-200'
                    }`}
                  >
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs ${
                      answers[currentQuestionIdx] === opt.type ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400 group-hover:text-indigo-500'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="font-bold flex-1 leading-snug">{opt.label}</span>
                    {answers[currentQuestionIdx] === opt.type && <Sparkles size={18} className="animate-pulse" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Button variant="secondary" onClick={() => setCurrentQuestionIdx(Math.max(0, currentQuestionIdx - 1))} disabled={currentQuestionIdx === 0} className="flex-1 h-14 rounded-2xl">이전</Button>
              <Button onClick={() => currentQuestionIdx === QUESTIONS.length - 1 ? calculateResult() : setCurrentQuestionIdx(currentQuestionIdx + 1)} disabled={!answers[currentQuestionIdx]} className="flex-[2] h-14 rounded-2xl">
                {currentQuestionIdx === QUESTIONS.length - 1 ? '데이터 분석 결과 보기' : '다음'}
              </Button>
            </div>
          </motion.div>
        )}

        {step === 'LOADING' && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-20 h-20 border-[6px] border-indigo-50 border-t-indigo-600 rounded-full mb-8" />
            <h2 className="text-2xl font-black text-gray-800 mb-2">지능 시스템 분석 중...</h2>
            <p className="text-gray-400 font-medium italic">"우리는 우리의 한계를 스스로 결정한다."</p>
          </motion.div>
        )}

        {step === 'RESULT' && diagnosticData && (
          <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col pb-24">
            <div className="p-10 pt-20 text-center text-white relative overflow-hidden" style={{ backgroundColor: diagnosticData.primary.color }}>
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative z-10">
                <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest mb-4 border border-white/30">PRIMARY BRAIN TYPE</div>
                <h2 className="text-5xl font-black mb-5 drop-shadow-md">{diagnosticData.primary.name}</h2>
                <div className="max-w-[280px] mx-auto bg-black/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <p className="text-[14px] font-bold leading-relaxed">{diagnosticData.primary.description}</p>
                </div>
              </div>
            </div>

            <div className="px-6 -mt-8 relative z-20 space-y-10">
              {/* 1. 지능 시스템 밸런스 */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-black text-gray-800 mb-8 flex items-center gap-2"><BarChart3 size={22} className="text-indigo-600" /> 지능 시스템 밸런스</h3>
                <div className="space-y-6">
                  {(Object.entries(diagnosticData.scores) as [BrainType, number][]).map(([type, score]) => (
                    <div key={type} className="space-y-2">
                      <div className="flex justify-between text-[11px] font-black text-gray-400 uppercase tracking-tighter">
                        <span>{BRAIN_TYPE_DETAILS[type].englishName}</span>
                        <span style={{ color: BRAIN_TYPE_DETAILS[type].color }}>{score} pts</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${(score/20)*100}%` }} transition={{ duration: 1.5 }} className="h-full rounded-full" style={{ backgroundColor: BRAIN_TYPE_DETAILS[type].color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* [순서변경] 2. 커리어 성공 로드맵 */}
              <div className="bg-indigo-50 rounded-[2.5rem] p-9 border border-indigo-100 shadow-inner">
                <h3 className="text-xl font-black text-indigo-900 mb-8 flex items-center gap-3"><Briefcase size={22} /> 커리어 성공 로드맵</h3>
                <div className="grid grid-cols-1 gap-4">
                  <p className="text-sm font-bold text-indigo-700/70 mb-2 leading-relaxed break-keep">이 유형은 창의적인 사고와 분석적 태도가 결합되어 아래 분야에서 최고의 성과를 냅니다.</p>
                  <div className="flex flex-wrap gap-2">
                    {diagnosticData.primary.successCareers.map((job, idx) => (
                      <span key={idx} className="px-4 py-2.5 bg-white rounded-xl text-sm font-black text-indigo-600 shadow-sm border border-indigo-100">
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* [순서변경] 3. 베스트 시너지 관계 */}
              <div className="bg-white rounded-[2.5rem] p-9 shadow-xl border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 opacity-50" />
                <h3 className="text-xl font-black text-gray-800 mb-8 flex items-center gap-3"><Users2 size={22} className="text-indigo-600" /> 베스트 시너지 관계</h3>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg" style={{ backgroundColor: diagnosticData.primary.color }}>
                    {diagnosticData.primary.name.charAt(4)}
                  </div>
                  <ArrowRightLeft size={24} className="text-gray-300 animate-pulse" />
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg" style={{ backgroundColor: BRAIN_TYPE_DETAILS[diagnosticData.primary.chemistry.partnerType].color }}>
                    {BRAIN_TYPE_DETAILS[diagnosticData.primary.chemistry.partnerType].name.charAt(4)}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
                    <span className="text-indigo-600">[{diagnosticData.primary.chemistry.synergy}]</span>
                  </h4>
                  <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[14px] font-bold text-gray-600 leading-relaxed break-keep">
                      <span className="text-indigo-600 font-black">{diagnosticData.primary.name}</span>와 <span className="font-black" style={{ color: BRAIN_TYPE_DETAILS[diagnosticData.primary.chemistry.partnerType].color }}>{diagnosticData.primary.chemistry.partner}</span>는 서로의 사각지대를 보완하는 환상의 콤비입니다. {diagnosticData.primary.chemistry.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* [순서변경] 4. 브레인 마스터 전략 */}
              <div className="bg-white rounded-[2.5rem] p-9 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-black text-gray-800 mb-12 text-center underline decoration-indigo-100 decoration-8 underline-offset-[-2px]">브레인 마스터 전략</h3>
                <div className="space-y-14">
                  <StrategyBlock icon={<Target size={22}/>} title="리미트리스 독서법" list={diagnosticData.primary.readingStrategy} color="orange" />
                  <StrategyBlock icon={<Zap size={22}/>} title="합리적인 의사결정" list={diagnosticData.primary.decisionStrategy} color="green" />
                  <StrategyBlock icon={<RefreshCw size={22}/>} title="기억력 마스터 훈련" list={diagnosticData.primary.memoryStrategy} color="blue" />
                </div>
              </div>

              {/* 5. 실천 다짐 섹션 */}
              <div className="bg-slate-950 rounded-[3rem] p-9 text-white text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-3"><Edit3 size={32} /></div>
                
                <h3 className="text-2xl font-black mb-3">마지막 몰입을 위한<br/>하나의 다짐</h3>
                <p className="text-slate-500 text-xs mb-8 italic">"생각을 문장으로 옮길 때 변화는 시작됩니다."</p>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 text-left relative overflow-hidden group">
                  <div className="flex items-center gap-2 mb-2 text-yellow-400">
                    <Lightbulb size={16} className="animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-widest">실천 가이드</span>
                  </div>
                  <p className="text-[14px] font-bold text-slate-200 leading-relaxed break-keep">
                    {diagnosticData.primary.recommendedAction}
                  </p>
                  <div className="absolute -bottom-2 -right-2 opacity-5 text-white transform rotate-12">
                     <Award size={80} />
                  </div>
                </div>

                <textarea 
                  value={customCommitment} 
                  onChange={(e) => setCustomCommitment(e.target.value)} 
                  placeholder="예: 오늘부터 매일 아침 일어나자마자 가장 중요한 일 하나(The One Thing)를 즉시 실행하겠다!" 
                  className="w-full h-36 px-6 py-5 rounded-3xl bg-white/5 border border-white/10 text-white font-bold outline-none focus:border-indigo-500 mb-8 resize-none placeholder-slate-700 text-lg transition-all"
                />

                <button 
                  onClick={handleFinalCommitment}
                  disabled={isProcessing}
                  className={`w-full py-6 rounded-[1.8rem] text-xl font-black shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 ${
                    isProcessing ? 'bg-indigo-800 opacity-70' : 'bg-indigo-600 hover:bg-indigo-500'
                  }`}
                >
                  {isProcessing ? '선언서 각인 중...' : '선언서 카드 발급'} <Sparkles size={24} className={isProcessing ? 'animate-spin' : ''} />
                </button>
              </div>

              {/* 최종 카드 노출 영역 */}
              <AnimatePresence>
                {showCard && (
                  <motion.div 
                    ref={cardAreaRef}
                    initial={{ opacity: 0, y: 100, scale: 0.9 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    className="flex flex-col items-center pt-16 border-t-2 border-dashed border-gray-200"
                  >
                    <div className="inline-block px-4 py-1.5 bg-yellow-400 text-black rounded-full text-[10px] font-black uppercase mb-8 shadow-lg shadow-yellow-100">Certificate of Limitless Brain</div>
                    
                    <DeclarationCard userName={userName} typeInfo={diagnosticData.primary} customCommitment={customCommitment} cardRef={cardRef} />
                    
                    <div className="w-full mt-16 px-4 space-y-4">
                      <Button fullWidth size="lg" onClick={saveAsImage} className="h-20 text-xl shadow-2xl bg-indigo-600 group">
                        <Download size={24} className="mr-3 group-hover:animate-bounce" /> 마스터리 선언서 저장하기
                      </Button>
                      <button onClick={resetTest} className="w-full py-6 text-gray-400 font-bold text-sm flex items-center justify-center gap-2 hover:text-indigo-600 transition-colors">
                        <RefreshCw size={18} /> 다시 진단하여 잠재력 탐색하기
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StrategyBlock = ({ icon, title, list, color }: any) => {
  const styles: any = {
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    green: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100'
  };
  return (
    <div className="group">
      <div className="flex items-center gap-4 mb-7">
        <div className={`w-12 h-12 rounded-[1.3rem] flex items-center justify-center border-2 transition-all group-hover:scale-110 group-hover:rotate-3 ${styles[color]}`}>{icon}</div>
        <h4 className="font-black text-gray-800 text-lg tracking-tight">{title}</h4>
      </div>
      <ul className="space-y-5 ml-2">
        {list.map((item: string, i: number) => (
          <li key={i} className="flex gap-4 items-start">
            <span className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 ${styles[color].split(' ')[1]}`} />
            <span className="text-[15px] text-gray-600 font-bold leading-relaxed break-keep">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
