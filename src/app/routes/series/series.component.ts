import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _HttpClient } from '@delon/theme';

import { Series, SeriesTab } from './series.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
})
export class SeriesComponent implements OnInit {
  loading = true;
  title = '';
  series: Series;
  tabs: SeriesTab[];
  parts: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {series: Series}) => {
      this.series = data.series;
      this.title = this.series.title;
      this.tabs = this.initTabs();
      this.loading = false;
    });
  }

  private initTabs () {
    const ret: SeriesTab[] = [];
    for (let i = 0; i < 10; i++) {
      const retTab: SeriesTab = { key: i, startNumber: 0, endNumber: 0, title: null };
      if (this.series) {
        const baseNumber = (this.series.code - 1) * 1000 + retTab.key * 100;
        retTab.startNumber = baseNumber + ((retTab.key > 0 || this.series.code > 1) ? 0 : 1);
        retTab.endNumber = baseNumber + 99;
        retTab.title = `${retTab.startNumber.toString().padStart(3, '0')} to ${retTab.endNumber.toString().padStart(3, '0')}`;
      }
      ret.push(retTab);
      if (i === 0) {
        this.parts = [
          { count: 25, articles: new Array(25) },
          { count: 25, articles: new Array(25) },
          { count: 25, articles: new Array(25) },
          { count: 25, articles: new Array(25) },
        ];
      }
    }
    return ret;
  }

  tabChange(nzSelectedIndex: EventEmitter<number>) {
    console.log(nzSelectedIndex);
  }
}
