import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import {environment} from "../../environments/environment";
import {UserInterface} from "../interfaces/user.interface";
import {UserToken} from "../interfaces/userToken.interface";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = environment.url;
  readonly urlSingIn = this.url + 'auth/log-in';
  readonly urlRegistration = this.url + 'auth/registration';

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {}

  public login(user: UserInterface): Observable<UserToken> {
    return this._http.post<UserToken>(this.urlSingIn, user)
      .pipe(
        tap(res => {
          if (res.token) {
            console.log('token', res);
            window.localStorage.setItem('token', res.token);
            this._router.navigate(['/admin', 'dashboard']).then()
          }
        })
      )
  }

   public registration(user: UserInterface): Observable<UserToken> {
    return this._http.post<UserToken>(this.urlRegistration, {
      ...user
    }).pipe(
      tap(res => {
        if (res.token) {
          console.log('user', res)
          window.localStorage.setItem('token', res.token)

        }
      })
    )
  }
}
