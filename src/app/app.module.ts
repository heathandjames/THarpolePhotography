import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';


import { AppComponent } from './app.component';
import {THPNavbarComponent} from 'app/Navbar/thp-navbar.component';
import { THPRouter } from "app/thp-routing.module";
import { THPHomeComponent } from "app/Home/thp-home.component";
import { THPAboutComponent } from "app/About/thp-about.component";
import { THPGalleryComponent } from "app/Gallery/thp-gallery.component";
import { THPContactComponent } from "app/Contact/thp-contact.component";
import { THPSignonComponent } from "app/Admin/SignOn/thp-signon.component";
import { THPAdminComponent } from "app/Admin/thp-admin.component";

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
    AppComponent,
    THPNavbarComponent,
    THPHomeComponent,
    THPAboutComponent,
    THPGalleryComponent,
    THPContactComponent,
    THPAdminComponent,
    THPSignonComponent
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
