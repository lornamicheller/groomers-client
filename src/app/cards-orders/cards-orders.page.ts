import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {GroomproviderService } from "./../../app/groomprovider.service";
let parse = require('parse');
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

  liveQuery:any;
  petSubs:any;
  
  constructor(public nav:NavController, public provider : GroomproviderService, private nativePageTransitions: NativePageTransitions) { 

    
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
      console.log('pet created');
      this.getPetObjects();
    });

    this.petSubs.on('update', (object) => {
      console.log('pet updated');
      this.getPetObjects();
    });

    this.petSubs.on('enter', (object) => {
      console.log('pet enter');
      this.getPetObjects();
    });

    this.petSubs.on('leave', (object) => {
      console.log('pet leave');
      this.getPetObjects();
    });

    this.petSubs.on('delete', (object) => {
      console.log('pet delete');
      this.getPetObjects();
    });

    this.petSubs.on('close', (object) => {
      console.log('pet close');
    });

  }

  ngOnDestroy() {
    
    //stop sunscription of live-query
    this.petSubs.unsubscribe();
  }

  

  goToEdit(petid)
  {
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
    Parse.Cloud.run('getPetsByUserId', {
      user: Parse.User.current().Id
    }).then((result) => {
      console.log(result)
      this.pets = result;
      
    });
   
    (error)=>{
      console.log(error);
    }
  }


 

}
