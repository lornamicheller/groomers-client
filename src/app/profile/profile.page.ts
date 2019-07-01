import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as Parse from 'parse';
import { GroomproviderService } from "./../../app/groomprovider.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


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
  type: any;
  picture:any;
  savedPhoto:any;

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
        quality: 150,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      this.camera.getPicture(options).then((imageData) => {
  
        this.picture = 'data:image/jpeg;base64,' + imageData;
  
        let base64Image = this.picture;
        let name = "photo.jpeg";
  
        let parseFile = new Parse.File(name, {
          base64: base64Image
        }); //convierte la foto a base64
        parseFile.save().then((savedFile) => {
          console.log('file saved:' + savedFile);
          this.savedPhoto= this.picture;

          this.changeInfomation.set("petImage", savedFile);

          this.changeInfomation.save().then((result)=>
          {
            console.log(result);
            // this.savePhoto();
            
          
          });
          
          this.provider.photo = savedFile; //foto tomada
        }, (err) => {
          console.log('error grabando file: ' + err)
        });
  
      }, 
   (err)=> {
      console.log('error de camara' + err);
      alert(err);
  }
  );
  }

  openLibrary() {
    const options: CameraOptions = {
      quality: 50, 
      targetWidth: 900, 
      targetHeight: 600, 
      destinationType: this.camera.DestinationType.DATA_URL, 
      encodingType: this.camera.EncodingType.JPEG, 
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
       saveToPhotoAlbum: false, 
       allowEdit: true 
    }

    let self = this;

    this.camera.getPicture(options).then((imageData)=> {
      self.picture='data:image/jpeg;base64,' + imageData;
      self.changeInfomation.set("petImage", self.picture);
      let base64Image=self.picture;
      let name="photo.jpeg";
      let parseFile=new Parse.File(name, {
          base64: base64Image
      }
      ); //convierte la foto a base64
      parseFile.save().then((savedFile)=> {
          console.log('file saved:' + savedFile);
         
          self.savedPhoto=self.picture;
          self.photo=savedFile;


          this.changeInfomation.set("petImage", savedFile)

          this.changeInfomation.save().then((result)=>
          {
            console.log("SAVEDD LIBRARY");
            // this.savePhoto();
          });

      }
      , (err)=> {
          console.log('error grabando file: ' + err);
          alert(err);
      }
      );
  }
  , (err)=> {
      console.log('error de camara' + err);
      alert(err);
  }
  );
}

async presentAlertConfirm() {
  const alert = await this.alert.create({
    header: 'Image for Pet',
    subHeader:'Choose an option',
    buttons: [
      {
        text: 'Camera',
        role: 'camera',
        cssClass: 'secondary',
        handler: (blah) => {
          this.openCamera();
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Gallery',
        handler: () => {
          this.openLibrary();
          console.log('Confirm Okay');
        }
      },
      {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
    ]
  });

  await alert.present();
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
      this.nav.navigateRoot("/home-pets");
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
      this.nav.navigateRoot("/home-pets");
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
          console.log("Pet", this.changeInfomation);

          this.name = result.get("name");
          this.age = result.get("age");
          this.breed = result.get("breed");
          this.size = result.get("size");
          this.picture = result.get("petImage").url();

      });


      (error) => {
          console.log(error);
      }
  }
  


  saveInformation()
  {
    let self = this;

    if(self.name == null || self.age == null || self.breed == null || self.size ==null)
    {
      self.errorInfo();
    }
    else
    {
      self.changeInfomation.set("name", self.name);
      self.changeInfomation.set("age", self.age);
      self.changeInfomation.set("breed", self.breed);
      self.changeInfomation.set("size", self.size);
      self.changeInfomation.set("type", self.type);
      // self.changeInfomation.set("petImage", self.picture);
    
    self.changeInfomation.save().then((result)=>
    {
      console.log("SAVED!!");
      console.log(result);
      // this.savedInfo();
      this.openPage();
     
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

async savePhoto(){
  
  const alert = await this.alert.create({
    header: 'ALERT!',
    message: 'Your new picture has been saved!',
    buttons: [{
      text: 'OK',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
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

    
cat()
{
  
  this.type = "CAT";
  console.log("CAT: ",this.type);
}

dog()
{
  this.type = "DOG";
  console.log("DOG: ",this.type);
}



}

