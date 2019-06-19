import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService } from "./../../app/groomprovider.service";
import * as Parse from 'parse';
let parse =require('parse');

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {

  constructor(public provider: GroomproviderService,private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController) 
    {
      parse.serverURL = 'https://parseapi.back4app.com/';
      Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
     }

     pets:any;

    name:any;
    phone:any;
    service:any;

  ngOnInit() {

    this.name = Parse.User.current().get('fullname');
    this.phone = Parse.User.current().get('phone');
    this.service = this.provider.paymentMethod;
    this.getPet();
  }


  getPet()
  {
    Parse.Cloud.run('getPetsInfo', {
      petId: this.provider.petid
    }).then((result) => {
      console.log(result);
      this.pets = result;
    });
   
    (error)=>{
      console.log(error);
    }
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
    this.nav.navigateRoot("/tabs/tabs/order-success");
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
    this.nav.navigateRoot("/make-payment");
  }

}
