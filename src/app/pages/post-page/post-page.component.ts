import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
})
export class PostPageComponent implements OnInit {
  // @ts-ignore
  public post$: Observable<any> = undefined;

  constructor(
    private blog: BlogService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const { title } = params
        this.post$ = this.blog.getPostByTitle(title)
      }
    )
  }

}
