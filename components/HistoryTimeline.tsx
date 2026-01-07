
import React, { useMemo, useRef } from 'react';
import { Character, Kingdom } from '../types';
import { START_YEAR, END_YEAR, HISTORICAL_EVENTS, CHARACTERS } from '../constants';

interface Props {
  onCharacterSelect: (char: Character) => void;
  selectedCharId?: string;
}

const HistoryTimeline: React.FC<Props> = ({ onCharacterSelect, selectedCharId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 年份间距
  const pixelsPerYear = 85; 
  const timelineWidth = (END_YEAR - START_YEAR) * pixelsPerYear;

  const years = useMemo(() => {
    const arr = [];
    for (let i = START_YEAR; i <= END_YEAR; i++) {
      arr.push(i);
    }
    return arr;
  }, []);

  const sortedCharacters = useMemo(() => {
    return [...CHARACTERS].sort((a, b) => a.birthYear - b.birthYear || a.deathYear - b.deathYear);
  }, []);

  const getKingdomColor = (k: Kingdom) => {
    switch (k) {
      case Kingdom.WEI: return 'bg-blue-600 hover:bg-blue-500 ring-blue-300 shadow-blue-500/10';
      case Kingdom.SHU: return 'bg-red-600 hover:bg-red-500 ring-red-300 shadow-red-500/10';
      case Kingdom.WU: return 'bg-emerald-600 hover:bg-emerald-500 ring-emerald-300 shadow-emerald-500/10';
      case Kingdom.JIN: return 'bg-cyan-600 hover:bg-cyan-500 ring-cyan-300 shadow-cyan-500/10';
      default: return 'bg-stone-500 hover:bg-stone-400 ring-stone-300 shadow-stone-500/10';
    }
  };

  return (
    <div className="relative overflow-x-auto bg-[#fdfaf5] h-full scroll-smooth select-none custom-scrollbar" ref={containerRef}>
      <div 
        style={{ width: `${timelineWidth + 600}px` }}
        className="relative pt-12 pb-32 min-h-[1200px]"
      >
        {/* 1. 顶部年份刻度 - 移除滑块后的简洁版 */}
        <div className="sticky top-0 left-0 w-full h-16 bg-[#f4f1ea]/95 backdrop-blur-sm border-b-2 border-amber-600/20 z-[400] shadow-sm flex items-end pb-1">
          {years.map(year => (
            <div 
              key={year}
              style={{ left: `${(year - START_YEAR) * pixelsPerYear}px` }}
              className={`absolute bottom-0 border-l ${
                year % 10 === 0 ? 'border-stone-400 h-8 w-0.5' : 
                year % 5 === 0 ? 'border-stone-300 h-4' : 'border-stone-200 h-2'
              }`}
            >
              {year % 5 === 0 && (
                <span className={`absolute -top-10 left-1/2 -translate-x-1/2 font-serif-zh font-bold tracking-widest whitespace-nowrap ${
                  year % 10 === 0 ? 'text-lg text-stone-800' : 'text-xs text-stone-400'
                }`}>
                  {year}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 2. 垂直参考网格 */}
        {years.map(year => (year % 5 === 0) && (
          <div 
            key={`grid-${year}`}
            style={{ left: `${(year - START_YEAR) * pixelsPerYear}px` }}
            className={`absolute top-0 bottom-0 border-l ${year % 10 === 0 ? 'border-stone-200' : 'border-stone-100'} pointer-events-none z-0`}
          />
        ))}

        {/* 3. 历史主线 */}
        <div className="absolute top-[100px] left-0 w-full h-0.5 bg-stone-200 z-10" />

        {/* 4. 历史事件区 */}
        <div className="absolute top-[120px] left-0 w-full z-[40] pointer-events-none">
          <div className="relative h-[240px] px-10">
            {HISTORICAL_EVENTS.map((event, idx) => {
              const left = (event.year - START_YEAR) * pixelsPerYear;
              const layer = idx % 5;
              const topOffset = layer * 42; 
              
              return (
                <div 
                  key={idx}
                  style={{ left: `${left}px`, top: `${topOffset}px` }}
                  className="absolute group pointer-events-auto"
                >
                  <div className="relative -translate-x-1/2 bg-white/90 hover:bg-white text-stone-800 px-4 py-1.5 rounded-lg shadow-sm whitespace-nowrap z-10 transition-all hover:scale-105 border border-stone-200 hover:border-amber-500 flex items-center gap-2 cursor-pointer group-hover:shadow-md">
                    <span className="font-bold text-sm tracking-tighter tabular-nums text-amber-700">{event.year}</span>
                    <span className="font-serif-zh font-bold text-base">{event.title}</span>
                    <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 mt-3 w-96 bg-white/98 backdrop-blur-md text-stone-800 p-6 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] z-[500] border border-stone-100 whitespace-normal ring-1 ring-black/5">
                      <div className="text-amber-800 text-2xl font-bold border-b border-stone-100 pb-3 mb-3 flex justify-between items-center">
                        <span>{event.title}</span>
                        <span className="text-xs font-sans font-bold opacity-40">公元 {event.year}</span>
                      </div>
                      <p className="leading-relaxed text-stone-600 text-xl font-serif-zh text-justify">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-stone-200 to-transparent" />
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. 人物生命瀑布区 */}
        <div className="pt-[380px] space-y-3 relative z-10 px-20">
          {sortedCharacters.map((char) => {
            const left = (char.birthYear - START_YEAR) * pixelsPerYear;
            const width = (char.deathYear - char.birthYear) * pixelsPerYear;
            const isSelected = selectedCharId === char.id;

            // 统一的标签内容和样式
            const Label = () => (
              <span className="text-white text-xl font-serif-zh font-bold truncate whitespace-nowrap drop-shadow-sm tracking-wide shrink-0">
                {char.name} 
                <span className="text-xs font-normal opacity-90 ml-2 font-sans">({char.birthYear}-{char.deathYear})</span>
              </span>
            );

            return (
              <div 
                key={char.id}
                className="relative h-11 group flex items-center"
                onClick={() => onCharacterSelect(char)}
              >
                <div 
                  className={`absolute h-full rounded-lg shadow-sm cursor-pointer transition-all duration-300 flex items-center px-4 border-b-2 border-black/20 justify-between gap-12
                    ${getKingdomColor(char.kingdom)} 
                    ${isSelected ? 'ring-2 ring-amber-400 z-50 scale-[1.01] shadow-lg -translate-y-0.5' : 'hover:scale-[1.005] hover:shadow-md'}
                  `}
                  style={{ 
                    left: `${left}px`,
                    width: `${Math.max(width, 180)}px` 
                  }}
                >
                  {/* 头部标注 */}
                  <Label />

                  {/* 尾部标注：与头部完全一致，确保左右对称且滚动后依然可见 */}
                  <Label />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;
