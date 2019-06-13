import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.page.html',
  styleUrls: ['./history-order.page.scss'],
})
export class HistoryOrderPage implements OnInit {

  constructor(public nav:NavController, private nativePageTransitions: NativePageTransitions) { }

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
    this.nav.navigateRoot('/tabs/tabs/status-appointment');
  }

}
