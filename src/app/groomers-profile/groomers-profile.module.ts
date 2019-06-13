import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroomersProfilePage } from './groomers-profile.page';

const routes: Routes = [
  {
    path: '',
    component: GroomersProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroomersProfilePage]
})
export class GroomersProfilePageModule {}
