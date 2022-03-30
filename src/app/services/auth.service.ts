import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/iUser";
import {IToken} from "../interfaces/iToken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = environment.url;
  readonly urlSingIn = this.url + 'auth/log-in';
  readonly urlSingUp = this.url + 'auth/registration';


  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {}

  public login(user: IUser): Observable<IToken> {
    return this._http.post<IToken>(this.urlSingIn, user);
  }

  public registration(user: IUser): Observable<IToken> {
    return this._http.post<IToken>(this.urlSingUp, user);
  }
}
