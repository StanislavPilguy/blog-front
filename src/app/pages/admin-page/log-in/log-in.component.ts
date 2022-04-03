import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../../services/auth.service";
import {Subscription} from "rxjs";
import {IUser} from "../../../interfaces/iUser";



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit, OnDestroy {
  private user: IUser = {
    email: '',
    password: '',
    role: ''
  };
  public form!: FormGroup;
  public aSub!: Subscription;
  public massage: string = '';
  public msg: string = '';
  public title: string = 'Sing In'


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

  onSubmit(): void {
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;

    this.form.disable();

    this.aSub = this._auth.login(this.user)
      .subscribe(
        () => {
          this.form.reset();
          this._router.navigate(['/admin', 'profile']).then();
          this.form.enable();
        },
        (error) => {
          if (error.error.massage) {
           this.massage = error.error.massage;
          }
        },
      )
   }
}
