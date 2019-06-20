import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService} from "./../../app/groomprovider.service";
import * as Parse from 'parse';

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
      // this.name = this.groomerId.get('name'); 
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
    this.nav.navigateRoot("/tabs/tabs/add-credit-card");
  }

}
