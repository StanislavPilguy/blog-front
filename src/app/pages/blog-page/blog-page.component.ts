import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
})
export class BlogPageComponent implements OnInit {
  // @ts-ignore
  public posts$: Observable<any> = undefined;

  constructor(
    private blog: BlogService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.blog.getPosts()
  }

}
