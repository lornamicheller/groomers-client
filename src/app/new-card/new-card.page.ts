import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as Parse from 'parse';
import { AlertController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { Stripe } from '@ionic-native/stripe/ngx';




let parse = require('parse');
@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.page.html',
  styleUrls: ['./new-card.page.scss'],
})
export class NewCardPage implements OnInit {

  number:any
  card:any
  expDate:any
  cvv:any;
  name:any;

  constructor(private camera: Camera, public alertCtrl:AlertController,private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController,public stripe:Stripe) { 
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 

  }

  ngOnInit() {
  }

  navigate(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 200,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 100,
    }

    console.log('transition');
    //this.location.back();
    this.nativePageTransitions.slide(options);
  }

  navigatePass(){
    this.navigate();
    this.nav.navigateRoot('/tabs/tabs/card-receiver');
   }

async alertMessage(message){ //alerta simple con mensaje
  const alert = await this.alertCtrl.create({
    header: 'Error',
    message: message,
    buttons: [{
      text: 'OK',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        //do something if needed
      }
    }]
  });

  await alert.present();
}

createUser(){
 
  console.log(this.number);
  console.log(this.card);
  console.log(this.expDate);
  console.log(this.cvv);

  if( this.number == "" || this.card == "" || this.expDate== "" || this.cvv == "" ) {
      //show alert
      this.alertMessage("All fields are require.");
      return;
  }

  this.stripe.setPublishableKey('pk_test_3mheOb7dnYrWsE2aARwoEEax'); /// key test, please change when the app is finished

let cardInfo = {
  number: this.number,
  expMonth: parseInt (this.card),
  expYear: parseInt(this.expDate),
  cvc: this.cvv
  }

  console.log(cardInfo);

  this.stripe.createCardToken(cardInfo)
    .then(token => {
      Parse.Cloud.run('createStripeUser', {cardToken: token.id, email: Parse.User.current().get('email'), userId: Parse.User.current().id
      }).then((result) => {
        this.successAdd();
        // this.navigatePass();
      }, (error) =>{
        this.errorAlert(error);
        console.log(error);
      });
    })
    .catch(error => {
      this.errorAlert(error);
      console.log(error)
    });

}



async successAdd(){
  const alert =  await this.alertCtrl.create({
    header: 'Ready',
    message: '¡Your card has been added Successfully!',
    buttons: [{
      text: 'OK',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Confirm Cancel');
        this.navigatePass();
      }
    }]
  });
  await alert.present();
}

async errorAlert(error : any){
  const alert =  await this.alertCtrl.create({
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



}


