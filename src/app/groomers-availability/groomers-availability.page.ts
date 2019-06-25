import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ModalController } from '@ionic/angular';
import { GroomersCalendarComponent } from "./../groomers-calendar/groomers-calendar.component";
import { AlertController } from '@ionic/angular';
import {GroomproviderService } from "./../../app/groomprovider.service";
import * as moment_ from 'moment';
import * as Parse from 'parse';
var moment = require('moment');
let parse = require('parse');

@Component({
  selector: 'app-groomers-availability',
  templateUrl: './groomers-availability.page.html',
  styleUrls: ['./groomers-availability.page.scss'],
})
export class GroomersAvailabilityPage implements OnInit {

  constructor(public provider: GroomproviderService,public navigate: NavController, public nativePageTransitions: NativePageTransitions, public modalCtrl: ModalController, public alertController: AlertController)
   { 
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
   }

   groomerId:any;
   today:any;
   startDay:any;
   chooseDay:any;
   endDay:any;
   petSize:any;
   duration:any;
   datePickerObjPtBr:any;
   startHour:any;
   endHour:any;

   allHours:any;

  ngOnInit() {
    this.openDatePicker();

    this.groomerId = this.provider.groomerId.id;
    console.log("Groomer Id:", this.groomerId);
    
    this.today = new Date();

    let petsID = [this.provider.petid.id];
    this.provider.petsArray = petsID;
    console.log("PET ID:", this.provider.petsArray);

    console.log(this.today.getDate());
    console.log(this.today.getMonth());

    this.petSize = this.provider.petSize;
    console.log(this.petSize);


    if(this.petSize == "Small")
    {
      this.duration = this.provider.groomer.get("dogSmallDuration");
    }
    if(this.petSize == "Medium")
    {
      this.duration = this.provider.groomer.get("dogMediumDuration");
    }
    if(this.petSize == "Large")
    {
      this.duration = this.provider.groomer.get("dogLargeDuration");
    }

    console.log(this.duration);



  }

  openPage() {
    let options: NativeTransitionOptions= {
        direction: 'left', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
  //   this.navigate.navigateRoot("/user-home");
}
goBack() {
    let options: NativeTransitionOptions= {
        direction: 'right', 
        duration: 400, 
        slowdownfactor: -1, 
        slidePixels: 20, 
        iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot('/tabs/tabs/address-receiver');
}

async openDatePicker() {

  let self = this;

  const datePickerModal=await this.modalCtrl.create( {
      component:  GroomersCalendarComponent, 
      cssClass: 'li-ionic4-datePicker',
      componentProps: { 'objConfig': this.datePickerObjPtBr }
  }
  );
  await datePickerModal.present();
  datePickerModal.onDidDismiss()
    .then((data) => {
      // this.isModalOpen = false;
      // console.log("data: " + JSON.stringify(data) );
      // this.selectedDate = data.data.date;
      console.log("Start Day:", new Date(this.provider.chooseDate));
      self.startDay = new Date(this.provider.chooseDate);
      moment().format("MMM-DD-YYY");
      // this.provider.momentDay = moment(self.startDay,"MM-DD-YY");
      this.provider.momentDay = moment(self.startDay,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY');
      this.chooseDay = this.provider.momentDay;
      this.provider.momentRequest = moment(self.startDay,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY h:mm A');
      console.log("Request:", this.provider.momentRequest);
      console.log("Moment: ", this.provider.momentDay);
      console.log("End Day:", new Date(this.provider.chooseDate + (86400*1000)));
      self.endDay = new Date(this.provider.chooseDate + (86400*1000));
    
    });
}

  formatAMPM(date) {
	  var hours = date[0];
	  var minutes = date[1];
	  var ampm = hours >= 12 ? 'pm' : 'am';
	  hours = hours % 12;
	  hours = hours ? hours : 12;
	  minutes = minutes < 10 ? '0'+minutes : minutes;
	  var strTime = hours + ':' + minutes + ' ' + ampm;
	  return strTime;
}

async presentAlert() {
  const alert=await this.alertController.create( {
      header: 'Good!', message: ' Your appointment has been booked. ', buttons: [ {
          text: 'OK', handler: () => {
              console.log('Confirm Cancel');
              this.openPage();
              this.navigate.navigateRoot('/tabs/tabs/choose-groomer');
          }
      }
      ]
  }
  );
  await alert.present();
}


// getSchedule()
// {

//       let appointmentDate = new Date( this.startDay.getTime());
//       this.provider.startDay = appointmentDate;
//       console.log(this.provider.startDay);


//     console.log(this.groomerId);
//     console.log(this.petSize);
//     console.log(this.duration);
//     console.log(this.startDay);
//     console.log(this.endDay);
//       console.log("ENTRANDO GET SCHEDULE");
//       Parse.Cloud.run('getScheduleAvailable', {
//         groomerId:this.groomerId,
//         fullMonth: false,
//         petSize:this.petSize,
//         duration:this.duration,
//         startDate:this.startDay,
//         endDate:this.endDay
        
//       }).then((result)=>{
//         console.log(result);
//         this.allHours = result;
//       }
//       , (error)=> {
//           //an error occur
//           console.log(error);
//           //this.openPage();
//       });
// }


// getHours(starD, endD)
// {
//   let startHour = moment(starD,'DD/MM/YYYY HH:mm').format('h:mm A');
//   let endHour  = moment(endD,'DD/MM/YYYY HH:mm').format('h:mm A');

//     return  startHour + "-" + endHour; 
// }


}
