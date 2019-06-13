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

@NgModule({
  declarations: [AppComponent, CalendarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    NativePageTransitions,
    Calendar,
    NavController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent, CalendarComponent]
})
export class AppModule {}
