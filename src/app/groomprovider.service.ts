import { Injectable } from '@angular/core';
import {NavController, AlertController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';


var parse = require('parse')

@Injectable({
  providedIn: 'root'
})
export class GroomproviderService {

  email: string;//sing in
  petServiceInfo:any;
  password: string;// sing in 
  name:string;
  lastName:string;
  zipCode:string;
  role: any;
  user:any;
  card:any;
  currentUser:any;
  userName:string;
  petid: any;
  breed:any;
  age:any;
  size:any;
  photo:any;
  fullName:any;
  chooseDate:any;
  services:any;
  paymentMethod:any;
  search:any;
  groomerId:any;
  petSize:any;
  groomerObject:any;
  momentDay:any;
  momentTime:any;
  serviceId:any;

  setGromId:any;

  groomers:any;
  petsArray:any;
  addressId:any;
  momentRequest:any;
  typeOfPets:any;
  customerId:any;
  customerCardId:any;

  identifyGroomer:any;

  petType:any;


  typeOfService:any;

  cardId:any;
  

  groomer: any;

  appointmentDate: Date;
  startDay: Date;
  endDay: Date;
 
  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController, public provider : GroomproviderService,
    public alertCtrl : AlertController) {
      
      parse.serverURL = 'https://parseapi.back4app.com/';
      Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");
     
    
    }


   ngOnInIt() {

   

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
  

  signUp(){
    const user = new Parse.User();
    user.set('firstName',this.name);
    user.set('lastName', this.lastName);
    user.set('email',this.email);
    user.set('password', this.password);
    user.set('zipcode', this.zipCode);
    user.set('username', this.userName);
    user.set('fullName',this.fullName);
    console.log("User signed up as: " + this.name);
  
    user.signUp().then((user) => {
      console.log('Im in!');
      this.currentUser = user;
      this.openPage();
    }).catch((error) => {
      console.log(error);
      return false;
    });
    }
}
