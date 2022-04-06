import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesPageRoutingModule } from './categories-page-routing.module';
import { CategoriesPageComponent } from './categories-page.component';


@NgModule({
  declarations: [
    CategoriesPageComponent
  ],
  imports: [
    CommonModule,
    CategoriesPageRoutingModule
  ]
})
export class CategoriesPageModule { }
