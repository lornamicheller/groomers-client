import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {GroomproviderService } from "./../../app/groomprovider.service";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

fullService:any;
bathService:any;



  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, public provider: GroomproviderService) { 
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
    //this.navigate.navigateRoot("/tabs/tabs/tab2");
    this.navigate.navigateRoot("/tabs/tabs/address-receiver");
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
    this.navigate.navigateRoot("/home-pets");
  }

  chooseFullGrooming(){
      // if(this.fullService == 'Full Grooming')
      //  // this.provider.services = 'Full Grooming';
      //   console.log(this.fullService);
      this.provider.services= "Full Grooming";
      console.log(this.provider.services);
         this.openPage();
      
    }

    chooseBath(){
    //   if(this.bathService == 'Bath')
    //  // this.provider.services = 'Bath';
    //   console.log(this.bathService);
    this.provider.services= "Bath";
    console.log(this.provider.services);
      this.openPage();
  }
  

}

