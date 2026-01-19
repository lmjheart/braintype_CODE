
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import { BrainType, Step, DiagnosticResult } from './types';
import { QUESTIONS, BRAIN_TYPE_DETAILS } from './constants';
import Button from './components/Button';
import Progress from './components/Progress';
import DeclarationCard from './components/DeclarationCard';
import { 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  RefreshCw, 
  BrainCircuit, 
  BarChart3, 
  Edit3, 
  Sparkles,
  Target,
  Zap,
  Lightbulb,
  Award
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

  // 카드가 생성되면 해당 위치로 스크롤
  useEffect(() => {
    if (showCard && cardAreaRef.current) {
      cardAreaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      alert('변화를 위한 다짐을 5자 이상 입력해주세요!');
      return;
    }
    setIsProcessing(true);
    // 상태 업데이트 후 렌더링을 보장하기 위한 짧은 지연
    setTimeout(() => {
      setShowCard(true);
      setIsProcessing(false);
    }, 500);
  };

  const saveAsImage = async () => {
    if (!cardRef.current) return;
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: "#ffffff",
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = `${userName}_Limitless_Card.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      alert('이미지 저장에 실패했습니다. 다른 브라우저에서 시도해보세요.');
    }
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
            <p className="text-gray-500 mb-12 font-medium">당신의 잠재력을 깨우는 한계 돌파 시스템</p>
            <Button size="lg" fullWidth onClick={() => setStep('NAME_INPUT')} className="h-16 text-xl">시작하기</Button>
          </motion.div>
        )}

        {step === 'NAME_INPUT' && (
          <motion.div key="name_input" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col justify-center p-8 min-h-screen">
            <h2 className="text-3xl font-black text-gray-800 mb-4">반갑습니다!</h2>
            <p className="text-gray-500 mb-10 font-medium">선언서에 기록될 <span className="text-indigo-600 font-bold">당신의 이름</span>은 무엇인가요?</p>
            <input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              placeholder="이름 입력" 
              className="w-full px-6 py-5 rounded-2xl border-2 border-gray-100 focus:border-indigo-500 outline-none text-2xl font-bold bg-gray-50 mb-10"
              autoFocus
            />
            <Button size="lg" fullWidth disabled={!userName.trim()} onClick={() => setStep('QUIZ')} className="h-16">질문으로 넘어가기</Button>
          </motion.div>
        )}

        {step === 'QUIZ' && (
          <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col p-6 min-h-screen">
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4 px-1">
                <span className="text-sm font-black text-indigo-600 uppercase">Q {currentQuestionIdx + 1}</span>
                <span className="text-xs text-gray-400 font-bold">{currentQuestionIdx + 1} / {QUESTIONS.length}</span>
              </div>
              <Progress current={currentQuestionIdx + 1} total={QUESTIONS.length} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-black text-gray-800 mb-10 break-keep leading-tight">{QUESTIONS[currentQuestionIdx].text}</h3>
              <div className="space-y-4">
                {QUESTIONS[currentQuestionIdx].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSelectOption(opt.type)}
                    className={`w-full p-6 text-left rounded-[1.5rem] border-2 transition-all flex items-center gap-4 ${
                      answers[currentQuestionIdx] === opt.type ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white border-gray-100'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${answers[currentQuestionIdx] === opt.type ? 'bg-white/20' : 'bg-gray-100 text-gray-400'}`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="font-bold flex-1">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <Button variant="secondary" onClick={() => setCurrentQuestionIdx(Math.max(0, currentQuestionIdx - 1))} disabled={currentQuestionIdx === 0} className="flex-1">이전</Button>
              <Button onClick={() => currentQuestionIdx === QUESTIONS.length - 1 ? calculateResult() : setCurrentQuestionIdx(currentQuestionIdx + 1)} disabled={!answers[currentQuestionIdx]} className="flex-[2]">
                {currentQuestionIdx === QUESTIONS.length - 1 ? '결과 보기' : '다음'}
              </Button>
            </div>
          </motion.div>
        )}

        {step === 'LOADING' && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-20 h-20 border-8 border-indigo-50 border-t-indigo-600 rounded-full mb-8" />
            <h2 className="text-2xl font-black text-gray-800">지능 유형 분석 중...</h2>
          </motion.div>
        )}

        {step === 'RESULT' && diagnosticData && (
          <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col pb-20">
            {/* 상단 결과 헤더 */}
            <div className="p-10 pt-20 text-center text-white relative" style={{ backgroundColor: diagnosticData.primary.color }}>
              <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-[10px] font-black tracking-widest mb-4">PRIMARY BRAIN</div>
              <h2 className="text-5xl font-black mb-4 tracking-tighter">{diagnosticData.primary.name}</h2>
              <p className="text-white/90 font-bold max-w-[280px] mx-auto leading-relaxed">{diagnosticData.primary.description}</p>
            </div>

            <div className="px-6 -mt-8 relative z-10 space-y-8">
              {/* C.O.D.E 밸런스 */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-black text-gray-800 mb-8 flex items-center gap-2"><BarChart3 size={20} className="text-indigo-600" /> 지능 밸런스</h3>
                <div className="space-y-6">
                  {(Object.entries(diagnosticData.scores) as [BrainType, number][]).map(([type, score]) => (
                    <div key={type} className="space-y-2">
                      <div className="flex justify-between text-[11px] font-black text-gray-400">
                        <span>{BRAIN_TYPE_DETAILS[type].englishName}</span>
                        <span style={{ color: BRAIN_TYPE_DETAILS[type].color }}>{score} / 20</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${(score/20)*100}%` }} className="h-full" style={{ backgroundColor: BRAIN_TYPE_DETAILS[type].color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 브레인 마스터 전략 - 의사결정 포함 */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-black text-gray-800 mb-10 text-center underline decoration-indigo-200 underline-offset-8">브레인 마스터 전략</h3>
                <div className="space-y-12">
                  <StrategyBlock icon={<Target size={20}/>} title="리미트리스 독서법" list={diagnosticData.primary.readingStrategy} color="orange" />
                  <StrategyBlock icon={<Zap size={20}/>} title="합리적인 의사결정" list={diagnosticData.primary.decisionStrategy} color="green" />
                  <StrategyBlock icon={<RefreshCw size={20}/>} title="기억력 마스터 훈련" list={diagnosticData.primary.memoryStrategy} color="blue" />
                </div>
              </div>

              {/* 실천 다짐 섹션 - 임팩트 강화 */}
              <div className="bg-slate-900 rounded-[3rem] p-9 text-white text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 opacity-50" />
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"><Edit3 size={32} /></div>
                <h3 className="text-2xl font-black mb-2">마지막 몰입을 위한<br/>하나의 다짐</h3>
                <p className="text-slate-400 text-xs mb-8 italic">"작은 실천이 거대한 변화를 만듭니다."</p>

                {/* 뇌 유형별 실천 가이드 팁 */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 text-left">
                  <div className="flex items-center gap-2 mb-2 text-yellow-400">
                    <Lightbulb size={16} />
                    <span className="text-[11px] font-black uppercase tracking-tighter">실천 가이드</span>
                  </div>
                  <p className="text-[14px] font-bold text-slate-200 leading-snug break-keep">
                    {diagnosticData.primary.recommendedAction}
                  </p>
                </div>

                <textarea 
                  value={customCommitment} 
                  onChange={(e) => setCustomCommitment(e.target.value)} 
                  placeholder="예: 오늘부터 매일 아침 독서 15분을 실천하겠다!" 
                  className="w-full h-32 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold outline-none focus:border-indigo-500 mb-8 resize-none"
                />

                <button 
                  onClick={handleFinalCommitment}
                  disabled={isProcessing}
                  className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-xl font-black shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  {isProcessing ? '처리 중...' : '선언서 카드 발급'} <Sparkles size={24} />
                </button>
              </div>

              {/* 카드 결과 영역 */}
              <AnimatePresence>
                {showCard && (
                  <motion.div 
                    ref={cardAreaRef}
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="flex flex-col items-center pt-10"
                  >
                    <div className="inline-block px-4 py-1.5 bg-yellow-400 text-black rounded-full text-[10px] font-black uppercase mb-6 shadow-lg">Limitless Certificate</div>
                    <DeclarationCard userName={userName} typeInfo={diagnosticData.primary} customCommitment={customCommitment} cardRef={cardRef} />
                    
                    <div className="w-full mt-12 space-y-4 px-4">
                      <Button fullWidth size="lg" onClick={saveAsImage} className="h-16 text-xl shadow-xl"><Download size={22} className="mr-2"/> 이미지로 저장하기</Button>
                      <button onClick={() => setStep('SPLASH')} className="w-full py-4 text-gray-400 font-bold text-sm flex items-center justify-center gap-2"><RefreshCw size={16}/> 다시 진단하기</button>
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
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 ${styles[color]}`}>{icon}</div>
        <h4 className="font-black text-gray-800 text-[17px]">{title}</h4>
      </div>
      <ul className="space-y-4 ml-2">
        {list.map((item: string, i: number) => (
          <li key={i} className="flex gap-3 items-start">
            <span className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${styles[color].split(' ')[1]}`} />
            <span className="text-[14px] text-gray-600 font-bold leading-relaxed break-keep">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
