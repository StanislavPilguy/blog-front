import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  readonly url = environment.url;
  readonly urlBlog = this.url + 'posts/';

  constructor(
    private _http: HttpClient,
  ) { }

  getPostByTitle(title: string): Observable<any> {
    return this._http.get(this.urlBlog + 'name/' + title)
  }

  getPosts(): Observable<any> {
    return this._http.get(this.urlBlog)
  }
}
