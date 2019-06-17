import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService } from "./../../app/groomprovider.service";
import * as Parse from 'parse';

let parse = require('parse');

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  search: string;
  groomers: any;

  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController, public provider : GroomproviderService) {

      parse.serverURL = 'https://parseapi.back4app.com/';
      Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
     }



  ngOnInit() {

    this.searchGroomer();
  }

  openPage(groomer) {
    let options: NativeTransitionOptions = {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }

    //hold reference to selected groomer before continuing with the proccess
    this.provider.groomer = groomer;

    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("/tabs/tabs/cards-orders");
  }

  searchChange(ev) {
    //search input changed so run query again
    let val = ev.target.value;
    //alert("search change: " + val);
    this.search = val;
    this.searchGroomer();
  }

  //endpoint para buscar groomer
  searchGroomer() {

    let searchText = this.search;

    if( searchText == "" ) {
      searchText = null;
    }

    Parse.Cloud.run('searchGroomer', {
      search: searchText
    }).then((result)=> {
        //success search results
        this.groomers = result;
    }
    , (error)=> {
        //an error occur
        console.log(error);
        //this.openPage();
    });
  }


}
