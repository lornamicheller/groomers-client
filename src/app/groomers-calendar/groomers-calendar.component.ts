import { Component, OnInit } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ViewChild } from "@angular/core";
import { NgModule } from '@angular/core';
import { NavParams, ModalController, IonContent } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {GroomproviderService} from "./../../app/groomprovider.service";
import { AlertController } from '@ionic/angular';
import * as moment_ from 'moment';
import * as Parse from 'parse';
import { NavController } from "@ionic/angular";

let parse = require('parse');

const moment = moment_;

@Component({
  selector: 'app-groomers-calendar',
  templateUrl: './groomers-calendar.component.html',
  styleUrls: ['./groomers-calendar.component.scss'],
})

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class GroomersCalendarComponent implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  
  currentDate;
  today;

  // inputs
  mainObj: any = {};
  selectedDate: any = {};

  // component variables
  selctedDateEpoch;
  firstDayEpoch;
  lastDayEpoch;
  disabledDates = [];
  fromDate;
  toDate;
  disableWeekdays = [];
  data: any = {
    currentMonth: '',
    currentYear: '',
    currentMonthSelected: ''
  };
  currentYearSelected;
  numColumns;

  starDay:any;
  endDay:any;

  checkStatus:any;

  groomerId:any;

   startDay:any;
   chooseDay:any;

   petSize:any;
   duration:any;
   datePickerObjPtBr:any;
   startHour:any;
   endHour:any;

   allHours:any;
   mydate:any;


  rows = [0, 7, 14, 21, 28, 35];
  cols = [0, 1, 2, 3, 4, 5, 6];
  monthsList = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  weeksList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  yearsList = [];
  daysList = [];
  yearInAscending = false;
  momentLocale = 'en-US';
  selectedDateString;

  // month year scroll variables
  isMonthYearSelectorOpen = false;
  selectedYearOrMonth;
  isMonthSelect;
  scrollingMonthOrYearArray: any = [];

  constructor(
    public nativePageTransitions: NativePageTransitions,
    public navigate: NavController,
    public provider: GroomproviderService,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    public alertController: AlertController
  ) {
    this.today = this.resetHMSM(new Date()).getTime();

    console.log("Time:", this.today);
    
    if (this.navParams.get('selectedDate')) {
      // console.log('Selected date =>', this.navParams.get('selectedDate'));
      this.selectedDate.date = this.navParams.get('selectedDate');
    }
    this.mainObj = this.initDatePickerObj(this.navParams.get('objConfig'));



    Parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 


  }

  ngOnInit() {
    this.initDatePicker();
    console.log(this.selectedDate);
    this.checkStatus = false;

    this.provider.setGromId = this.provider.groomerId.id;
    console.log(this.provider.groomerId);
    this.groomerId = this.provider.groomerId.id;
    console.log("Groomer Id:", this.groomerId);
    
    this.today = new Date();

    console.log(this.today.getDate());
    console.log(this.today.getMonth());

    this.petSize = this.provider.petSize;
    console.log(this.petSize);


    if(this.petSize == "Small")
    {
      this.duration = this.provider.groomerId.get("dogSmallDuration");
    }
    if(this.petSize == "Medium")
    {
      this.duration = this.provider.groomerId.get("dogMediumDuration");
    }
    if(this.petSize == "Large")
    {
      this.duration = this.provider.groomerId.get("dogLargeDuration");
    }

    console.log(this.duration);


    this.setIonicDatePickerTodayDate() ;


  }

  openPage() {
    let options: NativeTransitionOptions= {
        direction: 'left', duration: 400, slowdownfactor: -1, slidePixels: 20, iosdelay: 100
    }
    console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/tabs/tabs/groomers-profile");
}

  // Reset the hours, minutes, seconds and milli seconds
  resetHMSM(currentDate) {
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);
    return currentDate;
  }

  // this method change month or year list to dateList
  changeToDateList() {
    console.log('changeToDateList');
    this.isMonthYearSelectorOpen = false;
  }

  // Virtual scroll create for select year and month
  selectMonthYear(isMonthSelect) {
    // console.log('selectMonthYear', i);
    this.isMonthYearSelectorOpen = true;

    this.isMonthSelect = isMonthSelect;
    this.scrollingMonthOrYearArray = isMonthSelect ? this.mainObj.monthsList : this.yearsList;
    this.selectedYearOrMonth = isMonthSelect ? this.data.currentMonth : this.data.currentYear;

    const index = this.scrollingMonthOrYearArray.indexOf(this.selectedYearOrMonth);
    const iditem = index + 'list';

    setTimeout(() => {
      document.getElementById(iditem).scrollIntoView();
    }, 100);
  }

  // select month or year
  onChangeMonthYear(monthYear) {
    console.log('onChangeMonthYear', monthYear);
    if (monthYear) {
      if (this.isMonthSelect) {
        this.data.currentMonth = monthYear;
        this.selectedYearOrMonth = this.data.currentMonth;
        const monthNumber = this.monthsList.indexOf(this.data.currentMonth);
        this.currentDate.setDate(1);
        this.currentDate.setMonth(monthNumber);
      } else {
        this.data.currentYear = monthYear;
        this.selectedYearOrMonth = this.data.currentYear;
        this.currentDate.setFullYear(this.data.currentYear);
        this.refreshDateList(this.currentDate);
      }
      this.refreshDateList(this.currentDate);
    }
    this.isMonthYearSelectorOpen = false;

  }

  // // Month changed
  // monthChanged(event) {
  //   // console.log('monthChanged =>', event);
  //   if (event && event.target && event.target.value) {
  //     this.data.currentMonth = event.target.value;
  //   }
  //   const monthNumber = this.monthsList.indexOf(this.data.currentMonth);
  //   // console.log('monthChanged monthNumber : ' + monthNumber + ' event.target.value : ' + event.target.value);
  //   // console.log('currentDate before ', this.currentDate);
  //   this.currentDate.setDate(1);
  //   this.currentDate.setMonth(monthNumber);
  //   // console.log('currentDate after ', this.currentDate);
  //   this.refreshDateList(this.currentDate);
  //   // this.changeDaySelected();
  // }

  // // Year changed
  // yearChanged(event) {
  //   // console.log('yearChanged =>', event);
  //   if (event && event.target && event.target.value) {
  //     this.data.currentYear = event.target.value;
  //   }
  //   this.currentDate.setFullYear(this.data.currentYear);
  //   this.refreshDateList(this.currentDate);
  //   // this.changeDaySelected();
  // }

  // Previous month
  prevMonth() {
    // console.log('prevNext', this.currentDate);
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    if (currentYear <= this.yearsList[(this.yearsList.length - 1)] && currentMonth === 0) {
      return;
    }
    if (currentMonth === 1) {
      this.currentDate.setFullYear(currentYear);
    }
    this.currentDate.setMonth(currentMonth - 1);
    this.data.currentMonth = this.mainObj.monthsList[currentMonth];
    this.data.currentYear = currentYear;
    this.refreshDateList(this.currentDate);
    // this.changeDaySelected();
  }

  // Next month
  nextMonth() {
    // console.log('nextNext', this.currentDate);
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    if (currentYear >= this.yearsList[0] && currentMonth === 11) {
      return;
    }
    if (currentMonth === 11) {
      this.currentDate.setFullYear(currentYear);
    }
    this.currentDate.setDate(1);
    this.currentDate.setMonth(currentMonth + 1);
    this.data.currentMonth = this.mainObj.monthsList[currentMonth];
    this.data.currentYear = currentYear;
    this.refreshDateList(this.currentDate);
    // this.changeDaySelected();
  }

  // changeDaySelected ( day selection changes )
  changeDaySelected() {
    // console.log('changeDaySelected');
    const newSelectedDate: any = new Date(this.selctedDateEpoch);
    newSelectedDate.setMonth(this.currentDate.getMonth());
    newSelectedDate.setYear(this.currentDate.getFullYear());
    this.selctedDateEpoch = newSelectedDate.getTime();
    this.selectedDateString = this.formatDate();
    // this.closeModal(this.selctedDateEpoch);
  }

  // Date selected
  dateSelected(selectedDate) {
    // console.log('dateSelected =>', selectedDate);

    console.log("Selected Date: ",selectedDate);
   
    
    if (selectedDate && !selectedDate.disabled) {
      if (!selectedDate || Object.keys(selectedDate).length === 0) { return; }
      this.selctedDateEpoch = selectedDate.epoch;

      this.checkStatus = true;
     
      console.log(this.checkStatus);


      console.log("Select date: ",this.selctedDateEpoch);
      this.selectedDateString = this.formatDate();
      console.log("Select date 2: ",this.selctedDateEpoch);
      console.log(new Date(this.selectedDateString));
      this.provider.chooseDate = this.selctedDateEpoch;
      this.startDay = new Date(this.provider.chooseDate);
      console.log(this.startDay);
      this.endDay = new Date(this.provider.chooseDate + (86400*1000));
      console.log(this.endDay);

      this.getGroomerHours();

      console.log("Provider", this.provider.chooseDate);
      if (this.mainObj.closeOnSelect) {
        this.closeModal(this.selctedDateEpoch);
      }
    }
  }


  getGroomerHours()
  {

    let appointmentDate = new Date( this.startDay.getTime() );
    console.log(appointmentDate);
      this.provider.startDay = appointmentDate;
      console.log(this.provider.startDay);

      console.log(this.groomerId);
    console.log(this.petSize);
    console.log(this.duration);
    console.log(this.startDay);
    console.log(this.endDay);
      console.log("ENTRANDO GET SCHEDULE");
      Parse.Cloud.run('getScheduleAvailable', {
        groomerId:this.groomerId,
        fullMonth: false,
        petSize:this.petSize,
        duration:this.duration,
        startDate:this.startDay,
        endDate:this.endDay
        
      }).then((result)=>{
        console.log(result);
        this.allHours = result;
      }
      , (error)=> {
          //an error occur
          console.log(error);
          //this.openPage();
      });
  }

  getHours(starD, endD)
{
  let startHour = moment(starD,'DD/MM/YYYY HH:mm').format('h:mm A');
  let endHour  = moment(endD,'DD/MM/YYYY HH:mm').format('h:mm A');

    return  startHour + "-" + endHour; 
}

getHoursDay(mydate)
{
  this.provider.momentTime =moment(mydate,'YYYY-MM-DD hh:mm').format('h:mm A');

}

goTo()

{
  if(this.provider.momentTime == null)
  {
    this.errorAlert();
  }
  else{
    this.closeModal(null);
    this.provider.setGromId = this.groomerId;
    console.log(this.provider.setGromId);
    this.navigate.navigateRoot("/tabs/tabs/groomers-profile");
  }
}

showMessage(data)
{
    console.log(data);
}

async errorAlert() {
  const alert=await this.alertController.create( {
      header: 'Alert!', message: ' Please choose one hour ', buttons: [ {
          text: 'OK', handler: () => {
              console.log('Confirm Cancel');
          }
      }
      ]
  }
  );
  await alert.present();
}




  // Set today as date for the modal
  setIonicDatePickerTodayDate() {
    // console.log('setIonicDatePickerTodayDate');
    const today = new Date(this.today);

    console.log("Today", today);
    const today_obj = {
      date: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
      day: today.getDay(),
      epoch: today.getTime(),
      disabled: false
    };
    this.dateSelected(today_obj);
    this.refreshDateList(new Date());
    this.selctedDateEpoch = this.resetHMSM(today).getTime();
    this.selectedDateString = this.formatDate();
    // this.closeModal(this.selctedDateEpoch);
  }

  // Set date for the modal
  setIonicDatePickerDate() {
    // console.log('setIonicDatePickerDate');
    this.closeModal('dateEpoch' + this.selctedDateEpoch);
  }

  // Setting the disabled dates list.
  setDisabledDates(obj) {
    // console.log('setDisabledDates =>', obj);
    if (!obj.disabledDates || obj.disabledDates.length === 0) {
      this.disabledDates = [];
    } else {
      this.disabledDates = [];
      for (let i = 0; i < obj.disabledDates.length; i++) {
        // val = resetHMSM(new Date(val));
        this.disabledDates.push(this.resetHMSM(new Date(obj.disabledDates[i])).getTime());
      }
    }
  }

  // Refresh the list of the dates of a month
  refreshDateList(currentDate) {
    // console.log('refreshDateList =>', currentDate);
    currentDate = this.resetHMSM(currentDate);
    this.currentDate = currentDate;

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDate();
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    this.monthsList = [];
    if (this.mainObj.monthsList && this.mainObj.monthsList.length === 12) {
      this.monthsList = this.mainObj.monthsList;
    } else {
      this.monthsList = this.monthsList;
    }

    this.yearsList = this.getYearsList(this.mainObj.from, this.mainObj.to);

    this.daysList = [];
    let tempDate, disabled;
    this.firstDayEpoch = this.resetHMSM(new Date(currentDate.getFullYear(), currentDate.getMonth(), firstDay)).getTime();
    this.lastDayEpoch = this.resetHMSM(new Date(currentDate.getFullYear(), currentDate.getMonth(), lastDay)).getTime();

    for (let i = firstDay; i <= lastDay; i++) {
      tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      disabled = false;
      const day = tempDate.getDay();
      if (this.disableWeekdays.length > 0) {
        if (this.disableWeekdays.indexOf(day) >= 0) {
          disabled = this.disableWeekdays.indexOf(day) >= 0;
        } else {
          disabled = false;
        }
      }

      if (this.disabledDates.length > 0) {
        if (this.disabledDates.indexOf(tempDate.getTime()) >= 0) {
          disabled = true;
        }
      }

      if (this.fromDate && !disabled) {
        disabled = (tempDate.getTime() < this.fromDate)
          || this.mainObj.disableWeekDays.indexOf(tempDate.getDay()) >= 0;
      }
      if (this.toDate && !disabled) {
        disabled = (tempDate.getTime() > this.toDate)
          || this.mainObj.disableWeekDays.indexOf(tempDate.getDay()) >= 0;
      }

      this.daysList.push({
        date: tempDate.getDate(),
        month: tempDate.getMonth(),
        year: tempDate.getFullYear(),
        day: tempDate.getDay(),
        epoch: tempDate.getTime(),
        disabled: disabled
      });
    }

    // To set Monday as the first day of the week.
    let firstDayMonday = this.daysList[0].day - this.mainObj.mondayFirst;
    firstDayMonday = (firstDayMonday < 0) ? 6 : firstDayMonday;
    for (let j = 0; j < firstDayMonday; j++) {
      this.daysList.unshift({});
    }
    this.rows = [0, 7, 14, 21, 28, 35];
    this.cols = [0, 1, 2, 3, 4, 5, 6];
    this.data.currentMonth = this.mainObj.monthsList[currentDate.getMonth()];
    this.data.currentYear = currentDate.getFullYear();
    this.data.currentMonthSelected = this.data.currentMonth;
    this.currentYearSelected = this.data.currentYear;
    this.numColumns = 7;
  }

  // Setting up the initial object
  setInitialObj(ipObj) {
    // console.log('setInitialObj =>', ipObj);
    this.mainObj = ipObj;
    this.selctedDateEpoch = this.resetHMSM(this.mainObj.inputDate).getTime();
    this.selectedDateString = this.formatDate();
    if (this.mainObj.weeksList && this.mainObj.weeksList.length === 7) {
      this.weeksList = this.mainObj.weeksList;
    }
    if (this.mainObj.mondayFirst) {
      this.weeksList.push(this.mainObj.weeksList.shift());
    }
    if (this.mainObj.yearInAscending) {
      this.yearInAscending = this.mainObj.yearInAscending;
    }
    if (this.mainObj.momentLocale) {
      this.momentLocale = this.mainObj.momentLocale;
    }
    this.disableWeekdays = this.mainObj.disableWeekDays;
    this.setDisabledDates(this.mainObj);
    this.refreshDateList(this.mainObj.inputDate);
  }

  // for dismiss modal
  closeModal(selectedDate) {
    // console.log('closeModal => ', selectedDate);
    this.modalCtrl.getTop();
    const formattedDate = moment(selectedDate).format(this.mainObj.dateFormat);
    this.modalCtrl.dismiss({ 'date': formattedDate });
  }

  // close modal button
  closeIonicDatePickerModal() {
    // console.log('closeIonicDatePickerModal');
    // this.closeModal(null);

    console.log("Cerrando");
  }

  // get years list  ( GIVE HERE MIN OR MAX YEAR IN DATE_PICKER )
  getYearsList(from, to) {
    // console.log('getYearsList =>', from, to);
    const yearsList = [];
    let minYear = 1950;
    let maxYear = new Date().getFullYear() + 1;
    minYear = from ? new Date(from).getFullYear() : minYear;
    maxYear = to ? new Date(to).getFullYear() : maxYear;
    // console.log('getYearsList: ', this.yearInAscending);
    if (this.yearInAscending) {
      for (let i = minYear; i <= maxYear; i++) {
        yearsList.push(i);
      }
    } else {
      for (let i = maxYear; i >= minYear; i--) {
        yearsList.push(i);
      }
    }
    return yearsList;
  }

  // Init Date-Picker
  initDatePicker() {
    this.fromDate = '';
    this.toDate = '';
    // $scope.mainObj = angular.extend({}, config, ipObj);
    if (this.mainObj.from) {
      this.fromDate = this.resetHMSM(new Date(this.mainObj.from)).getTime();
    }
    if (this.mainObj.to) {
      this.toDate = this.resetHMSM(new Date(this.mainObj.to)).getTime();
    }
    // if (ipObj.disableWeekdays && this.config.disableWeekdays) {
    //   this.mainObj.disableWeekDays = ipObj.disableWeekdays.concat(this.config.disableWeekdays);
    // }
    this.setInitialObj(this.mainObj);
  }

  // Init DatePicker Object
  initDatePickerObj(config) {
      config = this.mainObj;

    if (config.inputDate && !this.selectedDate.date) {
      this.selectedDate.date = config.inputDate;
    }

    const objConfig: any = {};
    objConfig.from = config.fromDate ? config.fromDate : '';
    objConfig.to = config.toDate ? config.toDate : '';
    objConfig.showTodayButton = config.showTodayButton === undefined ? true : config.showTodayButton;
    objConfig.closeOnSelect = config.closeOnSelect ? config.closeOnSelect : false;
    objConfig.disableWeekDays = config.disableWeekDays ? config.disableWeekDays : [];
    objConfig.mondayFirst = config.mondayFirst ? config.mondayFirst : false;
    objConfig.setLabel = config.setLabel ? config.setLabel : 'Set';
    objConfig.todayLabel = config.todayLabel ? config.todayLabel : 'Today';
    objConfig.closeLabel = config.closeLabel ? config.closeLabel : 'Done';
    objConfig.disabledDates = config.disabledDates ? config.disabledDates : [];
    objConfig.titleLabel = config.titleLabel ? config.titleLabel : null;

    objConfig.monthsList = config.monthsList ? config.monthsList : this.monthsList;
    objConfig.monthsList = [...objConfig.monthsList];

    objConfig.weeksList = config.weeksList ? config.weeksList : this.weeksList;
    objConfig.weeksList = [...objConfig.weeksList];

    objConfig.dateFormat = config.dateFormat ? config.dateFormat : 'DD MMM YYYY';
    // console.log(this.selectedDate.date, objConfig.dateFormat, moment.locale());

    objConfig.clearButton = config.clearButton ? config.clearButton : false;

    objConfig.yearInAscending = config.yearInAscending ? config.yearInAscending : false;
    objConfig.momentLocale = config.momentLocale ? config.momentLocale : 'en-US';

    moment.locale(objConfig.momentLocale);
    objConfig.inputDate = this.selectedDate.date ? moment(this.selectedDate.date, objConfig.dateFormat).toDate() : new Date();

    objConfig.btnCloseSetInReverse = config.btnCloseSetInReverse ? config.btnCloseSetInReverse : false;

    objConfig.btnProperties = {};
    if (config.btnProperties) {
      const btnProperties = config.btnProperties;
      objConfig.btnProperties.expand = btnProperties.expand ? btnProperties.expand : 'block';
      objConfig.btnProperties.fill = btnProperties.fill ? btnProperties.fill : 'solid';
      objConfig.btnProperties.size = btnProperties.size ? btnProperties.size : 'default';
      objConfig.btnProperties.color = btnProperties.color ? btnProperties.color : '';
      objConfig.btnProperties.disabled = btnProperties.disabled ? btnProperties.disabled : false;
      objConfig.btnProperties.strong = btnProperties.strong ? btnProperties.strong : false;
    } else {
      objConfig.btnProperties.expand = 'block';
      objConfig.btnProperties.fill = 'solid';
      objConfig.btnProperties.size = 'default';
      objConfig.btnProperties.disabled = false;
      objConfig.btnProperties.strong = false;
    }

    objConfig.arrowNextPrev = {};
    if (config.arrowNextPrev) {
      const arrowNextPrev = config.arrowNextPrev;
      objConfig.arrowNextPrev.nextArrowSrc = arrowNextPrev.nextArrowSrc ? arrowNextPrev.nextArrowSrc : false;
      objConfig.arrowNextPrev.prevArrowSrc = arrowNextPrev.prevArrowSrc ? arrowNextPrev.prevArrowSrc : false;
    }

    // console.log('config =>', objConfig);
    return objConfig;
  }

  // Format date
  formatDate() {
    // console.log('formatDate: ', this.selctedDateEpoch, new Date(this.selctedDateEpoch));
    return moment(this.selctedDateEpoch).format(this.mainObj.dateFormat);
  }

}
