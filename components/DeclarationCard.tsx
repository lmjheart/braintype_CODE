
import React from 'react';
import { BrainTypeInfo } from '../types';
import { Award, ShieldCheck } from 'lucide-react';

interface DeclarationCardProps {
  userName: string;
  typeInfo: BrainTypeInfo;
  customCommitment: string;
  cardRef: React.RefObject<HTMLDivElement>;
}

const DeclarationCard: React.FC<DeclarationCardProps> = ({ userName, typeInfo, customCommitment, cardRef }) => {
  return (
    <div 
      ref={cardRef}
      // limitless-card-container 클래스는 캡처 로직에서 높이 제어를 위해 사용됩니다.
      className="limitless-card-container relative w-full max-w-[340px] h-auto min-h-[600px] rounded-[3.5rem] bg-white border-8 flex flex-col transition-all duration-500 shadow-2xl overflow-visible"
      style={{ borderColor: `${typeInfo.color}22` }}
    >
      {/* 배경 오버레이 효과 */}
      <div className="absolute top-0 right-0 w-64 h-64 blur-[80px] opacity-20 pointer-events-none rounded-full" style={{ backgroundColor: typeInfo.color }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 blur-[80px] opacity-10 pointer-events-none rounded-full" style={{ backgroundColor: typeInfo.color }} />
      
      <div className="relative z-10 p-8 flex flex-col items-center text-center w-full">
        {/* 상단 인증 마크 */}
        <div className="flex justify-between w-full mb-6">
          <div className="flex items-center gap-1 opacity-40">
            <ShieldCheck size={14} className="text-gray-400" />
            <span className="text-[8px] font-black uppercase tracking-tighter text-gray-400">Limitless Protocol</span>
          </div>
          <div className="opacity-40">
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">Certified Mastery</span>
          </div>
        </div>

        <div className="mb-6">
          <span className="text-[11px] font-black tracking-[0.3em] text-gray-400 uppercase block mb-1">Elite Brain Profile</span>
          <h2 className="text-4xl font-black italic tracking-tighter leading-none" style={{ color: typeInfo.color }}>
            {typeInfo.englishName}
          </h2>
        </div>

        {/* 메인 엠블럼 */}
        <div 
          className="w-24 h-24 rounded-[2.5rem] flex items-center justify-center mb-8 text-white text-5xl font-black relative shadow-xl flex-shrink-0"
          style={{ 
            backgroundColor: typeInfo.color,
            boxShadow: `0 15px 30px -5px ${typeInfo.color}66`
          }}
        >
          {typeInfo.englishName.charAt(0)}
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-lg border-2 border-gray-50">
            <Award size={24} style={{ color: typeInfo.color }} />
          </div>
        </div>

        {/* 선언 본문 */}
        <div className="mb-8 w-full">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[1px] w-6 bg-gray-200" />
            <h3 className="text-xl font-black text-gray-900">{userName}님의 선언</h3>
            <div className="h-[1px] w-6 bg-gray-200" />
          </div>
          <p className="text-[14px] font-bold text-gray-600 leading-relaxed italic break-keep px-2">
            "{typeInfo.declaration}"
          </p>
        </div>

        {/* 마스터리 다짐 각인 (가변 높이 핵심 수정) */}
        {customCommitment && (
          <div 
            className="w-full bg-gray-50/70 p-6 rounded-[2.2rem] border-2 border-dashed relative mb-8 flex flex-col items-center" 
            style={{ borderColor: `${typeInfo.color}33` }}
          >
            <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none" style={{ color: typeInfo.color }}>
              <ShieldCheck size={60} />
            </div>
            <span className="absolute -top-3 left-6 bg-white px-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Mastery Commitment</span>
            <div className="text-[15px] font-black text-gray-800 leading-relaxed relative z-10 text-center whitespace-pre-wrap break-words w-full">
              {customCommitment}
            </div>
            <div className="mt-5 pt-4 border-t border-gray-200 flex justify-between items-center w-full">
               <span className="text-[9px] font-black text-gray-300 italic uppercase">Certified Action</span>
               <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: typeInfo.color }} />
                  <span className="text-[11px] font-black text-gray-800 italic underline decoration-2" style={{ textDecorationColor: typeInfo.color }}>{userName}</span>
               </div>
            </div>
          </div>
        )}

        {/* 푸터 (하단 여백 확보) */}
        <div className="mt-auto pt-6 pb-2 border-t border-gray-100 w-full">
          <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.2em]">"Becoming the hero of your own story"</p>
        </div>
      </div>
    </div>
  );
};

export default DeclarationCard;
