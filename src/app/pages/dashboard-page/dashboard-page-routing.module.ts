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
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
