import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ModalController } from '@ionic/angular';
// import { Ionic4DatepickerModalComponent } from '@ionic4-datepicker/';
import { Ionic4DatepickerModule } from 
'@logisticinfotech/ionic4-datepicker';
import { CalendarComponent } from "./../calendar/calendar.component";
import { AlertController } from '@ionic/angular';
import {GroomproviderService} from "./../../app/groomprovider.service";
import * as moment_ from 'moment';


import * as Parse from 'parse';

let parse = require('parse');
var moment = require('moment');

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

date: any;
daysInThisMonth: any;
daysInLastMonth: any;
daysInNextMonth: any;
monthNames: string[];
currentMonth: any;
currentYear: any;
currentDate: any;
selectedDate:any;
mydate:Date;
datePickerObjPtBr:any;
startDay:any;
endDay:any;
zipCode:any;
chooseDay:any;

chooseDate:any;

  constructor(public provider: GroomproviderService,public navigate: NavController, public nativePageTransitions: NativePageTransitions, public modalCtrl: ModalController, public alertController: AlertController) 
  { 

    Parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
  }

  ngOnInit() {

    console.log(this.mydate);
    console.log(this.provider.zipCode);
    //console.log(this.provider.)
    console.log(this.provider.petid);


    console.log(Parse.User.current().id);
  
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
    this.navigate.navigateRoot('/address-receiver');
}

async openDatePicker() {

  let self = this;

  const datePickerModal=await this.modalCtrl.create( {
      component: CalendarComponent, 
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
    
    console.log(strTime);
	  return strTime;
}

searchDay()
{
    if(this.startDay == null )
    {
      this.errorAlert();
    }
  


    let petsID = [this.provider.petid.id];
    this.provider.petsArray = petsID;

    let appointmentDate = new Date( this.startDay.getTime() );
    this.provider.startDay = appointmentDate;
    console.log(this.provider.startDay);
    let dateTime = new Date( this.mydate );
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();

    console.log("date: ", appointmentDate);

    if(this.mydate == null)
  {
    this.hourAlert();
  }

    
    //console.log("time: " + dateTime);
    //appointmentDate.setHours(hours, 0, 0, 0);
    appointmentDate.setHours(hours, minutes);

    let currentUser = Parse.User.current();
  let self = this;
    console.log("params: ");
    console.log(appointmentDate);
    console.log(this.startDay);
    console.log(this.endDay);
    console.log(this.mydate);
    this.provider.momentTime =moment(self.mydate,'YYYY-MM-DD hh:mm').format('h:mm A');
    console.log(this.provider.momentTime);
    console.log(petsID);
    console.log(currentUser.get("zipcode"));
    console.log("end...");

    


   Parse.Cloud.run('getGroomers', {

    date: appointmentDate,
    startDate: this.startDay,
    endDate: this.endDay,
    time: this.mydate,
    pets: petsID,
    preferred: false,
    zipcode: currentUser.get("zipcode")

  }).then((result)=> {

    this.provider.groomers = result;
    console.log("OBJECT : ",this.provider.groomers);
    console.log("Matches");
      console.log(result);
      if(result.length == 0) {
        console.log("no hay groomers available");
        this.openPage();
        this.navigate.navigateRoot('/tabs/tabs/choose-groomer');
      }
      else {

        //this.presentAlert();
        this.openPage();
        this.navigate.navigateRoot('/tabs/tabs/choose-groomer');
      }
      
  }
  , (error)=> {
      //an error occur
      console.log("an error occur...");
      console.log(error);
      //this.openPage();
  });
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

async errorAlert() {
  const alert=await this.alertController.create( {
      header: 'Error!', message: ' Please choose correct date. ', buttons: [ {
          text: 'OK', handler: () => {
              console.log('Confirm Cancel');
          }
      }
      ]
  }
  );
  await alert.present();
}


async hourAlert() {
  const alert=await this.alertController.create( {
      header: 'Error!', message: ' Please choose one hour. ', buttons: [ {
          text: 'OK', handler: () => {
              console.log('Confirm Cancel');
          }
      }
      ]
  }
  );
  await alert.present();
}

}
