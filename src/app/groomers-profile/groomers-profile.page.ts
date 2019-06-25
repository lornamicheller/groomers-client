import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService} from "./../../app/groomprovider.service";
import * as Parse from 'parse';
import { getInheritedFactory } from '@angular/core/src/render3';

let parse = require('parse'); 

@Component({
  selector: 'app-groomers-profile',
  templateUrl: './groomers-profile.page.html',
  styleUrls: ['./groomers-profile.page.scss'],
})
export class GroomersProfilePage implements OnInit {

  constructor(public provider: GroomproviderService,private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController) { }


    groomerId:any;
    name: any;


  ngOnInit() {

      this.groomerId = this.provider.groomerId;
      console.log("Groomer Id: ", this.groomerId);  
      console.log(this.provider.setGromId) ;
      // this.name = this.groomerId.get('name'); 

      this.getInfo();

  }

  getInfo()
  {
    console.log("entrando al get Infor");
    Parse.Cloud.run('getGoomerId', {
      userId: this.provider.setGromId  
    }).then((result)=>{
     
      this.groomerId = result;
      console.log(this.groomerId);
    }
    , (error)=> {
        //an error occur
        console.log(error);
        //this.openPage();
    });

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

    if(Parse.User.current().get('stripeCustomer') !=null)
    {
      this.nav.navigateRoot("/tabs/tabs/card-receiver");
    }
    else
    {

    
    this.nav.navigateRoot("/tabs/tabs/add-credit-card");
    }
  }


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
    this.nav.navigateRoot("/tabs/tabs/choose-groomer");
  }


}
