import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressBarPage } from './progress-bar';

@NgModule({
  declarations: [
    ProgressBarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgressBarPage),
  ],
})
export class ProgressBarPageModule {}
