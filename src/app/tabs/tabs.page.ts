import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {GroomproviderService } from "./../../app/groomprovider.service";
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public provider: GroomproviderService ,private nativePageTransitions: NativePageTransitions, public nav: NavController) { }

  ngOnInit() {
  }

  openSearch() {
    let options: NativeTransitionOptions = { 
      duration: 500, 
      iosdelay: 0,
      androiddelay: 0
  }
    console.log(options);
    if(this.provider.search == "Search")
    {
        this.provider.search = "";
    }
    console.log(this.provider.search);
    this.nativePageTransitions.fade(options);
    this.nav.navigateRoot('/tabs/tabs/search');
  }
  
  openOrder() {
    let options: NativeTransitionOptions = { 
      duration: 500, 
      iosdelay: 0,
      androiddelay: 0
  }
    console.log(options);
    if(this.provider.search == "Search")
    {
        this.provider.search = "";
    }
    console.log(this.provider.search);
    this.nativePageTransitions.fade(options);
    this.nav.navigateRoot('/tabs/tabs/history-order');
  }

  openProfile() {
    let options: NativeTransitionOptions = { 
      duration: 500, 
      iosdelay: 0,
      androiddelay: 0
  }
    console.log(options);
    if(this.provider.search == "Search")
    {
      this.provider.search = "";
    }
    console.log(this.provider.search );

    this.nativePageTransitions.fade(options);
    this.nav.navigateRoot('/tabs/tabs/client-profile');
  }

  openService() {
    let options: NativeTransitionOptions = { 
      duration: 500, 
      iosdelay: 0,
      androiddelay: 0
  }
    console.log(options);
    if(this.provider.search == "Search")
    {
      this.provider.search = "";
    }
    console.log(this.provider.search);
    
    this.nativePageTransitions.fade(options);
    this.nav.navigateRoot('/home-pets');
  }

}
