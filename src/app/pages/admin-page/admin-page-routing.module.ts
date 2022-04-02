import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminPageComponent} from "./admin-page.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "../../guards/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent, children: [
      {
        path: '',
        redirectTo: 'log-in',
        pathMatch: 'full'
      },
      {
        path: 'log-in',
        component: LogInComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
