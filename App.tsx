
import React, { useState } from 'react';
import HistoryTimeline from './components/HistoryTimeline';
import CharacterCard from './components/CharacterCard';
import { Character } from './types';

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 bg-[#f8f5f0]">
      {/* Header - 整体缩小 */}
      <header className="bg-stone-900 text-white py-4 px-8 shadow-lg z-[60] border-b border-amber-600">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif-zh font-bold tracking-[0.1em] text-amber-500">
              三国风云志
            </h1>
            <p className="text-stone-400 text-xs font-serif-zh italic opacity-80">
              “天下大势，合久必分，分久必合。” — 公元184年至280年
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold">
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></div>魏</div>
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-red-600 rounded-sm"></div>蜀</div>
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-emerald-600 rounded-sm"></div>吴</div>
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-cyan-600 rounded-sm"></div>晋</div>
          </div>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden">
        <HistoryTimeline 
          onCharacterSelect={setSelectedCharacter} 
          selectedCharId={selectedCharacter?.id}
        />
        <CharacterCard 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      </main>

      <footer className="bg-stone-950 py-3 text-center border-t border-amber-900/20">
        <p className="text-stone-600 text-[10px] font-serif-zh italic tracking-widest uppercase">
          Digital Archive Project © 2025 · 三国志
        </p>
      </footer>
    </div>
  );
};

export default App;
