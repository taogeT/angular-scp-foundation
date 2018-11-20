import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ ArticleComponent ]
})
export class ArticleModule { }
