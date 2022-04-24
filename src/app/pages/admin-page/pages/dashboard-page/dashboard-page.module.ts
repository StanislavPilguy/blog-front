import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { CartPostIconComponent } from './components/cart-post-icon/cart-post-icon.component';
import { CardCategoriesIconComponent } from './components/card-categories-icon/card-categories-icon.component';
import { CardUsersIconComponent } from './components/card-users-icon/card-users-icon.component';
import { CardRolesIconComponent } from './components/card-roles-icon/card-roles-icon.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    CartPostIconComponent,
    CardCategoriesIconComponent,
    CardUsersIconComponent,
    CardRolesIconComponent,
    LeftNavComponent,
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
  ]
})
export class DashboardPageModule { }
