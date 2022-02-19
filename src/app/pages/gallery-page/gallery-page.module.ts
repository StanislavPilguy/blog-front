import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page.component';
import {GalleryPageRoutingModule} from "./gallery-page-routing.module";



@NgModule({
  declarations: [
    GalleryPageComponent
  ],
  imports: [
    CommonModule,
    GalleryPageRoutingModule
  ]
})
export class GalleryPageModule { }
