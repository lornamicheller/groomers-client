import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import Parse from 'parse';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

let parse = require('parse');

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public NavCtrl:NavController, public nativePageTransitions: NativePageTransitions) {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
   }

  ngOnInit() {
    setTimeout(() => {this.goHome();},4200);
    console.log("working");
  }

  goHome(){
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");
    Parse.User.currentAsync().then(user => {
      console.log('Logged user', user);
  
      user != null ? this.NavCtrl.navigateRoot('/tabs/tabs/cards-orders') : this.NavCtrl.navigateRoot('/login');
    }, err => {
      console.log('Error getting logged user',err);
      let options: NativeTransitionOptions = {
        direction: 'left',
        duration: 200,
        slowdownfactor: -1,
        slidePixels: 20,
        iosdelay: 100, 
        androiddelay: 100,
       }
      this.nativePageTransitions.slide(options);
      this.NavCtrl.navigateRoot('/login');
      
    });
  }

}
