import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  username: String = '';
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
  loading = true;

  constructor(
    private http: _HttpClient,
    private settingService: SettingsService
  ) { }

  ngOnInit() {
    this.username = this.settingService.user.name;
    this.loading = false;
  }

}
