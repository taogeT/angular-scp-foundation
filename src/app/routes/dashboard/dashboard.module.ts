import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NewsComponent } from './news/news.component';
import { WebsiteComponent } from './website/website.component';
import { ShortcutComponent } from './shortcut/shortcut.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [
    DashboardComponent,
    NewsComponent,
    WebsiteComponent,
    ShortcutComponent
  ]
})
export class DashboardModule { }
