import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICategories} from "../interfaces/iCategories";


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  readonly url = environment.url;
  readonly urlCategories = this.url + 'categories/';

  constructor(
    private _http: HttpClient
  ) { }

  getCategory(): Observable<ICategories[]> {
    return  this._http.get<ICategories[]>(this.urlCategories)
  }
}
