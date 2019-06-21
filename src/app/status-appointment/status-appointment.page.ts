import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
import {GroomproviderService } from "./../../app/groomprovider.service";


let parse = require('parse');

@Component({
  selector: 'app-status-appointment',
  templateUrl: './status-appointment.page.html',
  styleUrls: ['./status-appointment.page.scss'],
})
export class StatusAppointmentPage implements OnInit {

  name:any;
  date:any;
  service:any;
  address:any;
  status:any;
  constructor( private nativePageTransitions: NativePageTransitions, public nav: NavController, public provider: GroomproviderService) { }

  ngOnInit() {

    if(this.provider.petServiceInfo.get("status") == "c")
    {
      this.status ="Cancel";
    }

    if (this.provider.petServiceInfo.get("status")== 'r')
    {
      this.status ="Request";
    }

    if(this.provider.petServiceInfo.get("status") == 'c')
    {
      this.status ="Cancel";
    }


    if(this.provider.petServiceInfo.get("status")  == 'a')
    {
      this.status="Acepted";
    }

    if(this.provider.petServiceInfo.get("status") == 'f')
    {
     this.status = "Finish";
    }
    
    this.name = this.provider.petServiceInfo.get("name");
    this.date = this.provider.petServiceInfo.get("date");
    this.service = this.provider.petServiceInfo.get("service");
    this.address = this.provider.petServiceInfo.get("address").get("address1");
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

  getStatus(service)
  {
    if(service.get("status") == 'r')
    {
      return "Request";
    }

    if(service.get("status") == 'c')
    {
      return "Cancel";
    }


    if(service.get("status") == 'a')
    {
      return "Acepted";
    }

    if(service.get("status") == 'f')
    {
     return "Finish";
    }

  }


}
