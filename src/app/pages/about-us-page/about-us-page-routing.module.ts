import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsPageComponent} from "./about-us-page.component";


const routes: Routes = [
  {
    path: '',
    component: AboutUsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsPageRoutingModule {

}
