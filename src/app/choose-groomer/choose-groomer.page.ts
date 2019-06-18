import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import {GroomproviderService} from "./../../app/groomprovider.service";
import * as Parse from 'parse';

let parse = require('parse');

@Component({
  selector: 'app-choose-groomer',
  templateUrl: './choose-groomer.page.html',
  styleUrls: ['./choose-groomer.page.scss'],
})
export class ChooseGroomerPage implements OnInit {

  constructor(public provider:GroomproviderService , private nativePageTransitions: NativePageTransitions, public nav: NavController,) { }

    petName:any;

  ngOnInit() {

   this.getPet();
   console.log(this.provider.groomers);
  }

  getPet()
  {
      let pet = "BKMOYQdVGW";
    Parse.Cloud.run('getPetsInfo', {
      petId: this.provider.petid
    }).then((result) => {
      
      console.log(result);
      console.log(result.get('name'));

      this.petName = result.get('name');
      
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
    this.nav.navigateRoot('/tabs/tabs/groomers-profile');
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
    this.nav.navigateRoot('/tabs/tabs/appointment');
  }

}
