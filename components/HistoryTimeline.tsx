
import React, { useMemo, useRef, useState } from 'react';
import { Character, Kingdom } from '../types';
import { START_YEAR, END_YEAR, HISTORICAL_EVENTS, CHARACTERS } from '../constants';

interface Props {
  onCharacterSelect: (char: Character) => void;
  selectedCharId?: string;
}

const HistoryTimeline: React.FC<Props> = ({ onCharacterSelect, selectedCharId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pinnedEventIdx, setPinnedEventIdx] = useState<number | null>(null);
  const [hoveredEventIdx, setHoveredEventIdx] = useState<number | null>(null);
  const [copyFeedbackIdx, setCopyFeedbackIdx] = useState<number | null>(null);
  
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

  const handleCopy = (e: React.MouseEvent, text: string, idx: number) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedbackIdx(idx);
      setTimeout(() => setCopyFeedbackIdx(null), 2000);
    });
  };

  return (
    <div 
      className="relative overflow-x-auto bg-[#fdfaf5] h-full scroll-smooth select-none custom-scrollbar" 
      ref={containerRef}
      onClick={() => setPinnedEventIdx(null)} // 点击空白处收回固定的事件卡片
    >
      <div 
        style={{ width: `${timelineWidth + 600}px` }}
        className="relative pt-6 pb-24 min-h-[1200px]"
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
          <div className="relative h-[200px] px-6">
            {HISTORICAL_EVENTS.map((event, idx) => {
              const left = (event.year - START_YEAR) * pixelsPerYear;
              const layer = idx % 5;
              const topOffset = layer * 28; 
              const isPinned = pinnedEventIdx === idx;
              const isHovered = hoveredEventIdx === idx;
              const showCard = isPinned || isHovered;
              
              return (
                <div 
                  key={`${event.year}-${idx}`}
                  style={{ 
                    left: `${left}px`, 
                    top: `${topOffset}px`,
                    zIndex: showCard ? 1000 : 10 // 关键：开启时 z-index 最高，挡住所有其他标签
                  }}
                  className="absolute pointer-events-auto transition-all"
                  onMouseEnter={() => setHoveredEventIdx(idx)}
                  onMouseLeave={() => setHoveredEventIdx(null)}
                >
                  {/* 事件标签按钮 */}
                  <div 
                    className={`relative -translate-x-1/2 px-2 py-0.5 rounded shadow-sm whitespace-nowrap border flex items-center gap-1 cursor-pointer text-[10px] transition-all
                      ${isPinned ? 'bg-amber-500 border-amber-600 text-white scale-110 z-[1001]' : 'bg-white/95 border-stone-200 text-stone-800 hover:border-amber-500 hover:z-[999]'}
                    `}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPinnedEventIdx(isPinned ? null : idx);
                    }}
                  >
                    <span className={`font-bold tabular-nums ${isPinned ? 'text-amber-50' : 'text-amber-700'}`}>{event.year}</span>
                    <span className="font-serif-zh font-bold">{event.title}</span>
                    
                    {/* 详情卡片 */}
                    {showCard && (
                      <div 
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white/98 backdrop-blur-md p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-amber-600/20 whitespace-normal z-[1002] animate-in fade-in zoom-in duration-200`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* 装饰条 */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 rounded-t-xl" />
                        
                        <div className="flex justify-between items-start mb-2 pt-1">
                          <div className="text-amber-800 text-sm font-bold font-serif-zh border-b border-amber-100 pb-1 flex-1">
                            {event.title} 
                            <span className="text-[10px] text-stone-400 ml-2 font-normal font-sans tracking-tight">公元 {event.year} 年</span>
                          </div>
                          {isPinned && (
                            <button 
                              onClick={() => setPinnedEventIdx(null)}
                              className="ml-2 p-0.5 hover:bg-stone-100 rounded-full text-stone-400 hover:text-stone-800 transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          )}
                        </div>

                        <p className="leading-relaxed text-stone-600 text-xs font-serif-zh text-justify mb-4">
                          {event.description}
                        </p>

                        {/* 操作栏 */}
                        <div className="flex justify-end pt-2 border-t border-stone-100">
                          <button
                            onClick={(e) => handleCopy(e, `${event.year}年 ${event.title}：${event.description}`, idx)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all
                              ${copyFeedbackIdx === idx 
                                ? 'bg-emerald-500 text-white shadow-inner' 
                                : 'bg-stone-900 text-amber-400 hover:bg-black hover:scale-105 active:scale-95 shadow-md'}
                            `}
                          >
                            {copyFeedbackIdx === idx ? (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                                已复制
                              </>
                            ) : (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                                复制内容
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* 连接线 */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 w-px h-6 transition-colors ${showCard ? 'bg-amber-400' : 'bg-stone-200'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* 人物生命柱状图 */}
        <div className="pt-[320px] space-y-1 relative z-10 px-10">
          {sortedCharacters.map((char) => {
            const left = (char.birthYear - START_YEAR) * pixelsPerYear;
            const width = (char.deathYear - char.birthYear) * pixelsPerYear;
            const isSelected = selectedCharId === char.id;

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
                onClick={(e) => {
                  e.stopPropagation();
                  onCharacterSelect(char);
                }}
              >
                <div 
                  className={`absolute h-full rounded shadow-sm cursor-pointer transition-all duration-200 flex items-center justify-between
                    ${getKingdomColor(char.kingdom)} 
                    ${isSelected ? 'ring-2 ring-amber-400 z-50 scale-[1.01] shadow-lg' : 'hover:scale-[1.002]'}
                  `}
                  style={{ 
                    left: `${left}px`,
                    width: `${Math.max(width, 180)}px`
                  }}
                >
                  <Label />
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
