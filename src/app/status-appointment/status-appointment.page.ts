import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@Component({
  selector: 'app-status-appointment',
  templateUrl: './status-appointment.page.html',
  styleUrls: ['./status-appointment.page.scss'],
})
export class StatusAppointmentPage implements OnInit {

  constructor( private nativePageTransitions: NativePageTransitions, public nav: NavController,) { }

  ngOnInit() {
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
    this.nav.navigateRoot("tabs/tabs/history-order");
  }

}
