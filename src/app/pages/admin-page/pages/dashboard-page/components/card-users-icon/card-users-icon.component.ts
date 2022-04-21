import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-users-icon',
  templateUrl: './card-users-icon.component.html',
  styleUrls: ['./card-users-icon.component.scss']
})
export class CardUsersIconComponent implements OnInit {
  public title = 'Users'

  constructor() { }

  ngOnInit(): void {
  }

}
