export class Series {
  code: number;
  title: string;
  amount: number;
  area: string;
}

export class SeriesTab {
  key: number;
  title: string;
  startNumber: number;
  endNumber: number;

  constructor(key: number) {
    this.key = key;
  }
}
