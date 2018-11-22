export interface Series {
  code: number;
  title: string;
  amount: number;
  area: string;
  articles: Map<string, SeriesContent>;
}

export interface SeriesTab {
  key: number;
  title: string;
  startNumber: number;
  endNumber: number;
  area: string;
}

export interface SeriesContent {
  name: string;
  title: string;
  isReal: boolean;
}
