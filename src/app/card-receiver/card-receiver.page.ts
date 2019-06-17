import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-receiver',
  templateUrl: './card-receiver.page.html',
  styleUrls: ['./card-receiver.page.scss'],
})
export class CardReceiverPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }




  getCards(){
    Parse.Cloud.run('getStripeUserCards').then((result) =>  
    {
      console.log(result);
     this.cards=result;
    
  },(error) =>{
    this.errorAlert(error);
    console.log(error);
  });
  }

}
