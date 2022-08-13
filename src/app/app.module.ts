import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';

import {HomeComponent } from './component/home/home.component';
import {RegisterComponent } from './component/register/register.component';
import {LoginComponent } from './component/login/login.component';
import {ProfileComponent } from './component/profile/profile.component';
import {DashboardComponent } from './component/dashboard/dashboard.component';
import {HealthVitalsComponent } from './component/health-vitals/health-vitals.component';
import {NZ_I18N } from 'ng-zorro-antd/i18n';
import {en_US } from 'ng-zorro-antd/i18n';
import {registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzModalModule} from "ng-zorro-antd/modal";
import {ContactUsComponent } from './component/contact-us/contact-us.component';
import {MedicineDosageComponent } from './component/medicine-dosage/medicine-dosage.component';
import {AppointmentsComponent } from './component/appointments/appointments.component';
import { AppointmentCreateComponent } from './component/appointment-create/appointment-create.component';
import { AppointmentUpdateComponent } from './component/appointment-update/appointment-update.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    HealthVitalsComponent,
    ContactUsComponent,
    MedicineDosageComponent,
    AppointmentsComponent,
    AppointmentCreateComponent,
    AppointmentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzInputModule,
    NzDatePickerModule,
    NzButtonModule,
    NzCheckboxModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
