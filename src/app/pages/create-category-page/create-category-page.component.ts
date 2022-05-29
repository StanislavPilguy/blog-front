import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICategories} from "../../interfaces/iCategories";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../services/categories.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-create-category-page',
  templateUrl: './create-category-page.component.html',
})
export class CreateCategoryPageComponent implements OnInit, OnDestroy {
  // @ts-ignore
  private category: ICategories = {
    name: '',
  }
  public aSub!: Subscription;
  public form!:  FormGroup;
  public message: string = '';
  title: string = 'Create category';

  constructor(
    private _categoriesService: CategoriesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    })
  }

  get name() {
    return this.form.get('name')
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit(): void {
    this.category.name = this.form.value.name;
    this.form.disable()

  }

  onCategorySubmit() {
    this.category.name = this.form.value.name;
    this.form.disable()
    this._categoriesService.createCategory(this.category).subscribe(
      () => {
        this.form.reset();
      },
      (error) => {
        if (error.error.message) {
          this.message = error.error.message;
        }
      }
    )
  }
}
