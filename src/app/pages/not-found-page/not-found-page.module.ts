import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundPageComponent } from './not-found-page.component';
import {NotFoundPageRoutingModule} from "./not-found-page-routing.module";



@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule
  ]
})
export class NotFoundPageModule { }
