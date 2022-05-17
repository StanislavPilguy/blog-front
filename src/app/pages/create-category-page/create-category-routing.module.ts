import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {CreateCategoryPageComponent} from "./create-category-page.component";

const routes: Routes = [
  {
    path: '',
    component: CreateCategoryPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCategoryRoutingModule { }
