import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  username: String;

  constructor(
    private http: _HttpClient,
    private settingService: SettingsService
  ) { }

  ngOnInit() {
    this.username = this.settingService.user.name;
  }

}
