import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as Parse from 'parse';
import { AlertController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService } from "./../../app/groomprovider.service";
let parse = require('parse');

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  comments: string;
  hoverRate:any;
  userId: any;
  barberId:any;
  service:any;


  constructor(private camera: Camera, public alertCtrl:AlertController, /*private photoLibrary: PhotoLibrary*/ private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController, public provider: GroomproviderService) { 

    parse.serverURL = 'https://parseapi.back4app.com/';
  Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
  }

  ngOnInit() {

      this.barberId = 'ECnHdAa3YD';
      this.service = "wF7eVFLqw4";
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
    this.nav.navigateRoot("/home-pets");
}

rating(){

  console.log(Parse.User.current().id);
 //success creating pet
 this.successRating();
 console.log("service", this.service);
 console.log("berberId", this.barberId);
 console.log("rate", this.hoverRate);

  if(this.hoverRate == null)
  {
     console.log("Error");
     this.errorRating();
  }

  else
  {
      Parse.Cloud.run('submitServiceReview', {
      serviceId: this.service,
      barberId: this.barberId,
      rating: this.hoverRate,
      review: this.comments,
      userId: Parse.User.current().id
        }).then((result)=> {
        this.successRating();
    }
    , (error)=> {
        //an error occur
        console.log(error);
        //this.openPage();
      });

  }
}

async successRating(){ //alerta simple con mensaje
  const alert = await this.alertCtrl.create({
    header: 'Alert!',
    message: "Rate Sent",
    buttons: [{
      text: 'OK',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        this.openPage();
      }
    }]
  });

  await alert.present();
}
  
async errorRating(){ //alerta simple con mensaje
  const alert = await this.alertCtrl.create({
    header: 'Alert!',
    message: "Before you continue, please make rating",
    buttons: [{
      text: 'OK',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
      }
    }]
  });

  await alert.present();
}



}
