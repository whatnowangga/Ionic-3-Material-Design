import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableSortingPage } from './table-sorting';

@NgModule({
  declarations: [
    TableSortingPage,
  ],
  imports: [
    IonicPageModule.forChild(TableSortingPage),
  ],
})
export class TableSortingPageModule {}
