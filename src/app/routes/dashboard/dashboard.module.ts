import { NgModule, Component } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NewsComponent } from './components/news.component';
import { WebsiteComponent } from './components/website.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [
    DashboardComponent,
    NewsComponent,
    WebsiteComponent
  ]
})
export class DashboardModule { }
