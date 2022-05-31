import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EditCategoryPageComponent} from "./edit-category-page.component";

const routes: Routes = [
  {
    path: '',
    component: EditCategoryPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCategoryPageRoutingModule { }
