import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardPageRoutingModule} from "./dashboard-page-routing.module";
import { DashboardPageComponent } from './dashboard-page.component';
import { CategoryComponent } from './components/category/category.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    DashboardPageComponent,
    CategoryComponent,
    PostsComponent,
    UsersComponent,
    RolesComponent,
  ],
    imports: [
        CommonModule,
        DashboardPageRoutingModule,
        MatIconModule,
    ]
})
export class DashboardPageModule { }
