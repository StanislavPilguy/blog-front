import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageComponent } from './admin-page.component';
import {AdminPageRoutingModule} from "./admin-page-routing.module";
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AdminPageComponent,
    LogInComponent,
    RegistrationComponent,

  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
  ]
})
export class AdminPageModule { }
