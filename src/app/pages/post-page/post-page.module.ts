import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PostPageRoutingModule} from "./post-page-routing.module";
import {PostPageComponent} from "./post-page.component";



@NgModule({
  declarations: [
    PostPageComponent
  ],
  imports: [
    CommonModule,
    PostPageRoutingModule
  ]
})
export class PostPageModule { }
