import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { ErrorHandler, NgModule } from '@angular/core';
=======
import { ErrorHandler,NgModule } from '@angular/core';
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteService } from '../providers/note-service/note-service';
import { IonicStorageModule } from '@ionic/storage';
<<<<<<< HEAD
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { AddNotePageModule } from '../pages/add-note/add-note.module';
import { ViewNotePage } from '../pages/view-note/view-note';
//import { AddNotePageModule } from '../pages/add-note/add-note';
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    AddNotePage
=======
    AddNotePage,
    ViewNotePage
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
<<<<<<< HEAD
    IonicStorageModule.forRoot()
=======
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    //NgModule,
    //AddNotePageModule

>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    AddNotePage
=======
    AddNotePage,
    ViewNotePage
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService
  ]
})
<<<<<<< HEAD
export class AppModule {}
=======
export class AppModule {
  createDate: number;
}
>>>>>>> 8ce015ee7b9cee363a5e190c815694104032b057
