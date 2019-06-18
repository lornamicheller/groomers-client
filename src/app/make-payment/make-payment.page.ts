import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { GroomproviderService } from "./../../app/groomprovider.service";

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss'],
})
export class MakePaymentPage implements OnInit {

  constructor(public provider:GroomproviderService,public nativePageTransitions: NativePageTransitions,public nav: NavController) { }

  ngOnInit() {
  }

  openPageLater() {
    let options: NativeTransitionOptions= {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("tabs/tabs/order-summary");
}



openPage() {
    let options: NativeTransitionOptions= {
        direction: 'left', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.nav.navigateRoot("tabs/tabs/order-summary");
}

  payLater()
  {
    
      this.provider.paymentMethod = "Payment Later";
      console.log(this.provider.paymentMethod);
      this.openPage();
      
  }

  fullPay()
  {


    this.provider.paymentMethod = "Full Payment";
    console.log(this.provider.paymentMethod);
    this.openPage();

  }

}
