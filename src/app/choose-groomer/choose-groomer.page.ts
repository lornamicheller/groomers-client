import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-groomer',
  templateUrl: './choose-groomer.page.html',
  styleUrls: ['./choose-groomer.page.scss'],
})
export class ChooseGroomerPage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions, public nav: NavController,) { }

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

}
