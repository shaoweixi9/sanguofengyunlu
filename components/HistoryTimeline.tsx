
import React, { useMemo, useRef } from 'react';
import { Character, Kingdom } from '../types';
import { START_YEAR, END_YEAR, HISTORICAL_EVENTS, CHARACTERS } from '../constants';

interface Props {
  onCharacterSelect: (char: Character) => void;
  selectedCharId?: string;
}

const HistoryTimeline: React.FC<Props> = ({ onCharacterSelect, selectedCharId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 比例调整：55 能够提供非常紧凑的视野
  const pixelsPerYear = 55; 
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
      case Kingdom.WEI: return 'bg-blue-600 hover:bg-blue-500';
      case Kingdom.SHU: return 'bg-red-600 hover:bg-red-500';
      case Kingdom.WU: return 'bg-emerald-600 hover:bg-emerald-500';
      case Kingdom.JIN: return 'bg-cyan-600 hover:bg-cyan-500';
      default: return 'bg-stone-500 hover:bg-stone-400';
    }
  };

  return (
    <div className="relative overflow-x-auto bg-[#fdfaf5] h-full scroll-smooth select-none custom-scrollbar" ref={containerRef}>
      <div 
        style={{ width: `${timelineWidth + 500}px` }}
        className="relative pt-6 pb-24 min-h-[1000px]"
      >
        {/* 年份刻度 */}
        <div className="sticky top-0 left-0 w-full h-10 bg-[#f4f1ea]/95 backdrop-blur-sm border-b border-amber-600/20 z-[400] shadow-sm flex items-end pb-0.5">
          {years.map(year => (
            <div 
              key={year}
              style={{ left: `${(year - START_YEAR) * pixelsPerYear}px` }}
              className={`absolute bottom-0 border-l ${
                year % 10 === 0 ? 'border-stone-400 h-5 w-0.5' : 
                year % 5 === 0 ? 'border-stone-300 h-2.5' : 'border-stone-200 h-1'
              }`}
            >
              {year % 5 === 0 && (
                <span className={`absolute -top-6 left-1/2 -translate-x-1/2 font-serif-zh font-bold tracking-tight whitespace-nowrap ${
                  year % 10 === 0 ? 'text-xs text-stone-800' : 'text-[9px] text-stone-400'
                }`}>
                  {year}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 参考网格 */}
        {years.map(year => (year % 10 === 0) && (
          <div 
            key={`grid-${year}`}
            style={{ left: `${(year - START_YEAR) * pixelsPerYear}px` }}
            className="absolute top-0 bottom-0 border-l border-stone-100 pointer-events-none z-0"
          />
        ))}

        {/* 历史事件区 */}
        <div className="absolute top-[80px] left-0 w-full z-[40] pointer-events-none">
          <div className="relative h-[160px] px-6">
            {HISTORICAL_EVENTS.map((event, idx) => {
              const left = (event.year - START_YEAR) * pixelsPerYear;
              const layer = idx % 4;
              const topOffset = layer * 30; 
              
              return (
                <div 
                  key={idx}
                  style={{ left: `${left}px`, top: `${topOffset}px` }}
                  className="absolute group pointer-events-auto"
                >
                  <div className="relative -translate-x-1/2 bg-white/95 hover:bg-white text-stone-800 px-2 py-0.5 rounded shadow-sm whitespace-nowrap z-10 border border-stone-200 hover:border-amber-500 flex items-center gap-1 cursor-pointer text-[10px] transition-all">
                    <span className="font-bold tabular-nums text-amber-700">{event.year}</span>
                    <span className="font-serif-zh font-bold">{event.title}</span>
                    
                    <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white p-3 rounded-lg shadow-xl z-[500] border border-stone-100 whitespace-normal">
                      <div className="text-amber-800 text-sm font-bold border-b border-stone-100 pb-1 mb-1">
                        {event.title}
                      </div>
                      <p className="leading-tight text-stone-600 text-xs font-serif-zh text-justify">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-8 bg-stone-200" />
                </div>
              );
            })}
          </div>
        </div>

        {/* 人物生命柱状图 - 高度 h-8 */}
        <div className="pt-[280px] space-y-1.5 relative z-10 px-10">
          {sortedCharacters.map((char) => {
            const left = (char.birthYear - START_YEAR) * pixelsPerYear;
            const width = (char.deathYear - char.birthYear) * pixelsPerYear;
            const isSelected = selectedCharId === char.id;

            // 左右完全一样的标签渲染函数
            const Label = () => (
              <span className="text-white text-xs font-serif-zh font-bold truncate whitespace-nowrap drop-shadow-sm tracking-tight shrink-0 px-2">
                {char.name} 
                <span className="text-[9px] font-normal opacity-100 ml-1 font-sans">({char.birthYear}-{char.deathYear})</span>
              </span>
            );

            return (
              <div 
                key={char.id}
                className="relative h-8 group flex items-center"
                onClick={() => onCharacterSelect(char)}
              >
                <div 
                  className={`absolute h-full rounded shadow-sm cursor-pointer transition-all duration-200 flex items-center justify-between
                    ${getKingdomColor(char.kingdom)} 
                    ${isSelected ? 'ring-2 ring-amber-400 z-50 scale-[1.01] shadow-lg' : 'hover:scale-[1.002]'}
                  `}
                  style={{ 
                    left: `${left}px`,
                    width: `${Math.max(width, 160)}px` 
                  }}
                >
                  {/* 左侧文字 */}
                  <Label />
                  {/* 右侧文字 - 字号大小颜色样式完全一致 */}
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
