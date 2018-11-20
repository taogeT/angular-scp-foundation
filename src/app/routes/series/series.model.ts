export interface Series {
  code: number;
  title: string;
  amount: number;
  area: string;
  articles: { name: { name: number, title: string } };
}

export interface SeriesTab {
  key: number;
  title: string;
  startNumber: number;
  endNumber: number;
}
