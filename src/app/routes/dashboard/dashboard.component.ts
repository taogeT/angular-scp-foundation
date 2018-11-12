import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  username: String = '';
  loading: Boolean = true;
  shortcuts: String[] = [
    'newTranslation',
    'newOriginal',
    'choicestOriginal',
    'choicestStory'
  ];

  constructor(
    private http: _HttpClient,
    private settingService: SettingsService
  ) { }

  ngOnInit() {
    this.username = this.settingService.user.name;
    this.loading = false;
  }

}
