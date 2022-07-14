import {Component, OnInit} from '@angular/core';

import {CategoriesService} from "../../services/categories.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ICategories} from "../../interfaces/iCategories";

@Component({
  selector: 'app-edit-category-page',
  templateUrl: './edit-category-page.component.html',
})
export class EditCategoryPageComponent implements OnInit {
  category?: ICategories;
  categoryId?: number = 0;

  constructor(
    public route: ActivatedRoute,
    private _categoriesService: CategoriesService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = +params['id']
      this._categoriesService.getCategoryById(this.categoryId).subscribe((data) => {
        console.log(data)
        this.category = data[0]
      })
    })
  }
  submit() {
    if (this.category?.name.length) {
      // @ts-ignore
      this._categoriesService.updateCategory(this.categoryId, this.category).subscribe((data) => {
        this.category = (data.updateCategory)
        alert(data.message)
        this._router.navigate(['/dashboard', 'categories']).then()
      })
    } else {
      alert('p')
    }
  }
}


