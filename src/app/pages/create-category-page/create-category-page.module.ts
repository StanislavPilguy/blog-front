import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryPageComponent } from './create-category-page.component';
import {CreateCategoryRoutingModule} from "./create-category-routing.module";



@NgModule({
  declarations: [
    CreateCategoryPageComponent
  ],
  imports: [
    CommonModule,
    CreateCategoryRoutingModule
  ]
})
export class CreateCategoryPageModule { }
