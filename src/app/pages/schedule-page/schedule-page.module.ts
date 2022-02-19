import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulePageComponent } from './schedule-page.component';
import {SchedulePageRoutingModule} from "./schedule-page-routing.module";



@NgModule({
  declarations: [
    SchedulePageComponent
  ],
  imports: [
    CommonModule,
    SchedulePageRoutingModule
  ]
})
export class SchedulePageModule { }
