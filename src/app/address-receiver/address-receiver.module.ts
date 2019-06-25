import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddressReceiverPage } from './address-receiver.page';

const routes: Routes = [
  {
    path: '',
    component: AddressReceiverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddressReceiverPage]
})
export class AddressReceiverPageModule {}
