
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
      case Kingdom.WEI: return { label: '曹魏', color: 'bg-blue-600' };
      case Kingdom.SHU: return { label: '蜀汉', color: 'bg-red-600' };
      case Kingdom.WU: return { label: '孙吴', color: 'bg-emerald-600' };
      case Kingdom.JIN: return { label: '西晋', color: 'bg-cyan-600' };
      default: return { label: '群雄', color: 'bg-stone-600' };
    }
  };

  const style = getKingdomStyle(character.kingdom);

  return (
    <div className="fixed inset-y-0 right-0 w-[320px] bg-white shadow-2xl z-[600] flex flex-col animate-in slide-in-from-right duration-300 border-l border-stone-100">
      <div className={`h-1.5 ${style.color} w-full`} />
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-[#fdfdfc]">
        <div className="flex justify-between items-start mb-6">
          <header className="flex-1">
            <div className="flex items-center gap-2 mb-2">
               <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold tracking-wider ${style.color} text-white`}>
                 {style.label}
               </span>
            </div>
            <h2 className="text-3xl font-serif-zh font-bold text-stone-900 tracking-tight mb-2">
              {character.name}
            </h2>
            <div className="text-stone-500 font-serif-zh italic text-sm">
              公元 {character.birthYear} — {character.deathYear}
              <span className="ml-3 bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded text-[10px] not-italic font-sans font-bold">
                终年 {character.deathYear - character.birthYear} 岁
              </span>
            </div>
          </header>
          <button onClick={onClose} className="p-1 hover:bg-stone-100 rounded text-stone-300 hover:text-stone-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-bold text-stone-900 mb-2 border-l-4 border-amber-500 pl-2">容貌姿表</h3>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
               <p className="text-stone-800 leading-relaxed text-sm font-serif-zh italic text-justify">
                {character.appearance}
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold text-stone-900 mb-2 border-l-4 border-amber-500 pl-2">生平功业</h3>
            <p className="text-stone-700 leading-relaxed text-sm font-serif-zh text-justify">
              {character.description}
            </p>
          </section>

          <section className="bg-stone-900 p-5 rounded-2xl shadow-lg">
            <h4 className="text-amber-500 text-[9px] font-bold tracking-widest uppercase mb-3 opacity-80">《三国志》原著评传</h4>
            <p className="text-white font-serif-zh text-base leading-relaxed italic opacity-90">
              “{character.sanguozhiQuote}”
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
