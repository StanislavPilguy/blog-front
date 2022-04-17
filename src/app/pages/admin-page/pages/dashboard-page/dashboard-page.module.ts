import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    MatCardModule,
  ]
})
export class DashboardPageModule { }
