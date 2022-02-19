import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsPageComponent } from './contacts-page.component';
import {ContactsPageRoutingModule} from "./contacts-page-routing.module";



@NgModule({
  declarations: [
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    ContactsPageRoutingModule
  ]
})
export class ContactsPageModule { }
