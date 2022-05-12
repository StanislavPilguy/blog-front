import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardPageRoutingModule} from "./dashboard-page-routing.module";
import { DashboardPageComponent } from './dashboard-page.component';
import {CategoriesPageModule} from "./pages/categories-page/categories-page.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    CategoriesPageModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
  ]
})
export class DashboardPageModule { }
