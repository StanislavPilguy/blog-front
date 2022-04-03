import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../../../services/auth.service";
import {Subscription} from "rxjs";
import {IUser} from "../../../interfaces/iUser";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit, OnDestroy {
  private user: IUser = {
    email: '',
    password: '',
    role: '',
  };

  public title = 'Sing Up'
  public form!: FormGroup;
  public aSub!: Subscription;
  public message: string = '';

  constructor(
    private _auth: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
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
  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit(): void {
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;

    this.form.disable();

    this.aSub = this._auth.registration(this.user)
      .subscribe(
        () => {
          this._router.navigate(['/admin', 'log-in']).then()
        },
        (error) => {
        if (error.error.message) {
          this.message = error.error.message;
        }
      }
    )
  }
}
