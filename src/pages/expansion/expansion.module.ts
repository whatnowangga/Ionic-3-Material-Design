import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpansionPage } from './expansion';

@NgModule({
  declarations: [
    ExpansionPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpansionPage),
  ],
})
export class ExpansionPageModule {}
