import { Component, OnInit } from '@angular/core';

import {BlogService} from "../../../../../../services/blog.service";

@Component({
  selector: 'app-cart-post-icon',
  templateUrl: './cart-post-icon.component.html',
})
export class CartPostIconComponent implements OnInit {
  posts: any = []
  public title = 'Posts:';

  constructor(
    private blog: BlogService,
  ) { }

  ngOnInit(): void {
    this.blog.getPosts().subscribe( res => {
        console.log(res)
        this.posts = res.rows
      }
    )
  }
}
