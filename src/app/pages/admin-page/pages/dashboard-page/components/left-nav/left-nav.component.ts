import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AdminCategoriesService} from "../../../../../../services/admin-categories.service";
import {AuthService} from "../../../../../../services/auth.service";

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
})
export class LeftNavComponent implements OnInit {

  public adminCategories$!: Observable<any>;
  isOpenBtn: boolean = false;
  isColor: boolean = true;
  isShown: boolean = false;


  constructor(
    private _adminCategoriesService: AdminCategoriesService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.adminCategories$ = this._adminCategoriesService.getAdminCategories();
  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }

  toggleOpenBtn() {
    this.isOpenBtn = ! this.isOpenBtn
  }

  toggleColor() {
    this.isColor = ! this.isColor
  }

}
