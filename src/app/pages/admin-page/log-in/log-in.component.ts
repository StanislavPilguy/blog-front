import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../../../services/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public aSub!: Subscription;
  public messageEmail: string = '';


  constructor(
    private _auth: AuthService,
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

  onSubmit() {
    this.form.disable()

    this.aSub = this._auth.login(this.form.value).subscribe(
      () => {
        console.log('success');
        this.messageEmail = '';
      },
      error => {
        if (error?.error?.message) {
          this.messageEmail = error.error.message;
        }
        if (error?.error?.message === 'Internal server error') {
          this._router.navigate(['/admin', 'registration'], {
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
