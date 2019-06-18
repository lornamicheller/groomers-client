import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import {GroomproviderService} from "./../../app/groomprovider.service";
import * as Parse from 'parse';

let parse = require('parse');

@Component({
  selector: 'app-choose-groomer',
  templateUrl: './choose-groomer.page.html',
  styleUrls: ['./choose-groomer.page.scss'],
})
export class ChooseGroomerPage implements OnInit {

  constructor(public provider:GroomproviderService , private nativePageTransitions: NativePageTransitions, public nav: NavController,) { }

    search:string;
    petName:any;
    groomers: any; //result search
    preferredGroomers: any;
    availableGroomers: any;
    pet:any;
    option:string;

  ngOnInit() {

    this.option = "groomer-available";

   this.getPet();
   console.log(this.provider.groomers);

   this.groomers = this.provider.groomers;
  }

  getPet()
  {
      let pet = "BKMOYQdVGW";
    Parse.Cloud.run('getPetsInfo', {
      petId: this.provider.petid
    }).then((result) => {
      
      console.log(result);
      console.log(result.get('name'));

      this.petName = result.get('name');
      
    });
   
    (error)=>{
      console.log(error);
    }

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
    this.nav.navigateRoot('/tabs/tabs/groomers-profile');
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
    this.nav.navigateRoot('/tabs/tabs/appointment');
  }

  searchFilter(groomers) {

    let results = [];
    if(groomers == null || !Array.isArray(groomers)) { return results; }

    let search = this.search || "";
    search = search.toLowerCase();

    if(search == "") { return groomers; }

    let words = search.split(" ");
    for(let i = 0; i < groomers.length; i++) {
      let groomerName = groomers[i].get("businessName").toLowerCase();
      let match = false;
      for(let w = 0; w < words.length; w++) {
        if( groomerName.includes( w ) ) {
          //search match, add groomer to results
          match = true;
          break;
        }
      }
      if( match ) {
        //add groomer to results array
        results.push( groomers[i] );
      }
    }

    return results;
  }

  showAvailable() {
    this.option = "groomers-available";
    this.groomers = this.searchFilter(this.availableGroomers);
  }

  showPreferred() {
    this.option = "groomers-preferred";
    this.groomers = []; //clear list
    this.getPreferredGroomers();
  }

  getPreferredGroomers() {

    let currentUser = Parse.User.current();

    let petsID = [this.provider.petid];

    Parse.Cloud.run('getGroomers', {

      date: this.provider.appointmentDate,
      startDate: this.provider.startDay,
      endDate: this.provider.endDay,
      //time: this.mydate,
      pets: petsID,
      preferred: true,
      zipcode: currentUser.get("zipcode")
  
    }).then((result)=> {
  
      this.preferredGroomers = result;
      this.searchFilter( this.preferredGroomers );
        
    }
    , (error)=> {
        //an error occur
        console.log("an error occur getting preferred groomers...");
        console.log(error);
        //this.openPage();
    });

  }

}
