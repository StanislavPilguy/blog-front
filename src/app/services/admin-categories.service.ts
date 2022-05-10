import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";
import {IAdminCategories} from "../interfaces/iAdmin-categories";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AdminCategoriesService {
  readonly url = environment.url;
  readonly urlAdminCategories = this.url + 'admin-categories';

  constructor(
    private _http: HttpClient,
  ) {
  }

  public createAdminCategories(adminCategory: IAdminCategories): Observable<IAdminCategories> {
    return this._http.post<IAdminCategories>(this.urlAdminCategories, adminCategory);
  }

  public getAdminCategories(): Observable<IAdminCategories[]> {
    return this._http.get<any>(this.urlAdminCategories);
  }

}
