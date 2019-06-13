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
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 

    
    alert("constructor pra...");
  }

  ngOnInit() {
    this.Id = Parse.User.current().id;
    this.getPetObjects();

    this.liveQuery = new Parse.Query('Pets');
    this.petSubs = this.liveQuery.subscribe();

    this.petSubs.on('open', () => {
      console.log('subscription opened');
     });

  }

  ngAfterViewInit() {
    alert("wow view init...");
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
    alert("Get Pets...");
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
