import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageComponent } from './admin-page.component';
import {AdminPageRoutingModule} from "./admin-page-routing.module";
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminHeaderComponent } from './dashboard/components/admin-header/admin-header.component';
import { AdminFooterComponent } from './dashboard/components/admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    LogInComponent,
    RegistrationComponent,
    DashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,

  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: []
})
export class AdminPageModule { }
