import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardPageComponent} from "./dashboard-page.component";
import {CategoriesComponentComponent} from "./components/categories-component/categories-component.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'categories'},
      {
        path: 'categories',
        component: CategoriesComponentComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
