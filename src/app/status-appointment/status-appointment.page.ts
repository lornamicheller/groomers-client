import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
import {GroomproviderService } from "./../../app/groomprovider.service";
import {
  AlertController
}

from "@ionic/angular";

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
  picture:any;
  serviceId:any;
  constructor(public alertCtrl:AlertController,  private nativePageTransitions: NativePageTransitions, public nav: NavController, public provider: GroomproviderService) { }

  ngOnInit() {

    if(this.provider.petServiceInfo.get("status") == "c")
    {
      this.status ="Cancel";
    }

    if (this.provider.petServiceInfo.get("status")== 'r')
    {
      this.status ="Request";
    }


    if(this.provider.petServiceInfo.get("status")  == 'a')
    {
      this.status="Acepted";
    }

    if(this.provider.petServiceInfo.get("status") == 'f')
    {
     this.status = "Finish";
    }
    
    console.log(this.provider.petServiceInfo);
    this.serviceId = this.provider.petServiceInfo.id;
    console.log(this.serviceId);
    this.name = this.provider.petServiceInfo.get("name");
    this.date = this.provider.petServiceInfo.get("date");
    this.service = this.provider.petServiceInfo.get("service");
    this.address = this.provider.petServiceInfo.get("address").get("address1");
    this.picture = this.provider.petServiceInfo.get("pets")[0].get("petImage").url();
    console.log(this.picture);
    console.log("GOOMER", this.provider.petServiceInfo.get("groomer").id);
    this.provider.identifyGroomer = this.provider.petServiceInfo.get("groomer").id;
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

  cancelService()
  {
    Parse.Cloud.run('changeRequestStatus', { 
      objectId:this.serviceId,
      statusVal:"c",
    }). then((results) => {
      console.log("STATUS CHANGEDD");
      this.cancelAlert();
    },
    (error)=>{
      console.log(error);
    });
  }
  async cancelAlert() {
    const alert = await this.alertCtrl.create({
      header: 'The service has been cancel!',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          handler: () => {
            this.goBack();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'You want cancel this service?',
      buttons: [
        {
          text: 'Cancel Service',
          role: 'Yes',
          cssClass: 'secondary',
          handler: (blah) => {
            this.cancelService();
          }
        }, {
          text: 'NO',
          handler: () => {
           
          }
        }
      ]
    });

    await alert.present();
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


  makeReview()
  {
    let options: NativeTransitionOptions = {
      direction: 'right', 
      duration: 400, 
      slowdownfactor: -1, 
      slidePixels: 20, 
      iosdelay: 100
  }
  console.log(options);
  this.nativePageTransitions.slide(options);
  this.provider.serviceId =this.serviceId;
  this.nav.navigateRoot("/rating");

  }


}
