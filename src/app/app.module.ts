import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabPage } from '../pages/tab/tab';
import { GridPage } from '../pages/grid/grid';
import { InputPage } from '../pages/input/input';
import { ButtonPage } from '../pages/button/button';
import { ExpansionPage } from '../pages/expansion/expansion';
import { PaginatorPage } from '../pages/paginator/paginator';
import { ProgressBarPage } from '../pages/progress-bar/progress-bar';
import { ProgressSpinnerPage } from '../pages/progress-spinner/progress-spinner';
import { TablePage } from '../pages/table/table';
import { TableSortingPage } from '../pages/table-sorting/table-sorting';
import { SnackbarPage } from '../pages/snackbar/snackbar';
import { SliderPage } from '../pages/slider/slider';
import { SelectPage } from '../pages/select/select';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        TabPage,
        GridPage,
        InputPage,
        ButtonPage,
        ExpansionPage,
        PaginatorPage,
        ProgressBarPage,
        ProgressSpinnerPage,
        TablePage,
        TableSortingPage,
        SnackbarPage,
        SliderPage,
        SelectPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        TabPage,
        GridPage,
        InputPage,
        ButtonPage,
        ExpansionPage,
        PaginatorPage,
        ProgressBarPage,
        ProgressSpinnerPage,
        TablePage,
        TableSortingPage,
        SnackbarPage,
        SliderPage,
        SelectPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})
export class AppModule {}