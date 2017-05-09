import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';
import { THPRouter } from "app/thp-routing.module";

var firebaseconfig = {
    apiKey: "AIzaSyBE6m9LDJbVbkLVxc5Yy0IXLEB8fbJvGpw",
    authDomain: "tharpolephotography.firebaseapp.com",
    databaseURL: "https://tharpolephotography.firebaseio.com",
    projectId: "tharpolephotography",
    storageBucket: "tharpolephotography.appspot.com",
    messagingSenderId: "629731350396"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    THPRouter,
    AngularFireModule.initializeApp(firebaseconfig)   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
