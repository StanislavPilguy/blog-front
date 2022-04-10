import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './blog-page.component';
import {BlogPageRoutingModule} from "./blog-page-routing.module";
import {PostPageModule} from "../post-page/post-page.module";
import { PostCardComponent } from './post-card/post-card.component';



@NgModule({
  declarations: [
    BlogPageComponent,
    PostCardComponent
  ],
    imports: [
        CommonModule,
        BlogPageRoutingModule,
        PostPageModule
    ]
})
export class BlogPageModule { }
