import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnackbarPage } from './snackbar';

@NgModule({
  declarations: [
    SnackbarPage,
  ],
  imports: [
    IonicPageModule.forChild(SnackbarPage),
  ],
})
export class SnackbarPageModule {}
