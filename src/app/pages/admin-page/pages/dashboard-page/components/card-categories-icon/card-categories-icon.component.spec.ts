import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategoriesIconComponent } from './card-categories-icon.component';

describe('CardCategoriesIconComponent', () => {
  let component: CardCategoriesIconComponent;
  let fixture: ComponentFixture<CardCategoriesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCategoriesIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCategoriesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
