import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  template: '<router-outlet></router-outlet>',
})
export class AdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
