import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  public slideOpts = {
    effect: 'flip',
  };

  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController,) { }

  ngOnInit() {
  }

  // openPage() {
  //   let options: NativeTransitionOptions = {
  //       direction: 'left', 
  //       duration: 400, 
  //       slowdownfactor: -1, 
  //       slidePixels: 20, 
  //       iosdelay: 100
  //   }
  //   console.log(options);
  //   this.nativePageTransitions.slide(options);
  //   this.nav.navigateRoot("/login");
  // }

  

  openPage() {
    let options: NativeTransitionOptions = { 
      duration: 500, 
      iosdelay: 0,
      androiddelay: 0
  }
    console.log(options);
    this.nativePageTransitions.fade(options);
    this.nav.navigateRoot("/login");
  }

}
