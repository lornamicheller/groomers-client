import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

let parse = require('parse');
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  email:any;

  constructor() { parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("q9MLrOgwK69Glh41XZeZuX0LPWR9bN4RoCCDZaNP", "bKRfBYhBe8kiUC0xdCInQoLoiMXShn1X7HUay1u0");
  }

  ngOnInit() {
    
  }

  resetPass(){
    Parse.User.requestPasswordReset(this.email).then(() => {
      // Password reset request was sent successfully
      if (typeof document !== 'undefined') 
      console.log('Reset password email sent successfully'); 
    }).catch((error) => {
      if (typeof document !== 'undefined') console.log(`Error while creating request to reset user password: ${JSON.stringify(error)}`);
      console.error('Error while creating request to reset user password', error);
    });

  }
  

}
