import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly url = environment.url;
  readonly urlPosts = this.url + 'posts';

  constructor() { }
}
