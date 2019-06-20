import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
  { path: '', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'cards-orders', loadChildren: './cards-orders/cards-orders.module#CardsOrdersPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'choose-groomer', loadChildren: './choose-groomer/choose-groomer.module#ChooseGroomerPageModule' },
  { path: 'add-pet', loadChildren: './add-pet/add-pet.module#AddPetPageModule' },
  { path: 'new-pet', loadChildren: './new-pet/new-pet.module#NewPetPageModule' },
  { path: 'add-address', loadChildren: './add-address/add-address.module#AddAddressPageModule' },
  { path: 'address-form', loadChildren: './address-form/address-form.module#AddressFormPageModule' },
  { path: 'address-receiver', loadChildren: './address-receiver/address-receiver.module#AddressReceiverPageModule' },
  { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
  { path: 'groomers-profile', loadChildren: './groomers-profile/groomers-profile.module#GroomersProfilePageModule' },
  { path: 'add-credit-card', loadChildren: './add-credit-card/add-credit-card.module#AddCreditCardPageModule' },
  { path: 'card-info', loadChildren: './card-info/card-info.module#CardInfoPageModule' },
  { path: 'card-receiver', loadChildren: './card-receiver/card-receiver.module#CardReceiverPageModule' },
  { path: 'new-card', loadChildren: './new-card/new-card.module#NewCardPageModule' },
  { path: 'make-payment', loadChildren: './make-payment/make-payment.module#MakePaymentPageModule' },
  { path: 'order-success', loadChildren: './order-success/order-success.module#OrderSuccessPageModule' },
  { path: 'order-summary', loadChildren: './order-summary/order-summary.module#OrderSummaryPageModule' },
  { path: 'client-profile', loadChildren: './client-profile/client-profile.module#ClientProfilePageModule' },
  { path: 'history-order', loadChildren: './history-order/history-order.module#HistoryOrderPageModule' },
  { path: 'status-appointment', loadChildren: './status-appointment/status-appointment.module#StatusAppointmentPageModule' },
  { path: 'groomers-availability', loadChildren: './groomers-availability/groomers-availability.module#GroomersAvailabilityPageModule' },
  { path: 'add-new-card', loadChildren: './add-new-card/add-new-card.module#AddNewCardPageModule' },
  { path: 'rating', loadChildren: './rating/rating.module#RatingPageModule' },
  { path: 'home-pets', loadChildren: './home-pets/home-pets.module#HomePetsPageModule' },
  { path: 'facebook-form', loadChildren: './facebook-form/facebook-form.module#FacebookFormPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
