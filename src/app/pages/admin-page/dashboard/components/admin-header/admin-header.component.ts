import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    public auth:AuthService
  ) { }

  ngOnInit(): void {
  }

}
