import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { CartPostIconComponent } from './components/cart-post-icon/cart-post-icon.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    CartPostIconComponent,
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
  ]
})
export class DashboardPageModule { }
