import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.page.html',
  styleUrls: ['./add-pet.page.scss'],
})
export class AddPetPage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController,) { }

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
  this.nav.navigateRoot("/tabs/tabs/new-pet");
}

}
