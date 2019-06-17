import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as Parse from 'parse';
import { GroomproviderService } from "./../../app/groomprovider.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";

let parse = require('parse');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  breed: any;
  age: any;
  size: any;
  photo: any;
  name: any;
  Id: any;
  pets: any;
  pet: any;

  changeInfomation:any;

  constructor(public alert:AlertController,private camera: Camera, public provider: GroomproviderService, private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController) {

      parse.serverURL = 'https://parseapi.back4app.com/';
      Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");

  }

  ngOnInit() {
      this.Id = Parse.User.current().id;
      this.getPetInfo();

  }

  openCamera() {
      const options: CameraOptions = {
       
        destinationType: this.camera.DestinationType.FILE_URI,
        quality: 100,
        targetWidth: 1000,
        targetHeight: 1000,
        encodingType: this.camera.EncodingType.JPEG, 
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        correctOrientation: true
      }

      this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
          // Handle error
      });
  }

      openPage() {
      let options: NativeTransitionOptions = {
          direction: 'right', 
          duration: 400, 
          slowdownfactor: -1, 
          slidePixels: 20, 
          iosdelay: 100
      }
      console.log(options);
      this.nativePageTransitions.slide(options);
      this.nav.navigateRoot("tabs/tabs/cards-orders");
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
      this.nav.navigateRoot("tabs/tabs/cards-orders");
    }

  getPetInfo() {
      console.log("getting pet info");
      console.log(this.provider.petid);
      Parse.Cloud.run('getPetsInfo', {
          petId: this.provider.petid
      }).then((result) => {
          console.log(result.get("name"));
          console.log(result.get("age"));
          console.log(result.get("breed"));
          console.log(result.get("size"));

          this.changeInfomation = result;

          this.name = result.get("name");
          this.age = result.get("age");
          this.breed = result.get("breed");
          this.size = result.get("size");

      });


      (error) => {
          console.log(error);
      }
  }
  


  saveInformation()
  {

    if(this.name == "" || this.age == "" || this.breed == "" || this.size =="")
    {
          this.errorInfo();
    }
    else
    {

    
    this.changeInfomation.set("name", this.name);
    this.changeInfomation.set("age", this.age);
    this.changeInfomation.set("breed", this.breed);
    this.changeInfomation.set("size", this.size);

    this.changeInfomation.save().then((result)=>
    {
      console.log("SAVED!!");
      console.log(result);
      this.savedInfo();
     
    });

   
  }

  }

  async savedInfo(){
  
    const alert = await this.alert.create({
      header: 'ALERT!',
      message: 'Your information has been saved!',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.openPage();
        }
      }]
      });
  
      await alert.present();
      

}

async errorInfo(){
  
  const alert = await this.alert.create({
    header: 'ALERT!',
    message: 'All fields must be full!',
    buttons: [
        {
          text: 'OK',
          cssClass: 'greenBtn',
        }
      ]
    });

    await alert.present();

    }
}
  

 
  

