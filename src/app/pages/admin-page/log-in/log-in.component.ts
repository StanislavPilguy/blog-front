import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../../../services/auth.service";
import {Subscription} from "rxjs";



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public aSub!: Subscription

  constructor(
    private _auth: AuthService,
    // private router: Router
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

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable()

    this.aSub = this._auth.login(this.form.value).subscribe(
      () => console.log('success'),
      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }
}
