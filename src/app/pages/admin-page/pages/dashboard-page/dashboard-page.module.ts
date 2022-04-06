import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import { CategoriesComponentComponent } from './components/categories-component/categories-component.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    CategoriesComponentComponent,
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    NgbDropdownModule
  ]
})
export class DashboardPageModule { }
