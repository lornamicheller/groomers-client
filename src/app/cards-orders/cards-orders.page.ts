import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {GroomproviderService } from "./../../app/groomprovider.service";
let parse = require('parse');
import { AlertController } from "@ionic/angular";
@Component({
  selector: 'app-cards-orders',
  templateUrl: './cards-orders.page.html',
  styleUrls: ['./cards-orders.page.scss'],
})
export class CardsOrdersPage implements OnInit {

  breed:any;
  age:any;
  size:any;
  photo:any;
  name:any;
  Id:any;
  pets:any;
  petId:any;

  liveQuery:any;
  petSubs:any;
  deletePet:any;
  checkImage:any;
  
  constructor(public alert:AlertController,public nav:NavController, public provider : GroomproviderService, private nativePageTransitions: NativePageTransitions) { 

    
    parse.serverURL = 'https://parseapi.back4app.com/';
    parse.liveQueryServerURL = 'wss://groomers.back4app.io'
    Parse.liveQueryServerURL = 'wss://groomers.back4app.io'
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");
    
  }



  ngOnInit() {
    this.Id = Parse.User.current().id;
    this.getPetObjects();

    //setup live query
    this.liveQuery = new Parse.Query('Pets');
    this.liveQuery.equalTo("user", Parse.User.current());
    this.petSubs = this.liveQuery.subscribe();

    this.petSubs.on('open', () => {
      console.log('pet subscription opened');
    });

    this.petSubs.on('create', (object) => {
      console.log(object);
      console.log('pet created');
      this.getPetObjects();
    });

    this.petSubs.on('update', (object) => {
      console.log(object);
      console.log('pet updated');
      
      this.getPetObjects();
    });

    this.petSubs.on('enter', (object) => {
      console.log(object);
      console.log('pet enter');
      this.getPetObjects();
    });

    this.petSubs.on('leave', (object) => {
      console.log(object);
      console.log('pet leave');
      this.getPetObjects();
    });

    this.petSubs.on('delete', (object) => {
      console.log(object);
      console.log('pet delete');
      this.getPetObjects();
    });

    this.petSubs.on('close', (object) => {
      console.log(object);
      console.log('pet close');
    });

  }


  deleteDog(dogs)
  { 
    console.log(dogs);
    dogs.destroy().then((result)=>
    {
        console.log("Destroyed!!!");
        this.savedInfo();

    });

  }
 
  

  goToEdit(petid)
  {
    console.log(petid);
      this.provider.petid = petid;
      let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
      console.log(options);
      this.nativePageTransitions.slide(options);
      this.nav.navigateRoot('tabs/tabs/profile');
  }

  async savedInfo(){
  
    const alert = await this.alert.create({
      header: 'ALERT!',
      message: 'Your pet has been deleted!',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.getPetObjects();
          this.nav.navigateRoot('tabs/tabs/cards-orders');
        }
      }]
      });
  
      await alert.present();
      

}

  addNewPetTransition() {
      let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
      console.log(options);
      this.nativePageTransitions.slide(options);
      this.nav.navigateRoot('tabs/tabs/new-pet');
  }

  // destroyCard(deletePet)
  // {
  //   console.log("ID: ",deletePet);

  // }

  openPage() {
    let options: NativeTransitionOptions = {
      direction: 'left', 
      duration: 400, 
      slowdownfactor: -1, 
      slidePixels: 20, 
      iosdelay: 100
  }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot('/tabs/tabs/tab1');
}

  getPetObjects(){
    console.log("get pet info")
    console.log(Parse.User.current().id);
    Parse.Cloud.run('getPetsByUserId', {
      userId: Parse.User.current().id
    }).then((result) => {
      console.log(result)
      this.pets = result;
    this.checkImage= result.petImage;
    console.log(this.checkImage);
      
    });
   
    (error)=>{
      console.log(error);
    }
  }


 

}
