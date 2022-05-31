import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

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
  // @ts-ignore
  @ViewChild('list') list: ElementRef;


  constructor(
    private _categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categories$ = this._categoriesService.getCategory();
  }


  onDelete() {
    const inputs = this.list.nativeElement.querySelectorAll('input')
    const checkedInputs = [...inputs].filter((x: any) => x.checked)
    const categoriesIds = checkedInputs.map((x: any) => +x.id)
    if (categoriesIds.length) {
      this._categoriesService.deleteAll(categoriesIds).subscribe(
        () => {
          this.categories$ = this._categoriesService.getCategory();
        }
      )
    }
  }

  onEdit() {

  }
}
