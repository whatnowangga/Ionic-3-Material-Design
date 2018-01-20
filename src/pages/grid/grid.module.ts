import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GridPage } from './grid';

@NgModule({
  declarations: [
    GridPage,
  ],
  imports: [
    IonicPageModule.forChild(GridPage),
  ],
})
export class GridPageModule {}
