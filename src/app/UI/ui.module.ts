import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './base/button/button.component';
import { CardComponent } from './base/card/card.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
