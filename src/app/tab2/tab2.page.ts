import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from "@ionic/angular";
import {GroomproviderService } from "./../../app/groomprovider.service";
import * as Parse from 'parse';
let parse = require('parse');

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public provider: GroomproviderService,public alert: AlertController,public navigate : NavController, public nativePageTransitions: NativePageTransitions) 
  { 
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
  }

  addrs:any;

ngOnInit() {
   this.getAddressObjects();
   console.log(Parse.User.current().id);
  }


  getAddressObjects()
  {
        Parse.Cloud.run('getAddressesByUserId', {
          userId: Parse.User.current().id
        }).then((result) => {

          if(result == 0 )
          {
            console.log("You can add address");
          }
          else
          {
            this.navigate.navigateRoot('/tabs/tabs/address-receiver');
          }
          console.log(result)
          this.addrs = result;

          console.log( this.addrs);


          
          
        });
        (error)=>{
          console.log(error);
        }
  }

  async addressError(){
  
    const alert = await this.alert.create({
      header: 'ALERT!',
      message: 'You have a address!',
      buttons: [
          {
            text: 'OK',
            cssClass: 'greenBtn',
          }
        ]
      });
  
      await alert.present();

}


  openPage() {
    let options: NativeTransitionOptions = {
      direction: 'left', 
      duration: 400, 
      slowdownfactor: -1, 
      slidePixels: 20, 
      iosdelay: 100
  }
  console.log('transition');
  console.log(options);
  
  this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/tabs/tabs/address-form");
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
    if(this.provider.search == "Search")
    {
      this.provider.search = "";
    }

    console.log(this.provider.search);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/tabs/tabs/tab1");
  }

}
