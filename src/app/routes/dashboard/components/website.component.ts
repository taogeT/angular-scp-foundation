import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-website',
  template: `
    <nz-card nzTitle="国际站点" [nzBordered]="false" [nzLoading]="loading"
             [nzBodyStyle]="{'padding-top.px': 12, 'padding-bottom.px': 12 }">
      <div class="members">
        <div nz-row [nzGutter]="48">
          <div nz-col [nzSpan]="24" *ngFor="let i of sites">
            <a [href]="i.url">
              <nz-avatar nzShape="square" [nzSrc]="i.logo" nzSize="small"></nz-avatar>
              <span class="member">{{i.title}}</span>
            </a>
          </div>
        </div>
      </div>
    </nz-card>
  `,
  styleUrls: ['./website.component.less']
})
export class WebsiteComponent implements OnInit {
  sites: any[] = [
    {
      title: 'SCP-INT 国际翻译站',
      url: '//scp-int.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/int.png'
    },
    {
      title: 'SCP-EN SCP Foundation',
      url: '//www.scp-wiki.net/',
      logo: '//scp-wiki-cn.wdfiles.com/local--files/main/us.png'
    },
    {
      title: 'SCP-RU SCP Foundation (Russian Branch)',
      url: '//scp-int.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/ru.png'
    },
    {
      title: 'SCP-KO SCP 재단',
      url: '//scp-kr.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/kr.png'
    },
    {
      title: 'SCP-FR Foundation SCP',
      url: '//fondationscp.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/fr.png'
    },
    {
      title: 'SCP-PL SCP Polska Filia',
      url: '//scp-wiki.net.pl/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/pl.png'
    },
    {
      title: 'SCP-ES La Fundación SCP',
      url: '//lafundacionscp.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/es.png'
    },
    {
      title: 'SCP-TH สถาบัน SCP',
      url: '//scp-th.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/th.png'
    },
    {
      title: 'SCP-JP SCP財団',
      url: '//scp-jp.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/jp.png'
    },
    {
      title: 'SCP-DE SCP Deutschland',
      url: '//scp-wiki-de.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/de.png'
    },
    {
      title: 'SCP-IT Fondazione SCP',
      url: '//fondazionescp.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/it.png'
    },
    {
      title: 'SCP-UA SCP Foundation (Ukraine Branch)',
      url: '//scp-ukrainian.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/ua.png'
    },
    {
      title: 'SCP-PT/BR Lusófona Branch',
      url: '//scp-pt-br.wikidot.com/',
      logo: '//scp-wiki.wdfiles.com/local--files/main/pt.png'
    }
  ];
  loading: Boolean = true;

  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

}
