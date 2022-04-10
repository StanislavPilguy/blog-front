import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  // @ts-ignore
  @Input() post = { title: ''}
  constructor(
  ) {

  }

  ngOnInit(): void {
    console.log(this.post)
  }

}
