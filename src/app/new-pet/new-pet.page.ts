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

  name:any;
  age:any;
  size:any;
  breed:any;
  photo:any;
  type:any;


  constructor(private camera: Camera, public alert:AlertController, /*private photoLibrary: PhotoLibrary*/ private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController) 
  
  {
  parse.serverURL = 'https://parseapi.back4app.com/';
  Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
}

  ngOnInit() {
  }
  
  openCamera() {
    const options: CameraOptions= {
        quality: 100, 
        destinationType: this.camera.DestinationType.FILE_URI, 
        encodingType: this.camera.EncodingType.JPEG, 
        mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData)=> {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image='data:image/jpeg;base64,' + imageData;
    }
    , (err)=> {
        // Handle error
    }
    );
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
    this.nav.navigateRoot("tabs/tabs/cards-orders");
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
    this.nav.navigateRoot("tabs/tabs/cards-orders");
}

pet() {
    Parse.Cloud.run('createPet', {
        user: Parse.User.current().id, 
        name: this.name, 
        breed: this.breed, 
        age: this.age, 
        size: this.size, 
        photo: this.photo, 
        type: this.type
    }
    ).then((result)=> {
        this.openPage();
        console.log("PET INFO", this.name);
    }
    , (error)=> {
        console.log(error);
        this.openPage();
    }
    );
}
  


}
