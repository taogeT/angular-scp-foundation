import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { SeriesTab, SeriesContent } from '../series.model';

@Component({
  selector: 'app-series-content',
  templateUrl: './content.component.html',
  styles: []
})
export class SeriesContentComponent implements OnChanges {
  parts: SeriesContent[][];

  @Input() articles: Map<string, SeriesContent>;
  @Input() selectedTab: SeriesTab;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    const currentSelectedTab = changes.selectedTab && changes.selectedTab.currentValue || this.selectedTab;
    const currentArticles = changes.articles && changes.articles.currentValue || this.articles;

    let part: SeriesContent[] = [];
    this.parts = [];
    const seriesName = currentSelectedTab.area === 'cn' ? '-CN' : '';
    for (let i = currentSelectedTab.startNumber; i <= currentSelectedTab.endNumber ; i++) {
      const articleName = `SCP${seriesName}-${i.toString().padStart(3, '0')}`;
      if (currentArticles.has(articleName)) {
        part.push(currentArticles.get(articleName));
      } else {
        part.push({ name: articleName, title: '禁止访问', isReal: false });
      }
      if (i % 1000 !== 0 && (i + 1) % 25 === 0 || i === currentSelectedTab.endNumber) {
        this.parts.push(part);
        part = [];
      }
    }
  }

}
