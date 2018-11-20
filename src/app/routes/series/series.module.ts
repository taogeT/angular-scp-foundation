import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { SeriesComponent } from './series.component';
import { SeriesContentComponent } from './content/content.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ SeriesComponent, SeriesContentComponent ]
})
export class SeriesModule { }
