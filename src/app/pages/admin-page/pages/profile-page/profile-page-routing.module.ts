import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilePageComponent} from "./profile-page.component";
import {CreateCategoryPageComponent} from "./pages/create-category-page/create-category-page.component";
import {CategoriesPageComponent} from "./pages/categories-page/categories-page.component";


const routes: Routes = [
  {
    path: '', component: ProfilePageComponent, children: [
      {
        path: '', redirectTo: 'categories', pathMatch: 'full'
      },
      {
          path: 'create-category', component: CreateCategoryPageComponent
      },
      {
        path: 'categories', component: CategoriesPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
