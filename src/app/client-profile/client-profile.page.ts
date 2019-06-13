import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";
import * as Parse from 'parse';
let parse =require('parse');

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.page.html',
  styleUrls: ['./client-profile.page.scss'],
})
export class ClientProfilePage implements OnInit {

  constructor(public alert:AlertController,private nativePageTransitions: NativePageTransitions, public nav: NavController)
  { 
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
  }
  fullName: any;
  email:any;
  phone:any;
  userChange:any;


  ngOnInit() {
    console.log(Parse.User.current().id);
    console.log(Parse.User.current().get('fullName'));
    console.log(Parse.User.current().get('email'));
    console.log(Parse.User.current().get('phone'));
    this.fullName = Parse.User.current().get('fullName');
    this.email = Parse.User.current().get('email');
    this.phone = Parse.User.current().get('phone');
  }

  saveChanges()
  {
    console.log("Save Change");
    //   this.userChange = new Parse.User();

    //   this.userChange.set('fullName', this.fullName);
    //   this.userChange.set('email', this.email);
    //   this.userChange.set('phone', this.phone);

    //  this.userChange.save().then((response)=>
    //   {
    //       console.log(response);
    //   });


    Parse.User.current().set('fullName', this.fullName);
    Parse.User.current().set('email', this.email);
    Parse.User.current().set('phone', this.phone);

    Parse.User.current().save().then((result)=>
    {
        console.log(result);
        this.savedInfo();
    });
    
  }

  async savedInfo(){
  
    const alert = await this.alert.create({
      header: 'ALERT!',
      message: 'Your information has been saved!',
      buttons: [
          {
            text: 'OK',
            cssClass: 'greenBtn',
          }
        ]
      });
  
      await alert.present();

}

  closeAccount() {
    let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("/login");
  }

}
