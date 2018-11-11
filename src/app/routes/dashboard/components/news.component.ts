import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-news',
  template: `
    <nz-card nzTitle="新闻" [nzBordered]="false" [nzLoading]="loading" class="ant-card__body-nopadding">
      <nz-list [nzDataSource]="news" [nzRenderItem]="item">
        <ng-template #item let-item>
          <nz-list-item style="padding-left: 24px; padding-right: 24px;">
            <nz-list-item-meta [nzTitle]="item.title" [nzDescription]="item.description"></nz-list-item-meta>
          </nz-list-item>
        </ng-template>
      </nz-list>
    </nz-card>
  `,
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  news: any[] = [
    {
      title: '2018.11.06',
      description: '2018年万圣节专题“人类之后”已经公布。有兴趣的同学可以自行脑洞。另外下一期看图说话也在筹备中，将于近期上线。'
    },
    {
      title: '2018.09.16',
      description: '第二期看图说话竞赛：香蒲已结束。'
    },
    {
      title: '2018.08.08',
      description: '第二期看图说话：香蒲将在本次夏季征文结束后立即开始。'
    },
    {
      title: '2018.04.02',
      description: `
        由于局部性CK级现实重构场景，昨天本站的主页竟然全部变成鸽语了！
        万幸的是，经过工作人员一留抢修，主页已经回到原来的样子，顺便把现实重构场景也还原回去了。今天也将会是美好的一天！
      `
    },
    {
      title: '2018.03.08',
      description: `
        由于采取突然赛制，看图说话活动仅用2天多就出现了优胜者。
        考虑到大家的意见，下次看图说话活动将会加入预留的构思时间并增加门槛分数的提升速度。
      `
    }
  ];
  loading = true;

  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

}
