import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryPageComponent } from './create-category-page.component';
import {CreateCategoryRoutingModule} from "./create-category-routing.module";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateCategoryPageComponent
  ],
  imports: [
    CommonModule,
    CreateCategoryRoutingModule,
    AngularEditorModule,
    ReactiveFormsModule,
  ]
})
export class CreateCategoryPageModule { }
