import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import * as Parse from 'parse';

var parse = require ("parse");
@Injectable({
  providedIn: 'root'
})
export class FcmserviceService {

  currentUser:any;

  constructor(private firebase: Firebase,
    private afs: AngularFirestore,
    private platform: Platform) { 

      parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");

        if(Parse.User.current() != null)
        {
        this.currentUser = Parse.User.current().id;
        }
        else{
          this.currentUser = "";
        }


    }


    async getToken() {
      let token;
  
      if (this.platform.is('android')) {
        token = await this.firebase.getToken();
      }
  
      if (this.platform.is('ios')) {
        token = await this.firebase.getToken();
        await this.firebase.grantPermission();
      }
  
      this.saveToken(token);
    }
  
    private saveToken(token) {
      if (!token) return;
  
      const devicesRef = this.afs.collection('devices');
  
      const data = {
        token,
        userId: this.currentUser
      };
  
      return devicesRef.doc(token).set(data);
    }
  
    onNotifications() {
      return this.firebase.onNotificationOpen();
    }



}
