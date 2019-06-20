import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ToastController, NavController } from '@ionic/angular';
import {GroomproviderService } from "./../../app/groomprovider.service";
import * as Parse from 'parse';
let parse =require('parse');

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {

  constructor(public provider: GroomproviderService,private nativePageTransitions: NativePageTransitions, public nav: NavController,
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

    day:any;


    // variables!!!!

    subtotal:any;
    totalFee:any;
    swipeFee:any;
    total:any;
    appFeeByGroomer:any;
    appFeeByClient:any;
    subtotalLabel:any;
    convenienceFee:any;

    swipeFeedLabel:any;
    transactionLabel:any;
    totalLabel:any;
    nameGroomer:any;
  


  ngOnInit() {
    //fullname of user
    this.name = Parse.User.current().get('fullname');
    //phone of user
    this.phone = Parse.User.current().get('phone');
    //payment method ( full or later)
    this.service = this.provider.paymentMethod;
    // pet size (small, medium or large)
    this.petSize = this.provider.petSize;
    // groomer object 
    this.groomerId = this.provider.groomerId;
    // type of service
    this.serviceType = this.provider.services;
    //name of groomer
    this.nameGroomer = this.provider.groomerId.get('fullName');
 
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
      if(this.serviceType == "Full Gromming")
      {
          if(this.petSize == "Small")
          {
            this.priceOfService = this.groomerId.get('fullSmall');
            console.log(this.priceOfService);
          }
          else if( this.petSize == "Medium")
          {
            this.priceOfService = this.groomerId.get('fullMedium');
            console.log(this.priceOfService);
          }
          else if( this.petSize == "Large")
          {
            this.priceOfService = this.groomerId.get('fullLarge');
            console.log(this.priceOfService);

          }
          
      }
      // bath ----------------------------
      else if (this.serviceType == "Bath")
      {

        if(this.petSize == "Small")
          {
            this.priceOfService = this.groomerId.get('bathSmall');
            console.log(this.priceOfService);
          }
          else if( this.petSize == "Medium")
          {
            this.priceOfService = this.groomerId.get('bathMedium');
            console.log(this.priceOfService);
          }
          else if( this.petSize == "Large")
          {
            this.priceOfService = this.groomerId.get('bathLarge');
            console.log(this.priceOfService);

          }

      }
  }



  makePayment()
  {
    // later
      if(this.provider.paymentMethod == "Later")
      {
        this.subtotal = this.priceOfService;
        this.totalFee = this.subtotal + this.convenienceFee;
        this.swipeFee = this.totalFee * 0.029 + 0.40;
        this.total = this.swipeFee + this.convenienceFee;
        this.appFeeByGroomer = this.subtotal + this.convenienceFee;
        this.appFeeByClient = this.subtotal * 0.90;

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

         this.subtotal = this.priceOfService;
         this.totalFee = this.subtotal + this.convenienceFee;//???
         this.swipeFee = this.totalFee * 0.029 + 0.40;
         this.total = this.subtotal + this.swipeFee + this.convenienceFee;
         this.appFeeByGroomer = this.subtotal + this.convenienceFee;
         this.appFeeByClient =this.subtotal * 0.90;
         this.subtotalLabel =  "$" + this.subtotal.toFixed(2);
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
      petId: this.provider.petid
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
