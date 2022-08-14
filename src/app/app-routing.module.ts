import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './component/login/login.component'
import {HomeComponent} from './component/home/home.component'
import {RegisterComponent} from  './component/register/register.component'
import {DashboardComponent} from './component/dashboard/dashboard.component'
import {ProfileComponent} from  './component/profile/profile.component'
import {HealthVitalsComponent} from './component/health-vitals/health-vitals.component'
import {ContactUsComponent} from './component/contact-us/contact-us.component'
import {AppointmentsComponent} from './component/appointments/appointments.component'
import {MedicineDosageComponent} from './component/medicine-dosage/medicine-dosage.component'
import {AppointmentCreateComponent} from './component/appointment-create/appointment-create.component'
import {AppointmentUpdateComponent} from './component/appointment-update/appointment-update.component'
import {MedicineDosageListComponent} from './component/medicine-dosage-list/medicine-dosage-list.component'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'profile', component:ProfileComponent},
  {path:'health-vitals', component:HealthVitalsComponent},
  {path:'appointment', component:AppointmentsComponent},
  {path:'medicine', component:MedicineDosageComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'appointment-create',component:AppointmentCreateComponent},
  {path:'appointment-update',component:AppointmentUpdateComponent},
  {path:'medicine-list',component:MedicineDosageListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
