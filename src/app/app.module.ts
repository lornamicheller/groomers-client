import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CalendarComponent } from "./calendar/calendar.component";
import { Calendar } from '@ionic-native/calendar/ngx';
import { NavController } from '@ionic/angular';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


import { GroomersCalendarComponent } from './groomers-calendar/groomers-calendar.component';
// import { Calendar } from '@ionic-native/calendar';


const config = {
  apiKey: "AIzaSyDJgYSzqIcc0-ZhWv2BePkruUaVVQ127FM",
    authDomain: "groomrs-1e9bf.firebaseapp.com",
    databaseURL: "https://groomrs-1e9bf.firebaseio.com",
    projectId: "groomrs-1e9bf",
    storageBucket: "groomrs-1e9bf.appspot.com",
    messagingSenderId: "657688545643",
    appId: "1:657688545643:web:5e20285fd54be76c"
}
@NgModule({
  declarations: [AppComponent, CalendarComponent, GroomersCalendarComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    CalendarModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Stripe,
    Facebook,
    Camera,
    NativePageTransitions,
    Calendar,
    Firebase,
    InAppBrowser,
    ToastController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NavController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent, CalendarComponent, GroomersCalendarComponent]
})
export class AppModule {}
