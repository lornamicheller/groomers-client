import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService} from "./../../app/groomprovider.service";
import * as Parse from 'parse';
import { AlertController } from "@ionic/angular";

let parse = require('parse');
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.page.html',
  styleUrls: ['./address-form.page.scss'],
})
export class AddressFormPage implements OnInit {

  placeName:string;
  address:string;
  apt:string;
  city:string;
  state:string;
  zip:string;
  phone:string;
  eRROR:any;
  
  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController, public provider: GroomproviderService, public alert:AlertController) {  
      
      parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");
}

  ngOnInit() {
   // saveAddressForm();
  }

  goBack() {
    let options: NativeTransitionOptions = {
        direction: 'right', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("tabs/tabs/address-receiver");
}

openPage() { //funcion para pasar de una pagina a otra. 

  let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
  }
  console.log(options);
  this.nativePageTransitions.slide(options);
  this.nav.navigateRoot("/tabs/tabs/address-receiver");
}

validateInputs() {
  if (this.zip.length != 6) {
      this.eRROR = 'Zipcode must be 6 numbers';
      this.errorAlert();
  } else {
      this.saveAddressForm();
  }

}

async errorAlert(){
  const alert = await this.alert.create({
    header: 'Error',
    message: this.eRROR,
    buttons: [
        {
          text: 'OK',
          cssClass: 'greenBtn',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();

}

saveAddressForm() {
  console.log("Entrando al address form");
  Parse.Cloud.run('createAddress', {
      user: Parse.User.current().id,
      name: this.placeName,
      address1: this.address,
      address2: this.apt,
      city: this.city,
      state: this.state,
      zipcode: this.zip,
      phone: this.phone
  }).then((result) => {
      console.log("Address info", this.placeName);
      // this.validateInputs();
      this.openPage();
  });
}


}