import {Component, OnInit} from '@angular/core';

import {CategoriesService} from "../../services/categories.service";
import {Observable} from "rxjs";
import {ICategories} from "../../interfaces/iCategories";

@Component({
    selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories$!: Observable<ICategories[]>;
  public categories: ICategories[] = [];


  constructor(
    private _categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categories$ = this._categoriesService.getCategory();
  }

  onDelete() {

    this._categoriesService.deleteAll(this.categories).subscribe(() => {
      console.log(this.categories.length)
    })
  }
}
