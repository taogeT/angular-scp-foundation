import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _HttpClient } from '@delon/theme';

import { Series } from './series.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
})
export class SeriesComponent implements OnInit {
  loading = true;
  title = '';
  selectedIndex = 0;
  series: Series;
  tabs: { key: number, title: string }[] = [
    { key: 0, title: null },
    { key: 1, title: null },
    { key: 2, title: null },
    { key: 3, title: null },
    { key: 4, title: null },
    { key: 5, title: null },
    { key: 6, title: null },
    { key: 7, title: null },
    { key: 8, title: null },
    { key: 9, title: null },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {series: Series}) => {
      this.series = data.series;
      this.title = this.series.title;
      this.tabs.forEach((tab: { key: number, title: string }) => {
        const baseNumber = (this.series.code - 1) * 1000 + tab.key * 100;
        const startNumber = (baseNumber + (tab.key ? 0 : 1)).toString().padStart(3, '0');
        const endNumber = (baseNumber + 99).toString().padStart(3, '0');
        tab.title = `${startNumber} to ${endNumber}`;
      });
      this.loading = false;
    });
  }
}
