
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
      className="relative w-full max-w-[340px] aspect-[4/5.6] rounded-[3.5rem] overflow-hidden shadow-2xl bg-white border-8 flex flex-col transition-all duration-500 limitless-card-glow"
      style={{ borderColor: `${typeInfo.color}22` }}
    >
      {/* 프리미엄 그라데이션 오버레이 */}
      <div className="absolute top-0 right-0 w-64 h-64 blur-[80px] opacity-30" style={{ backgroundColor: typeInfo.color }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 blur-[80px] opacity-20" style={{ backgroundColor: typeInfo.color }} />
      
      <div className="relative z-10 p-8 flex flex-col h-full items-center text-center">
        {/* 상단 인증 마크 */}
        <div className="flex justify-between w-full mb-4">
          <div className="flex items-center gap-1 opacity-40">
            <ShieldCheck size={14} className="text-gray-400" />
            <span className="text-[8px] font-black uppercase tracking-tighter text-gray-400">Limitless Protocol</span>
          </div>
          <div className="opacity-40">
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">Verified by Jim Kwik Model</span>
          </div>
        </div>

        <div className="mb-4">
          <span className="text-[11px] font-black tracking-[0.3em] text-gray-400 uppercase block mb-1">Elite Brain Profile</span>
          <h2 className="text-4xl font-black italic tracking-tighter leading-none" style={{ color: typeInfo.color }}>
            {typeInfo.englishName}
          </h2>
        </div>

        {/* 메인 엠블럼 */}
        <div 
          className="w-24 h-24 rounded-[2.5rem] flex items-center justify-center mb-6 text-white text-5xl font-black relative group"
          style={{ 
            backgroundColor: typeInfo.color,
            boxShadow: `0 20px 40px -10px ${typeInfo.color}88`
          }}
        >
          {typeInfo.englishName.charAt(0)}
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-lg border-2 border-gray-50">
            <Award size={24} style={{ color: typeInfo.color }} />
          </div>
        </div>

        {/* 선언 본문 */}
        <div className="flex-1 flex flex-col justify-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-6 bg-gray-200" />
            <h3 className="text-xl font-black text-gray-900">{userName}님의 선언</h3>
            <div className="h-[1px] w-6 bg-gray-200" />
          </div>
          <p className="text-[14px] font-bold text-gray-600 leading-relaxed italic break-keep px-4">
            "{typeInfo.declaration}"
          </p>
        </div>

        {/* 마스터리 다짐 각인 */}
        {customCommitment && (
          <div className="w-full bg-gray-50 p-6 rounded-[2.2rem] border-2 border-dashed relative mb-2 overflow-hidden" style={{ borderColor: `${typeInfo.color}44` }}>
            <div className="absolute top-0 right-0 p-2 opacity-5" style={{ color: typeInfo.color }}>
              <ShieldCheck size={60} />
            </div>
            <span className="absolute -top-3 left-6 bg-white px-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Mastery Commitment</span>
            <p className="text-[14px] font-black text-gray-800 leading-snug break-keep relative z-10">
              {customCommitment}
            </p>
            <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center">
               <span className="text-[9px] font-black text-gray-300 italic uppercase">Certified Action</span>
               <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: typeInfo.color }} />
                  <span className="text-[11px] font-black text-gray-800 italic underline decoration-2" style={{ textDecorationColor: typeInfo.color }}>{userName}</span>
               </div>
            </div>
          </div>
        )}

        {/* 푸터 */}
        <div className="mt-auto pt-4 border-t border-gray-100 w-full">
          <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.2em]">"Becoming the hero of your own story"</p>
        </div>
      </div>
    </div>
  );
};

export default DeclarationCard;
