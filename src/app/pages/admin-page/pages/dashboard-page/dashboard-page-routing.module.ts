import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardPageComponent} from "./dashboard-page.component";
import {CategoriesComponent} from "./components/categories/categories.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '', component: DashboardPageComponent, children: [
      {
        path: 'categories',
        component: CategoriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
