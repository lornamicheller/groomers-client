import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardReceiverPage } from './card-receiver.page';

const routes: Routes = [
  {
    path: '',
    component: CardReceiverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardReceiverPage]
})
export class CardReceiverPageModule {}
