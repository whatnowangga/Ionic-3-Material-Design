import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SliderPage } from './slider';

@NgModule({
  declarations: [
    SliderPage,
  ],
  imports: [
    IonicPageModule.forChild(SliderPage),
  ],
})
export class SliderPageModule {}
