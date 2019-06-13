import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-groomers-profile',
  templateUrl: './groomers-profile.page.html',
  styleUrls: ['./groomers-profile.page.scss'],
})
export class GroomersProfilePage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController) { }

  ngOnInit() {
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
    this.nav.navigateRoot("/tabs/tabs/add-credit-card");
  }

}
