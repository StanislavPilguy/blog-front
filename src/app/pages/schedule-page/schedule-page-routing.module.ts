import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchedulePageComponent} from "./schedule-page.component";


const routes: Routes = [
  {
    path: '',
    component: SchedulePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulePageRoutingModule { }
