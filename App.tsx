
import React, { useState } from 'react';
import HistoryTimeline from './components/HistoryTimeline';
import CharacterCard from './components/CharacterCard';
import { Character } from './types';

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 bg-[#f8f5f0]">
      {/* Header - 紧凑化 */}
      <header className="bg-stone-900 text-white py-8 px-10 shadow-xl z-[60] border-b-2 border-amber-600">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-serif-zh font-bold tracking-[0.2em] text-amber-500 drop-shadow-md">
              三国风云志
            </h1>
            <p className="mt-3 text-stone-300 max-w-4xl text-lg leading-relaxed font-light font-serif-zh italic">
              “天下大势，合久必分，分久必合。” 
              <span className="text-amber-500 font-bold inline-block ml-4 text-sm not-italic tracking-wider opacity-80">
                全景式交互时间轴 · 公元184年 — 280年
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-inner">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-sm"></div><span className="text-xs font-bold tracking-widest opacity-80">曹魏</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-600 rounded-sm"></div><span className="text-xs font-bold tracking-widest opacity-80">蜀汉</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-600 rounded-sm"></div><span className="text-xs font-bold tracking-widest opacity-80">孙吴</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-cyan-600 rounded-sm"></div><span className="text-xs font-bold tracking-widest opacity-80">西晋</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-stone-500 rounded-sm"></div><span className="text-xs font-bold tracking-widest opacity-80">群雄</span></div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        <HistoryTimeline 
          onCharacterSelect={setSelectedCharacter} 
          selectedCharId={selectedCharacter?.id}
        />
        
        {/* Detail Overlay - 最高层级 z-600 */}
        <CharacterCard 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      </main>

      {/* Footer - 紧凑化 */}
      <footer className="bg-stone-950 border-t border-amber-900/30 py-6 text-center text-stone-600">
        <div className="max-w-7xl mx-auto px-10">
          <p className="mb-2 text-stone-500 font-serif-zh italic text-base opacity-70">“大江东去，浪淘尽，千古风流人物。”</p>
          <div className="flex justify-center gap-6 text-[8px] uppercase tracking-[0.3em] opacity-30">
            <span>Historical Data Source: San Guo Zhi</span>
            <span>Digital Archive Project © 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
