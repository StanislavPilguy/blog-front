import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AdminCategoriesService} from "../../services/admin-categories.service";
import {IAdminCategories} from "../../interfaces/iAdmin-categories";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  public categoriesAdmin$!: Observable<IAdminCategories[]>;
  isShow: boolean = false;
  isContentShow: boolean = false;
  isActive: boolean = false;
  isBtnActive: boolean = false;

  constructor(
    private admin: AdminCategoriesService
  ) { }

  ngOnInit(): void {
    this.categoriesAdmin$ = this.admin.getAdminCategories()
  }

  toggleClass() {
    this.isShow = ! this.isShow;
    this.isContentShow = ! this.isContentShow;
    this.isBtnActive = ! this.isBtnActive
  }

}
