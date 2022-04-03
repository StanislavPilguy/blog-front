import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';
import {AdminPageModule} from "../../admin-page.module";
import { CreateCategoryPageComponent } from './pages/create-category-page/create-category-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    CreateCategoryPageComponent,
    CategoriesPageComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    AdminPageModule
  ],
  providers: []
})
export class ProfilePageModule { }
