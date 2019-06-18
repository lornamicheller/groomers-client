import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AlertController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { Stripe } from '@ionic-native/stripe';
import * as Parse from 'parse';
import {GroomproviderService } from "./../../app/groomprovider.service";

let parse = require('parse');

@Component({
  selector: 'app-card-receiver',
  templateUrl: './card-receiver.page.html',
  styleUrls: ['./card-receiver.page.scss'],
})
export class CardReceiverPage implements OnInit {

  constructor(private camera: Camera, public alertCtrl:AlertController, public provider : GroomproviderService, private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController, private stripe: Stripe) { 
    
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");  }


    cards:any;
  ngOnInit() {
  
  
  }
  async errorAlert(error: any) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: error,
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }]
    });
    await alert.present();
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

  getCard(selectedCard) {
    console.log("Entrando getCard");
    this.provider.card = selectedCard;
    console.log(selectedCard);
    console.log('selected succesfully')

  }


}
