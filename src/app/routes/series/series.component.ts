import { Component, OnInit } from '@angular/core';
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
  selectedIndex = 0;
  series: Series;
  tabs: SeriesTab[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {series: Series}) => {
      this.series = data.series;
      this.title = this.series.title;
      this.tabs = this.initTabs();
      this.selectedIndex = 0;
      this.loading = false;
    });
  }

  private initTabs () {
    const ret: SeriesTab[] = [];
    for (let i = 0; i < 10; i++) {
      const retTab: SeriesTab = {
        key: i, startNumber: 0, endNumber: 0, title: null, area: this.series.area
      };
      if (this.series) {
        const baseNumber = (this.series.code - 1) * 1000 + retTab.key * 100;
        retTab.startNumber = baseNumber + ((retTab.key > 0 || this.series.code > 1) ? 0 : 1);
        retTab.endNumber = baseNumber + 99;
        retTab.title = `${retTab.startNumber.toString().padStart(3, '0')} to ${retTab.endNumber.toString().padStart(3, '0')}`;
      }
      ret.push(retTab);
    }
    return ret;
  }
}
