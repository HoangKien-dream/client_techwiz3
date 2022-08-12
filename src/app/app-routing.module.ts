import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './component/login/login.component'
import {HomeComponent} from './component/home/home.component'
import {RegisterComponent} from  './component/register/register.component'
import {DashboardComponent} from './component/dashboard/dashboard.component'
import {ProfileComponent} from  './component/profile/profile.component'
import {HealthVitalsComponent} from './component/health-vitals/health-vitals.component'
import {ContactUsComponent} from './component/contact-us/contact-us.component'

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'profile', component:ProfileComponent},
  {path:'health-vitals', component:HealthVitalsComponent},
  {path:'contact-us',component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
