import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import * as Parse from 'parse';
import { AlertController } from "@ionic/angular";
import {GroomproviderService } from "./../../app/groomprovider.service";

var parse = require ("parse");
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;//sign in / register
  password: string;// sign in / register
  user: any;
  

  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController, public alertCtrl : AlertController, public provider : GroomproviderService) { }

  ngOnInit() {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");
  }

  openLogin() {
    let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("/tabs/tabs/cards-orders");
  }

  openRegister() {
    let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("/register");
  }
  
  async alert(){ //alerta para invalid email o psswrd
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Invalid username/password.',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
          //this.popController.dismiss();
          this.nav.navigateRoot("/login");
        }
      }]
    });
  
    await alert.present();
  }

  singIn(){
    
    Parse.User.logIn(this.email, this.password).then((mUser) => {
        console.log(this.email, this.password)
        console.log('Logged in successfully', mUser);
        const currentUser = Parse.User.current(); //usuario actual logged
        this.user = currentUser; //igual a variable global

      
        this.openLogin();

      }, (error) => {
        //error in login
        console.log(error);
        this.alert();
      });
    }
      
  
}
