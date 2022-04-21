import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../../../../services/blog.service";

@Component({
  selector: 'app-card-roles-icon',
  templateUrl: './card-roles-icon.component.html',
})
export class CardRolesIconComponent implements OnInit {
  public title = 'Roles'

  constructor(
    private blog: BlogService,
  ) { }

  ngOnInit(): void {

  }

}
