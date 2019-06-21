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
  res:any;
  status:any;

  constructor(public nav:NavController, private nativePageTransitions: NativePageTransitions, public provider: GroomproviderService) {

    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");  
  }
   

  ngOnInit() {
    this.getHistory();
  }

  openPage(pet) {
    let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.provider.petServiceInfo = pet;
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot('/tabs/tabs/status-appointment');
  }

  getHistory(){

    console.log(Parse.User.current().id);

    Parse.Cloud.run('getHistory', { 
      type:"user"
    }). then((results) => {
      this.res=results;
      console.log(this.res);

        


      //success
    });
   
    (error)=>{
      console.log(error);
    }
  }

  getStatus(service)
  {
    if(service.get("status") == 'r')
    {
      return "Request";
    }

    if(service.get("status") == 'c')
    {
      return "Cancel";
    }


    if(service.get("status") == 'a')
    {
      return "Acepted";
    }

    if(service.get("status") == 'f')
    {
     return "Finish";
    }

  }

 

}
