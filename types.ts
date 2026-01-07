
export enum Kingdom {
  WEI = '魏',
  SHU = '蜀',
  WU = '吴',
  JIN = '晋',
  QUN = '群'
}

export interface HistoricalEvent {
  year: number;
  title: string;
  description: string;
}

export interface Character {
  id: string;
  name: string;
  kingdom: Kingdom;
  birthYear: number;
  deathYear: number;
  description: string;
  appearance: string; // 新增：外貌形象描写
  sanguozhiQuote: string;
  title?: string;
}
