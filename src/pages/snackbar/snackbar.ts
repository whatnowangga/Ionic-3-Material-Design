import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatSnackBar} from '@angular/material';
/**
 * Generated class for the SnackbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-snackbar',
  templateUrl: 'snackbar.html',
})
export class SnackbarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public snackBar: MatSnackBar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SnackbarPage');
  }
openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
