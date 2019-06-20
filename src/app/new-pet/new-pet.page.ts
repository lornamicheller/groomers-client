import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as Parse from 'parse';
import { AlertController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
//import { PhotoLibrary } from '@ionic-native/photo-library/ngx';

let parse =require('parse');
@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.page.html',
  styleUrls: ['./new-pet.page.scss'],
})
export class NewPetPage implements OnInit {

  name:any ;
  age:any ;
  size:any ;
  breed:any;
  photo:any ;
  type:any ;


  constructor(private camera: Camera, public alertCtrl:AlertController, /*private photoLibrary: PhotoLibrary*/ private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController) 
  
  {
  parse.serverURL = 'https://parseapi.back4app.com/';
  Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
}

picture:any;
savedPhoto:any;

  ngOnInit() {

    console.log(Parse.User.current().id);
    
  }
  
  openCamera() {
    const options: CameraOptions = {
      quality: 100,
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
     
       this.photo = savedFile;

      }, (err) => {
        console.log('error grabando file: ' + err)
      });

    }, (err) => {
      console.log('error de camara' + err);
    });
  }

openPage() {
    let options: NativeTransitionOptions= {
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

goBack() {
    let options: NativeTransitionOptions= {
        direction: 'right', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("/tabs/tabs/cards-orders");
}

pet() {

    // alert("breed: " + this.breed);

    //validate require fields-inputs

    console.log(this.age);
    console.log(this.name);
    console.log(this.type);
    console.log(this.size);
    console.log(this.breed);

    if( this.name == "" || this.breed == "" || this.age == "" || this.size == "" || this.type == "") {
        //show alert
        this.alertMessage("All fields are require.");
        // return;
    }

    console.log(Parse.User.current().id);


    Parse.Cloud.run('createPet', {
        user: Parse.User.current().id, 
        name: this.name, 
        breed: this.breed, 
        age: this.age, 
        size: this.size,
        photo: this.photo,
        type: this.type
    }).then((result)=> {
        //success creating pet
        this.SuccessPet();
        console.log("PET INFO", this.name);
    }
    , (error)=> {
        //an error occur
        console.log(error);
        //this.openPage();
    });
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


async alertMessage(message){ //alerta simple con mensaje
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: message,
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          //do something if needed
        }
      }]
    });
  
    await alert.present();
  }


async SuccessPet(){ //alerta simple con mensaje
  const alert = await this.alertCtrl.create({
    header: 'Alert!',
    message: "Pets added",
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
  


}
