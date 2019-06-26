import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService} from "./../../app/groomprovider.service";
import * as Parse from 'parse';
import { AlertController } from "@ionic/angular";
import { getInheritedFactory } from '@angular/core/src/render3';

let parse = require('parse');
@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.page.html',
  styleUrls: ['./address-edit.page.scss'],
})
export class AddressEditPage implements OnInit {

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

addressObject:any;


  ngOnInit() {
    console.log("Entrando al address edit");
    this.addressObject = this.provider.addressId;
    console.log(this.addressObject);
    this.placeName = this.addressObject.get('name');
    console.log(this.addressObject.get('name'));

    this.address = this.addressObject.get('address1');
    this.apt = this.addressObject.get('address2');
    this.city = this.addressObject.get('city');
    this.state = this.addressObject.get('state');
    this.zip = this.addressObject.get('zipcode');
    this.phone = this.addressObject.get('phone');




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
async stateAlert(){
  const alert = await this.alert.create({
    header: 'Alert',
    message:"Groomrs is constantly expanding our coverage to connect Groomers with your pets. At this moment we have not reached the selected State but we plan to be there soon. We will inform you once we are in your area.",
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


  if(this.state != "Florida" )
  {

    this.stateAlert();

  }else
  {
      this.addressObject.set('name', this.placeName);
      this.addressObject.set('address1', this.address);
      this.addressObject.set('address2', this.apt);
      this.addressObject.set('city', this.city);
      this.addressObject.set('state', this.state);
      this.addressObject.set('zipcode', this.zip);
      this.addressObject.set('phone', this.phone);



      this.addressObject.save().then((result)=>
      {
          console.log("Saved!!");
          this.goBack();
          
      });

    }
}


}