import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { SeriesComponent } from './series.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ SeriesComponent ]
})
export class SeriesModule { }
