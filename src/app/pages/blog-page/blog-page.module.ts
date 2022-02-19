import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './blog-page.component';
import {BlogPageRoutingModule} from "./blog-page-routing.module";



@NgModule({
  declarations: [
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    BlogPageRoutingModule
  ]
})
export class BlogPageModule { }
