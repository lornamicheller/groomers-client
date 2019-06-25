import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalendarEmbeddedPage } from './calendar-embedded.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarEmbeddedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalendarEmbeddedPage]
})
export class CalendarEmbeddedPageModule {}
