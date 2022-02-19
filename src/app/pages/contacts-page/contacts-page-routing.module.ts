import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsPageComponent} from "./contacts-page.component";


const routes: Routes = [
  {
    path: '',
    component: ContactsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsPageRoutingModule { }
