import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import * as Parse from 'parse';


let parse = require('parse');


@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.page.html',
  styleUrls: ['./add-credit-card.page.scss'],
})
export class AddCreditCardPage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController) { }

  ngOnInit() {

    // this.verifyCard();
  }


  // verifyCard()
  // {
  //   console.log(Parse.User.current().get('stripeCustomer'));

  //   if(Parse.User.current().get('stripeCustomer') != null)
  //   {
  //       this.redirectPage();
  //   }
  //   else
  //   {
  //     this.openPage();
  //   }

    
  // }

  goBack() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
  }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot('/tabs/tabs/groomers-profile');
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
    this.nav.navigateRoot('/tabs/tabs/add-new-card');
  }

  redirectPage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
  }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot('/tabs/tabs/card-receiver');
  }




}
