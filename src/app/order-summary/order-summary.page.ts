import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService } from "./../../app/groomprovider.service";
import { AlertController } from "@ionic/angular";
import * as Parse from 'parse';
let parse =require('parse');

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {

  constructor(public alert:AlertController,public provider: GroomproviderService,private nativePageTransitions: NativePageTransitions, public nav: NavController,
    public toastCtrl : ToastController) 
    {
      parse.serverURL = 'https://parseapi.back4app.com/';
      Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0"); 
     }

     pets:any;

    name:any;
    phone:any;
    service:any;
    petSize:any;
    groomerId:any;
    priceOfService:any;
    serviceType:any;
    duration:any;
    day:any;

    serviceRequest:any;
    


    // variables!!!!

    subtotal:any;
    totalFee:any;
    swipeFee:any;
    total:any;
    appFeeByGroomer:any;
    appFeeByClient:any;
    subtotalLabel:any;
    convenienceFee:any;

    payOptions:any;

    swipeFeedLabel:any;
    transactionLabel:any;
    totalLabel:any;
    chargeId:any;
    nameGroomer:any;
  


  ngOnInit() {
    //fullname of user
    this.name = Parse.User.current().get('fullName');
    //phone of user
    this.phone = Parse.User.current().get('phone');
    //payment method ( full or later)
    this.service = this.provider.paymentMethod;
    console.log(this.service);
    // pet size (small, medium or large)
    this.petSize = this.provider.petSize;
    console.log(this.petSize);
    // groomer object 
    this.groomerId = this.provider.groomerId;
    console.log(this.groomerId);
    // type of service
    this.serviceType = this.provider.typeOfService;
    console.log(this.serviceType);
    //name of groomer
    this.nameGroomer = this.provider.groomerId.get('fullName');
    console.log(this.nameGroomer);
 
    //default value of convenienceFee
    this.convenienceFee = 2.99;
    this.day = this.provider.momentDay;

    this.getPet();
    this.decision();
    this.makePayment();
  }

  decision()
  {
    // full Grooming ------------------------
      if(this.serviceType == "Full")
      { 
        this.serviceRequest = "Full Grooming";
        console.log("Entre FULLL!!!!");
          if(this.petSize == "Small")
          {
            this.priceOfService = this.groomerId.get('fullSmall');
            this.duration = this.groomerId.get('dogSmallDuration');
            console.log(this.priceOfService);
          }
          else if( this.petSize == "Medium")
          {
            this.priceOfService = this.groomerId.get('fullMedium');
            this.duration = this.groomerId.get('dogMediumDuration');
            console.log(this.priceOfService);
          }
          else if( this.petSize == "Large")
          {
            this.priceOfService = this.groomerId.get('fullLarge');
            this.duration = this.groomerId.get('dogLargeDuration');
            console.log(this.priceOfService);

          }
          
      }
      // bath ----------------------------
      else if (this.serviceType == "Bath")
      {
        this.serviceRequest = "Bath";
        console.log("Entre BATHHHHHH!!!!");
        if(this.petSize == "Small")
          {
            this.priceOfService = this.groomerId.get('bathSmall');
            this.duration = this.groomerId.get('dogSmallDuration');
            console.log(this.priceOfService);
          }
          else if( this.petSize == "Medium")
          {
            this.priceOfService = this.groomerId.get('bathMedium');
            this.duration = this.groomerId.get('dogMediumDuration');
            console.log(this.priceOfService);
          }
          else if( this.petSize == "Large")
          {
            this.priceOfService = this.groomerId.get('bathLarge');
            this.duration = this.groomerId.get('dogLargeDuration');
            console.log(this.priceOfService);

          }

      }

      else
      {
        // console.log("ACHOOOOO PUNNNEEETAAAAA!!!!!");
      }
  }



  makePayment()
  {
    // later
      if(this.provider.paymentMethod == "Later")
      {

        this.payOptions = "later";
        this.subtotal = this.priceOfService;
        console.log( this.subtotal);
        this.totalFee = this.subtotal + this.convenienceFee;
        console.log( this.totalFee);
        this.swipeFee = this.totalFee * 0.029 + 0.40;
        console.log( this.swipeFee);
        this.total = this.swipeFee + this.convenienceFee;
        console.log( this.total);
        this.appFeeByGroomer = this.subtotal + this.convenienceFee;
        console.log( this.appFeeByGroomer);
        this.appFeeByClient = this.subtotal * 0.90;
        console.log( this.appFeeByClient);

        this.subtotalLabel = "$" + this.subtotal.toFixed(2);
        console.log(this.subtotalLabel);

        this.swipeFeedLabel = "$" + this.swipeFee.toFixed();
        console.log(this.swipeFeedLabel);
        this.transactionLabel =  "$" + this.convenienceFee.toFixed(2);
        console.log(this.transactionLabel);
        this.totalLabel = "$" +this.total.toFixed(2);
        console.log(this.totalLabel);
        
      }
      // full 
      else if(this.provider.paymentMethod == "Full")
      {

        this.payOptions = "full";

         this.subtotal = this.priceOfService;
         console.log( this.subtotal);
         this.totalFee = this.subtotal + this.convenienceFee;//???
         console.log( this.totalFee);
         this.swipeFee = this.totalFee * 0.029 + 0.40;
         console.log( this.swipeFee);
         this.total = this.subtotal + this.swipeFee + this.convenienceFee;
         console.log( this.total);
         this.appFeeByGroomer = this.subtotal + this.convenienceFee;
         console.log( this.appFeeByGroomer);
         this.appFeeByClient =this.subtotal * 0.90;
         console.log( this.appFeeByClient);
         this.subtotalLabel =  "$" + this.subtotal.toFixed(2);
         console.log( this.subtotalLabel);
         console.log(this.subtotalLabel);

         this.swipeFeedLabel = "$" + this.swipeFee.toFixed(2);
         console.log(this.swipeFeedLabel);
         this.transactionLabel =  "$" + this.convenienceFee.toFixed(2);
         console.log(this.transactionLabel);
         this.totalLabel = " $" + this.total.toFixed(2);
         console.log(this.totalLabel);

      }


  }

  getPet()
  {
    Parse.Cloud.run('getPetsInfo', {
      petId: this.provider.petid.id
    }).then((result) => {
      console.log(result);
      this.pets = result;
    });
   
    (error)=>{
      console.log(error);
    }
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

  makeTransaction()
  {
      console.log("total: ",this.total);
      console.log("customer id: ",this.provider.customerId);
      console.log("description: ",Parse.User.current().get('email'));
      console.log("card Id: ",this.provider.customerCardId);
      console.log("subtotal: ",this.subtotal);
      console.log("swipeFee: ",this.swipeFee);
      console.log("convenienceFee: ",this.convenienceFee);

    Parse.Cloud.run('charge', {
      amount:this.total,
      customerId: this.provider.customerId,
      description:Parse.User.current().get('email'),
      cardId:this.provider.customerCardId,
      subtotal:this.subtotal,
      swipeFee:this.swipeFee,
      covenienceFee:this.convenienceFee,
      appFeeByClient:0.00,
      appFeeByGroomer:0.00
    }).then((result) => {
      console.log("Pago Exitoso!!!!");
      
      console.log(result.get('purchase').id);
      this.chargeId = result.get('purchase').id;
      this.createService();
    });
   
    (error)=>{
      console.log(error);
    }


  }

  createService()
  {
    /*
    Params:
      - provider (groomerid)
      - duration (dogsmallduration)
      - startDate 
      - pets (id)array
      - address (id)
      - isManual false
      - subtotal
      - service (full or bath)
      - phone (telephone client)
      - date  ( 06/13/2019 7:00 AM)
      - coordinates
      - name
      - email
      - size
      - type
      - time 
      - appFee
      - appFeeByGroomer (0.00)
      - appFeeByClient (0.00)
      - appFee
      - charge
      - payOption (now or later)
      */

      console.log("Paramsss!!:");
      console.log("Provider:", this.groomerId.id);
      console.log("duration:", this.duration);
      console.log("starDate:", this.provider.startDay);
      console.log("pets:", this.provider.petsArray);
      console.log("address:",this.provider.addressId);
      console.log("subtotal:", this.total);
      console.log("service:", this.serviceRequest);
      console.log("phone:", this.phone);
      console.log("date:", this.provider.momentRequest);
      console.log("name:",Parse.User.current().get('fullName'));
      console.log("email:", Parse.User.current().get('email'));
      console.log("size:", this.petSize);
      console.log("size:", this.provider.momentTime);
      console.log("charge:", this.chargeId);
      console.log("payoptions:", this.payOptions);
      console.log("end");

     Parse.Cloud.run('submitServiceRequest', {
      provider: this.groomerId.id,
      duration: this.duration ,
      startDate: this.provider.startDay,
      pets: this.provider.petsArray,
      address: this.provider.addressId ,
      isManual: false,
      subtotal: this.total,
      service: this.serviceRequest,
      phone: this.phone,
      date : this.provider.momentRequest,
      name: Parse.User.current().get('fullName'),
      email: Parse.User.current().get('email'),
      size: this.petSize,
      type:   this.provider.petType,
      time : this.provider.momentTime,
      appFeeByGroomer: 0.00,
      appFeeByClient: 0.00,
      charge: this.chargeId,
      petName: this.provider.petName,
      payOption: this.payOptions

    }).then((result) => {
      console.log("Resultado");
      this.savedInfo();

    });
   
    (error)=>{
      console.log(error);
    }

  }

  async savedInfo(){
  
    const alert = await this.alert.create({
      header: 'ALERT!',
      message: 'Your service success',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.openPage();
        }
      }]
      });
  
      await alert.present();
      

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
