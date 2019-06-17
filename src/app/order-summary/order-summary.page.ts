import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {

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
    this.nav.navigateRoot("/tabs/tabs/order-success");
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
    this.nav.navigateRoot("/make-payment");
  }

}
