import { Component, OnInit } from '@angular/core';

import {AdminCategoriesService} from "../../../../services/admin-categories.service";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  public title = 'Dashboard';
  public description = ''
  public hi = 'Hi!'
  isContentShow: boolean = false;

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit(): void {

  }

  toggleShow() {
    this.isContentShow = ! this.isContentShow
  }
}
