import { Component, OnInit } from '@angular/core';

import {AdminCategoriesService} from "../../../../services/admin-categories.service";
import {Observable} from "rxjs";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  public adminCategories$!: Observable<any>;

  constructor(
    private _adminCategoriesService: AdminCategoriesService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.adminCategories$ = this._adminCategoriesService.getAdminCategories();
  }

}
