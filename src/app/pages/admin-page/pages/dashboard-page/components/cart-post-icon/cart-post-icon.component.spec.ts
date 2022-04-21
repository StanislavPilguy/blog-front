import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPostIconComponent } from './cart-post-icon.component';

describe('CartPostIconComponent', () => {
  let component: CartPostIconComponent;
  let fixture: ComponentFixture<CartPostIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPostIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPostIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
