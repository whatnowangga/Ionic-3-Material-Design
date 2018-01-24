import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  foods: any;
  animals: any;
  animalControl: any;
  disableSelect: any;
  pokemonControl: any;
  pokemonGroups: any;
  toppings: any;
  toppingList: any;
  selected: any;
  matcher: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animalControl = new FormControl('', [Validators.required]);
    this.disableSelect = new FormControl(false);
    this.pokemonControl = new FormControl();
    this.toppings = new FormControl();
    this.selected = new FormControl('valid', [
      Validators.required,
      Validators.pattern('valid'),
    ]);

    this.matcher = new MyErrorStateMatcher();
    this.foods = [{
        value: 'steak-0',
        viewValue: 'Steak'
      },
      {
        value: 'pizza-1',
        viewValue: 'Pizza'
      },
      {
        value: 'tacos-2',
        viewValue: 'Tacos'
      }
    ];
    this.animals = [{
        name: 'Dog',
        sound: 'Woof!'
      },
      {
        name: 'Cat',
        sound: 'Meow!'
      },
      {
        name: 'Cow',
        sound: 'Moo!'
      },
      {
        name: 'Fox',
        sound: 'Wa-pa-pa-pa-pa-pa-pow!'
      },
    ];
    this.pokemonGroups = [{
        name: 'Grass',
        pokemon: [{
            value: 'bulbasaur-0',
            viewValue: 'Bulbasaur'
          },
          {
            value: 'oddish-1',
            viewValue: 'Oddish'
          },
          {
            value: 'bellsprout-2',
            viewValue: 'Bellsprout'
          }
        ]
      },
      {
        name: 'Water',
        pokemon: [{
            value: 'squirtle-3',
            viewValue: 'Squirtle'
          },
          {
            value: 'psyduck-4',
            viewValue: 'Psyduck'
          },
          {
            value: 'horsea-5',
            viewValue: 'Horsea'
          }
        ]
      },
      {
        name: 'Fire',
        disabled: true,
        pokemon: [{
            value: 'charmander-6',
            viewValue: 'Charmander'
          },
          {
            value: 'vulpix-7',
            viewValue: 'Vulpix'
          },
          {
            value: 'flareon-8',
            viewValue: 'Flareon'
          }
        ]
      },
      {
        name: 'Psychic',
        pokemon: [{
            value: 'mew-9',
            viewValue: 'Mew'
          },
          {
            value: 'mewtwo-10',
            viewValue: 'Mewtwo'
          },
        ]
      }
    ];
    this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

}