import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = environment.url;
  readonly urlSingIn = this.url + '/auth/log-in';
  readonly register = this.url + '/auth/registration';

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {}



}
