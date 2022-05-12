import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {DashboardPageComponent} from "./dashboard-page.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent, children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'categories',
        loadChildren: () => {
          return import('./pages/categories-page/categories-page.module').then(m => m.CategoriesPageModule)
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
