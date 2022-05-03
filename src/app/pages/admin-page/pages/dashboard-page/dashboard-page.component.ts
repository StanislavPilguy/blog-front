import { Component, OnInit } from '@angular/core';

import {AdminCategoriesService} from "../../../../services/admin-categories.service";
import {AuthService} from "../../../../services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  public title = 'Dashboard';
  public description = ''
  public hi = 'Hi!'
  isContentShow: boolean = false;
  public adminCategories$!: Observable<any>;
  isOpenBtn: boolean = false;
  isColor: boolean = true;
  isShown: boolean = false;

  constructor(
    private _adminCategoriesService: AdminCategoriesService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.adminCategories$ = this._adminCategoriesService.getAdminCategories();
  }

  toggleShow() {
    this.isContentShow = ! this.isContentShow
    this.isShown = ! this.isShown;
  }

  toggleOpenBtn() {
    this.isOpenBtn = ! this.isOpenBtn
  }

  toggleColor() {
    this.isColor = ! this.isColor
  }
}
