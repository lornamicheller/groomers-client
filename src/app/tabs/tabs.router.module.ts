import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../tab4/tab4.module#Tab4PageModule'
          }
        ]
      },
      {
        path: 'cards-orders',
        children: [
          {
            path: '',
            loadChildren: '../cards-orders/cards-orders.module#CardsOrdersPageModule'
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: '../search/search.module#SearchPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'choose-groomer',
        children: [
          {
            path: '',
            loadChildren: '../choose-groomer/choose-groomer.module#ChooseGroomerPageModule'
          }
        ]
      },
      {
        path: 'add-pet',
        children: [
          {
            path: '',
            loadChildren: '../add-pet/add-pet.module#AddPetPageModule'
          }
        ]
      },
      {
        path: 'new-pet',
        children: [
          {
            path: '',
            loadChildren: '../new-pet/new-pet.module#NewPetPageModule'
          }
        ]
      },
      {
        path: 'address-form',
        children: [
          {
            path: '',
            loadChildren: '../address-form/address-form.module#AddressFormPageModule'
          }
        ]
      },
      {
        path: 'choose-groomer',
        children: [
          {
            path: '',
            loadChildren: '../choose-groomer/choose-groomer.module#ChooseGroomerPageModule'
          }
        ]
      },
      {
        path: 'address-receiver',
        children: [
          {
            path: '',
            loadChildren: '../address-receiver/address-receiver.module#AddressReceiverPageModule'
          }
        ]
      },
      {
        path: 'appointment',
        children: [
          {
            path: '',
            loadChildren: '../appointment/appointment.module#AppointmentPageModule'
          }
        ]
      },
      {
        path: 'groomers-profile',
        children: [
          {
            path: '',
            loadChildren: '../groomers-profile/groomers-profile.module#GroomersProfilePageModule'
          }
        ]
      },
      {
        path: 'add-credit-card',
        children: [
          {
            path: '',
            loadChildren: '../add-credit-card/add-credit-card.module#AddCreditCardPageModule'
          }
        ]
      },
      {
        path: 'card-info',
        children: [
          {
            path: '',
            loadChildren: '../card-info/card-info.module#CardInfoPageModule'
          }
        ]
      },
      {
        path: 'card-receiver',
        children: [
          {
            path: '',
            loadChildren: '../card-receiver/card-receiver.module#CardReceiverPageModule'
          }
        ]
      },
      {
        path: 'add-new-card',
        children: [
          {
            path: '',
            loadChildren: '../add-new-card/add-new-card.module#AddNewCardPageModule'
          }
        ]
      },
      {
        path: 'make-payment',
        children: [
          {
            path: '',
            loadChildren: '../make-payment/make-payment.module#MakePaymentPageModule'
          }
        ]
      },
      {
        path: 'order-success',
        children: [
          {
            path: '',
            loadChildren: '../order-success/order-success.module#OrderSuccessPageModule'
          }
        ]
      },
      {
        path: 'order-summary',
        children: [
          {
            path: '',
            loadChildren: '../order-summary/order-summary.module#OrderSummaryPageModule'
          }
        ]
      },
      {
        path: 'client-profile',
        children: [
          {
            path: '',
            loadChildren: '../client-profile/client-profile.module#ClientProfilePageModule'
          }
        ]
      },
      {
        path: 'history-order',
        children: [
          {
            path: '',
            loadChildren: '../history-order/history-order.module#HistoryOrderPageModule'
          }
        ]
      },
      {
        path: 'status-appointment',
        children: [
          {
            path: '',
            loadChildren: '../status-appointment/status-appointment.module#StatusAppointmentPageModule'
          }
        ]
      },
      {
        path: 'groomers-availability',
        children: [
          {
            path: '',
            loadChildren: '../groomers-availability/groomers-availability.module#GroomersAvailabilityPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
