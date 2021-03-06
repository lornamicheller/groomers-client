import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { AlertController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService} from "./../../app/groomprovider.service";

let parse = require('parse');


@Component({
  selector: 'app-address-receiver',
  templateUrl: './address-receiver.page.html',
  styleUrls: ['./address-receiver.page.scss'],
})
export class AddressReceiverPage implements OnInit {

  addrs:any;
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
   this.getAddressObjects();
  }

  openPage(zipCode, addressId) {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
  }

    this.provider.zipCode = zipCode;
    this.provider.addressId = addressId;
    console.log(this.provider.addressId);
    console.log(this.provider.zipCode);
    console.log(options);
    this.nativePageTransitions.slide(options);

    if(this.provider.search == "Search")
    {
      this.nav.navigateRoot('/tabs/tabs/groomers-availability');
    }
    else
    {
    this.nav.navigateRoot('/tabs/tabs/appointment');
    } 
  }

  deleteAddress(adId)
  {
      console.log(adId);

      adId.destroy().then((result)=>
      {
          console.log("Destroyed!!!");

          this.getAddressObjects();
         
  
      });

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
    this.nav.navigateRoot('/tabs/tabs/tab1');
  }

  goAdd() {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
  }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot('/tabs/tabs/tab2');
  }
  goEdit() {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
  }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot('/address-edit');
  }

  editInfo(addId)
  {
    this.provider.addressId = addId;
    this.goEdit();

  }
 
  // saveAddressForm() {
  //   console.log("Entrando al address form");
  //   Parse.Cloud.run('createAddress', {
  //       user: Parse.User.current().id,
  //       name: this.placeName,
  //       address1: this.address,
  //       address2: this.apt,
  //       city: this.city,
  //       state: this.state,
  //       zipcode: this.zip,
  //       phone: this.phone
  //   }).then((result) => {
  //       console.log("Address info", this.placeName);
  //       // this.validateInputs();
  //       this.openPage();
  //   });
  // }
 
  getAddressObjects(){
    console.log("get address info")
    // console.log(this.placeName);
    // console.log(this.address);
    // console.log(this.apt);
    // console.log(this.city);
    // console.log(this.state);
    // console.log(this.zip);
    // console.log(this.phone);

    Parse.Cloud.run('getAddressesByUserId', {
      userId: Parse.User.current().id
    }).then((result) => {
      console.log(result)
       this.addrs = result;

        console.log("Address:", result);       
        if(result == 0)
        {
          this.goAdd();
        }
    });
    (error)=>{
      console.log(error);
    }
  }

//   openOrder() {
//     let options: NativeTransitionOptions = { 
//       duration: 500, 
//       iosdelay: 0,
//       androiddelay: 0
//   }
//     console.log(options);
//     if(this.provider.search == "Search")
//     {
//       this.provider.search = "";
//     }
//     console.log(this.provider.search);
    
//     this.nativePageTransitions.fade(options);
//     this.nav.navigateRoot('/tabs/tabs/history-order');
// }

openOrder() {
  let options: NativeTransitionOptions = { 
}
  console.log(options);
  if(this.provider.search == "Search")
  {
    this.provider.search = "";
  }
  console.log(this.provider.search);
  
  this.nav.navigateRoot('/tabs/tabs/history-order');
}

// openSearch() {
//   let options: NativeTransitionOptions = { 
//     duration: 500, 
//     iosdelay: 0,
//     androiddelay: 0
// }
//   console.log(options);
//   if(this.provider.search == "Search")
//   {
//     this.provider.search = ";"
//   }
//   console.log(this.provider.search);
//   this.nativePageTransitions.fade(options);
//   this.nav.navigateRoot('/tabs/tabs/search');
// }

openSearch() {
  let options: NativeTransitionOptions = { 
   
}
  console.log(options);
  if(this.provider.search == "Search")
  {
    this.provider.search = ";"
  }
  console.log(this.provider.search);
 
  this.nav.navigateRoot('/tabs/tabs/search');
}

// openHome() {
//   let options: NativeTransitionOptions = { 
//     duration: 500, 
//     iosdelay: 0,
//     androiddelay: 0
// }
//   console.log(options);
//   if(this.provider.search == "Search")
//   {
//     this.provider.search = "";
//   }
//   console.log(this.provider.search );
//   this.nativePageTransitions.fade(options);
//   this.nav.navigateRoot('/home-pets');
// }

openHome() {
  let options: NativeTransitionOptions = { 
}
  console.log(options);
  if(this.provider.search == "Search")
  {
    this.provider.search = "";
  }
  console.log(this.provider.search );

  this.nav.navigateRoot('/home-pets');
}

// openProfile() {
//   let options: NativeTransitionOptions = { 
//     duration: 500, 
//     iosdelay: 0,
//     androiddelay: 0
// }
//   console.log(options);
//   if(this.provider.search == "Search")
//   {
//     this.provider.search ="";
//   }
//   console.log(this.provider.search);
//   this.nativePageTransitions.fade(options);
//   this.nav.navigateRoot('/tabs/tabs/client-profile');
// }

openProfile() {
  let options: NativeTransitionOptions = { 
}
  console.log(options);
  if(this.provider.search == "Search")
  {
    this.provider.search ="";
  }
  console.log(this.provider.search);
  this.nav.navigateRoot('/tabs/tabs/client-profile');
}
}
