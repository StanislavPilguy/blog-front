import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private _auth: AuthService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })

    this._activatedRoute.queryParams.subscribe(
      params => {
        console.log(params)
        const {email} = params
        if (email) {
          console.log(email)
          // @ts-ignore
          this.form.get('email').value = email
        }
      }
    )
  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  onSubmit() {
    //this._auth.
  }
}
