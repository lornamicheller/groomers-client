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
        quality: 50, 
        targetWidth: 900, 
        targetHeight: 600, 
        destinationType: this.camera.DestinationType.DATA_URL, 
        encodingType: this.camera.EncodingType.JPEG, 
        mediaType: this.camera.MediaType.PICTURE,
         saveToPhotoAlbum: false, 
         allowEdit: true, 
         sourceType: 1
      }

      
    this.camera.getPicture(options).then((imageData)=> {
      this.picture='data:image/jpeg;base64,' + imageData;
      let base64Image=this.picture;
      let name="photo.jpeg";
      let parseFile=new Parse.File(name, {
          base64: base64Image
      }
      ); //convierte la foto a base64
      parseFile.save().then((savedFile)=> {
          console.log('file saved:' + savedFile);
          this.savedPhoto=this.picture;
          this.photo=savedFile;
      }
      , (err)=> {
          console.log('error grabando file: ' + err)
      }
      );
  }
  , (err)=> {
      console.log('error de camara' + err);
  }
  );
  }

  openLibrary() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 50,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG, 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData)=> {
      this.picture='data:image/jpeg;base64,' + imageData;
      let base64Image=this.picture;
      let name="photo.jpeg";
      let parseFile=new Parse.File(name, {
          base64: base64Image
      }
      ); //convierte la foto a base64
      parseFile.save().then((savedFile)=> {
          console.log('file saved:' + savedFile);
          this.savedPhoto=this.picture;
          this.photo=savedFile;
      }
      , (err)=> {
          console.log('error grabando file: ' + err)
      }
      );
  }
  , (err)=> {
      console.log('error de camara' + err);
  }
  );
}


  async presentAlertConfirm() {
    const alert = await this.alert.create({
      header: 'Camera',
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

    if(this.name == null || this.age == null || this.breed == null || this.size ==null)
    {
          this.errorInfo();
    }
    else
    {
    this.changeInfomation.set("name", this.name);
    this.changeInfomation.set("age", this.age);
    this.changeInfomation.set("breed", this.breed);
    this.changeInfomation.set("size", this.size);
    this.changeInfomation.set("type", this.type);

    if(this.picture !=null)
    {
      this.changeInfomation.set("petImage", this.picture);
    }
    
 

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

