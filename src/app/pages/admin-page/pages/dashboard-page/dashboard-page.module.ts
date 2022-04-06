import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { CategoriesComponentComponent } from './components/categories-component/categories-component.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    CategoriesComponentComponent,
  ],
    imports: [
        CommonModule,
        DashboardPageRoutingModule,
    ]
})
export class DashboardPageModule { }
