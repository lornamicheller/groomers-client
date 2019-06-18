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


@NgModule({
  declarations: [AppComponent, CalendarComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Stripe,
    
    Camera,
    NativePageTransitions,
    Calendar,
    NavController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent, CalendarComponent]
})
export class AppModule {}
