import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginatorPage } from './paginator';

@NgModule({
  declarations: [
    PaginatorPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginatorPage),
  ],
})
export class PaginatorPageModule {}
