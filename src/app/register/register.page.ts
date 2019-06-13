import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {GroomproviderService } from "./../../app/groomprovider.service";
import * as Parse from 'parse';
import { ToastController, NavController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";

var parse = require ('parse');

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  register:boolean;
  email:string;//sing in / register
  password: string;// sing in / register
  name:string; //register
  lastName:string; //register
  zipCode:string; //register
  role: any; //cliente
  user: any;
  result:string;

  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController, public provider : GroomproviderService,
    public toastCtrl : ToastController, public alertCtrl : AlertController) {
      
      parse.serverURL = 'https://parseapi.back4app.com/';
      Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");
      this.name= this.provider.name;
      this.role="C";
    
    }

  ngOnInit() {
    this.register = true;
  }

    changeRegistro(registro:boolean){
      this.register = registro;
      console.log("Status changed")
    }

    openPage(){ //funcion para pasar de una pagina a otra. 

      let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    console.log("transition")
    this.nav.navigateRoot("/tabs/tabs/add-pet");
    console.log("transition working");   
  }

     goBack() { //funcion para pasar de una pagina a otra. 

      let options: NativeTransitionOptions = {
        direction: 'right', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log('transition');
    console.log(options);
    
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("/login");
    console.log('transition working')

     }
     async notVerified(){
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Your account has not been registered.',
        buttons: [{
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
            //this.popController.dismiss();
            this.nav.navigateRoot("/register");
          }
        }]
      });
    
      await alert.present();
    }

      async alert(){ //alerta para invalid email o psswrd
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Correo electrónico / Contraseña inválida.',
          buttons: [{
            text: 'OK',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }]
        });
      
        await alert.present();
      }

      signUpUser(){
       if(this.name==null ||this.lastName==null || this.email==null || this.password==null || this.zipCode==null){
          this.notVerified();
       }else{
         this.provider.name = this.name;
         this.provider.lastName = this.lastName
         this.provider.email = this.email;
         this.provider.password = this.password;
        this.provider.zipCode = this.zipCode;
        this.provider.userName = this.email;
         console.log("User signed up as: " + this.name);
        this.provider.signUp();
        this.openPage();

        
        }

    }
}
