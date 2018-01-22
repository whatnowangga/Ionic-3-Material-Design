import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressSpinnerPage } from './progress-spinner';

@NgModule({
  declarations: [
    ProgressSpinnerPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgressSpinnerPage),
  ],
})
export class ProgressSpinnerPageModule {}
