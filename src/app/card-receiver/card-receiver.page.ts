import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AlertController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { Stripe } from '@ionic-native/stripe/ngx';
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
      Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");
  
  }


    cards:any;
  ngOnInit() {

    this.getCards();
  
  
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

  async deleteAlert(error: any) {
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      message: "Your card has been delete!",
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('delete!');
          this.getCards();
        }
      }]
    });
    await alert.present();
  }

  deleteItem(card)
  {

    console.log(card);

    card.destroy().then((result) => {
      console.log("Destroyed!!!");
      this.getCards();
    }, (error) => {
      console.log(error);
    })


  }




  getCards(){
    this.stripe.setPublishableKey('pk_live_kQAGHMdtFWYTLEOBycxC011T');

    console.log(Parse.User.current().id);
    
    Parse.Cloud.run('getStripeUserCards',{userId: Parse.User.current().id}).then((result) =>  
    {
      console.log(result);
     this.cards=result;

     this.provider.cardId = this.cards[0].id;
     console.log(this.provider.cardId);
 
    
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

  openPage() {
    let options: NativeTransitionOptions= {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("tabs/tabs/add-new-card");
}

useCard() {
  let options: NativeTransitionOptions= {
      direction: 'left', 
      duration: 400, 
      slowdownfactor: -1, 
      slidePixels: 20, 
      iosdelay: 100
  }
  console.log(options);
  this.nativePageTransitions.slide(options);
  this.nav.navigateRoot("tabs/tabs/make-payment");
}


}
