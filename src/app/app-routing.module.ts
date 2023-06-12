import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [

  {
    path: '' ,
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home' , component:HomeComponent
  },
  {
    path: 'about' , component:AboutUsComponent
  },
  {
    path: 'order-tracker' , component:OrderTrackingComponent
  },
  {
    path: 'profile' , component:ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
