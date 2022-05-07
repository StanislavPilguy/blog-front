import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  isShow: boolean = false;
  isContentShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass() {
    this.isShow = ! this.isShow;
    this.isContentShow = ! this.isContentShow;
  }
}
