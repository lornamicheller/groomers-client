import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import * as Parse from 'parse';
import {GroomproviderService } from "./../../app/groomprovider.service";


let parse = require('parse');
@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.page.html',
  styleUrls: ['./history-order.page.scss'],
})
export class HistoryOrderPage implements OnInit {

  groomers:any;
  address:any;
  client:any;
  pets:any;

  constructor(public nav:NavController, private nativePageTransitions: NativePageTransitions) {

    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");  
  }
   

  ngOnInit() {
  }

  openPage() {
    let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot('/tabs/tabs/status-appointment');
  }

  getHistory(){

    console.log(Parse.User.current().id);

    Parse.Cloud.run('getHistory', { 
      type:"user"
    }). then((results) => {
      //success
    });
   
    (error)=>{
      console.log(error);
    }
  }

 

}
