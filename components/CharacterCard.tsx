
import React from 'react';
import { Character, Kingdom } from '../types';

interface Props {
  character: Character | null;
  onClose: () => void;
}

const CharacterCard: React.FC<Props> = ({ character, onClose }) => {
  if (!character) return null;

  const getKingdomStyle = (k: Kingdom) => {
    switch (k) {
      case Kingdom.WEI: return { label: '曹魏', color: 'bg-blue-600', text: 'text-blue-800' };
      case Kingdom.SHU: return { label: '蜀汉', color: 'bg-red-600', text: 'text-red-800' };
      case Kingdom.WU: return { label: '孙吴', color: 'bg-emerald-600', text: 'text-emerald-800' };
      case Kingdom.JIN: return { label: '西晋', color: 'bg-cyan-600', text: 'text-cyan-800' };
      default: return { label: '群雄', color: 'bg-stone-600', text: 'text-stone-800' };
    }
  };

  const style = getKingdomStyle(character.kingdom);

  return (
    <div className="fixed inset-y-0 right-0 w-[400px] bg-white shadow-[-40px_0_100px_rgba(0,0,0,0.3)] z-[600] flex flex-col animate-in slide-in-from-right duration-300 overflow-hidden border-l border-stone-100">
      {/* 顶部彩色装饰 */}
      <div className={`h-2 ${style.color} w-full`} />
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-[#fdfdfc]">
        <div className="flex justify-between items-start mb-8">
          <header className="flex-1">
            <div className="flex items-center gap-3 mb-4">
               <span className={`text-[10px] px-3 py-0.5 rounded-full font-bold tracking-widest ${style.color} text-white shadow-sm`}>
                 {style.label}
               </span>
               <span className="text-stone-400 text-[9px] tracking-tight font-mono opacity-50">
                 ARCHIVE: {character.id.toUpperCase()}
               </span>
            </div>
            <h2 className="text-5xl font-serif-zh font-bold text-stone-900 tracking-tighter mb-4 leading-none">
              {character.name}
            </h2>
            <div className="flex items-center gap-4 text-stone-500 font-serif-zh italic text-lg">
              公元 {character.birthYear} — {character.deathYear}
              <span className="bg-stone-800 text-stone-50 px-2 py-0.5 rounded text-xs not-italic font-sans font-bold">
                终年 {character.deathYear - character.birthYear} 岁
              </span>
            </div>
          </header>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-lg transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-300 group-hover:text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-10">
          {/* 外貌形象专栏 - 维持超大字号 */}
          <section className="relative group">
             <div className="absolute -top-6 -left-6 text-amber-600/5 text-[12rem] font-serif-zh select-none pointer-events-none">
               貌
             </div>
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3 relative z-10">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
              容貌姿表
            </h3>
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm relative overflow-hidden">
               <p className="text-stone-800 leading-[2.2] text-[1.65rem] font-serif-zh italic relative z-10 text-justify">
                {character.appearance}
              </p>
            </div>
          </section>

          {/* 生平功业 - 极大字号，压缩外部Padding */}
          <section>
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
              生平功业
            </h3>
            <p className="text-stone-700 leading-[2.2] text-justify text-[1.65rem] font-light font-serif-zh">
              {character.description}
            </p>
          </section>

          {/* 史书评传板块 */}
          <section className="bg-stone-900 p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <h3 className="text-amber-500 text-[8px] font-bold tracking-[0.4em] uppercase mb-6 border-b border-white/5 pb-4 flex items-center gap-2">
              <div className="w-1 h-1 bg-amber-500 rounded-full" />
              《三国志》原著评传
            </h3>
            <p className="text-white font-serif-zh text-2xl leading-[2] italic opacity-95 relative z-10">
              “{character.sanguozhiQuote}”
            </p>
          </section>
        </div>
      </div>

      <footer className="px-8 py-6 bg-white border-t border-stone-50 flex justify-between items-center">
        <div className="text-stone-400 text-[8px] tracking-[0.3em] font-bold opacity-40">
          THREE KINGDOMS DIGITAL ARCHIVE
        </div>
        <div className="text-stone-300 font-serif-zh italic text-xl">
          千古风流
        </div>
      </footer>
    </div>
  );
};

export default CharacterCard;
