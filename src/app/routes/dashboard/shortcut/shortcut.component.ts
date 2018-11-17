import { Component, OnInit, Input } from '@angular/core';
import { of } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-shortcut',
  template: `
    <nz-card [nzBordered]="false" [nzExtra]="extraTemplate" [nzTitle]="title" [nzLoading]="loading">
      <ng-template #extraTemplate>
        <a>更多</a>
      </ng-template>

    </nz-card>
  `,
  styles: []
})
export class ShortcutComponent implements OnInit {
  tips: { key: string, title: string }[] = [
    { key: 'newTranslation', title: '新增翻译条目'},
    { key: 'newOriginal', title: '新增原创条目'},
    { key: 'choicestOriginal', title: '精品原创SCP'},
    { key: 'choicestStory', title: '精品原创故事'}
  ];
  @Input() key: string;
  title = '';
  loading = true;

  constructor() { }

  ngOnInit() {
    of(...this.tips).pipe(
      filter(tip => tip.key === this.key),
      take(1),
    ).subscribe(tip => {
      this.title = tip.title;
    });
    this.loading = false;
  }

}
