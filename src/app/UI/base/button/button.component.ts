import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  bgColor = 'but';

  constructor() { }

  ngOnInit(): void {
  }

}
