import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageComponent } from './admin-page.component';
import {AdminPageRoutingModule} from "./admin-page-routing.module";
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    LogInComponent,
    RegistrationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule
  ]
})
export class AdminPageModule { }
