import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit, OnDestroy {
  public title = 'Sing Up'
  public form!: FormGroup;
  public aSub!: Subscription;
  public msg: string = '';

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

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();

    this.aSub = this._auth.registration(this.form.value).subscribe(
      () => {
      },
      error => {
        if (error?.error?.message) {
          //this.messageEmail = error.error.message;
        }
        if (error?.error?.message === 'Internal server error') {
          this._router.navigate(['/admin', 'log-in'], {
            queryParams: {
              email: this.email?.value
            }
          }).then()
        }
        this.form.enable()
      }
    )

  }
}
