import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from "@ionic/angular";

import { FcmserviceService } from './fcmservice.service';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    public alertCtrl : AlertController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FcmserviceService,
    public toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.notificationSetup();
    });
  }

  private async presentToast(textMessage) {
    const toast = await this.toastController.create({
      message: textMessage,
      duration: 3000,
      position:'top'
    });
    toast.present();
  }

  private notificationSetup() {
    this.fcm.getToken();
    this.fcm.onNotifications().subscribe(
      (msg) => {
        this.alert(JSON.stringify(msg));
        this.alert(msg.aps.alert);
 
        if (this.platform.is('ios')) {
          this.alert("Entrando al IOS");
          this.presentToast(msg.body);
        } else if(this.platform.is('android')) {
          this.alert("Entrando al ANDROID");
          this.presentToast(msg.body);
        }


        this.presentToast(msg.body);
      });
  }


  async alert(fcmID){ //alerta para invalid email o psswrd
    const alert = await this.alertCtrl.create({
      header: 'FCM',
      message: fcmID,
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary'
      }]
    });
  
    await alert.present();
  }


 
}
