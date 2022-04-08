import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";
import {IUser} from "../interfaces/iUser";
import {IToken} from "../interfaces/iToken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = environment.url;
  readonly urlSingIn = this.url + 'auth/log-in';
  readonly urlSingUp = this.url + 'auth/registration';

  get token(): string {
    // @ts-ignore
    return window.localStorage.getItem('token') ? window.localStorage.getItem('token') : ''
  }
  get role(): string {
    // @ts-ignore
    return window.localStorage.getItem('role') ? +window.localStorage.getItem('role') : 0
  }
  get description(): string {
    // @ts-ignore
    return window.localStorage.getItem('description') ? window.localStorage.getItem('description') : ''
  }

  get email(): string {
    // @ts-ignore
    return window.localStorage.getItem('email') ? window.localStorage.getItem('email') : ''
  }

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {}

  public login(user: IUser): Observable<IToken> {
    return this._http.post<IToken>(this.urlSingIn, user)
      .pipe(
        tap(res => {
          if (res.token) {
            window.localStorage.setItem('token', res.token)
            window.localStorage.setItem('role', res.role[0].value)
            window.localStorage.setItem('description', res.role[0].description)
            window.localStorage.setItem('email', res.user.email)
          }
        })
      )
  }

  public registration(user: IUser): Observable<IToken> {
    return this._http.post<IToken>(this.urlSingUp, user)
      .pipe(
        tap(
          res => {
            if (res) {
              window.localStorage.setItem('token', res.token)
            }
          }
        )
      )
  }

  isAuthenticated(): boolean {
    return !!this.token
  }


  logout() {
    window.localStorage.clear()
    this._router.navigate(['/admin', 'log-in']).then()
  }

  isRoles(): boolean {
    // @ts-ignore
    return this.role === 1 || this.role === 2;
  }
}
