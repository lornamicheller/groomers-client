import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import * as Parse from 'parse';
import { AlertController } from "@ionic/angular";
import {GroomproviderService } from "./../../app/groomprovider.service";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

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
  

  constructor(public facebook:Facebook,private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController, public alertCtrl : AlertController, public provider : GroomproviderService) { }

  ngOnInit() {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");
  }

  openLogin() {
    console.log("Open Login");
    let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    // this.nav.navigateRoot("/tabs/tabs/cards-orders");
    this.nav.navigateRoot("/home-pets");
  }


  async facebookLogin() {

    console.log("entrando al Facebook Login");

    try {
      // Log in to Facebook and request user data
      let facebookResponse = await this.facebook.login(['public_profile', 'email']);
      let facebookAuthData = {
        id: facebookResponse.authResponse.userID,
        access_token: facebookResponse.authResponse.accessToken,
      };

      // Request the user from parse
      let toLinkUser = new Parse.User();
      let user = await toLinkUser._linkWith('facebook', {authData: facebookAuthData});

      // If user did not exist, updates its data
      if (!user.existed()) {
        let userData = await this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture)', []);
        user.set('username', userData.name);
        user.set('name', userData.name);
        user.set('email', userData.email);
        await user.save();
      }

      // this.nav.navigateRoot('HomePage');
      
    } catch (err) {
      console.log('Error logging in', err);

      this.toastCtrl.create({
        message: err.message,
        duration: 2000
      })
    }
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
