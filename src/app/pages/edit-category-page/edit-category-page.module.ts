import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryPageComponent } from './edit-category-page.component';
import {EditCategoryPageRoutingModule} from "./edit-category-page-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EditCategoryPageComponent
  ],
    imports: [
        CommonModule,
        EditCategoryPageRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class EditCategoryPageModule { }
