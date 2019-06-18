import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AlertController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { Stripe } from '@ionic-native/stripe';
import * as Parse from 'parse';

let parse = require('parse');

@Component({
  selector: 'app-card-receiver',
  templateUrl: './card-receiver.page.html',
  styleUrls: ['./card-receiver.page.scss'],
})
export class CardReceiverPage implements OnInit {

  constructor(private camera: Camera, public alertCtrl:AlertController, /*private photoLibrary: PhotoLibrary*/ private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController, private stripe: Stripe) { 
    
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");  }


    cards:any;
  ngOnInit() {
  
  
  }




  getCards(){
    this.stripe.setPublishableKey('pk_live_kQAGHMdtFWYTLEOBycxC011T');
    
    Parse.Cloud.run('getStripeUserCards').then((result) =>  
    {
      console.log(result);
     this.cards=result;
    
  },(error) =>{
    // this.errorAlert(error);
    console.log(error);
  });
  }

}
