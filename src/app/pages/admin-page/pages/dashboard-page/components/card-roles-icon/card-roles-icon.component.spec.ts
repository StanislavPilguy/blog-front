import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRolesIconComponent } from './card-roles-icon.component';

describe('CardRolesIconComponent', () => {
  let component: CardRolesIconComponent;
  let fixture: ComponentFixture<CardRolesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRolesIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRolesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
