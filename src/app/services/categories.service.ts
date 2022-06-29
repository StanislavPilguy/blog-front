import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICategories} from "../interfaces/iCategories";
import {ICategoryFetch} from "../interfaces/iCategory-fetch";


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  readonly url = environment.url;
  readonly urlCategories = this.url + 'categories/';
  readonly urlCategoriesDel = this.url + 'categories/del';

  constructor(
    private _http: HttpClient
  ) { }

 public createCategory(category: ICategories): Observable<ICategories> {
    return this._http.post<ICategories>(this.urlCategories, category, {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      }
    });
 }

 public getCategory(): Observable<ICategories[]> {
    return  this._http.get<ICategories[]>(this.urlCategories)
  }

  public deleteAll(categoriesIds: number[]): Observable<number[]> {
    return this._http.post<number[]>(this.urlCategoriesDel, categoriesIds, {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      }
    })
  }

  public updateCategory(categoryId: number, category: ICategories): Observable<ICategoryFetch> {
    return this._http.put<ICategoryFetch>(this.urlCategories + categoryId, category, {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      }
    })
  }

  public getCategoryById(id: number): Observable<ICategories[]> {
    return this._http.get<ICategories[]>(this.urlCategories + id, {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      }
    })
  }


}
