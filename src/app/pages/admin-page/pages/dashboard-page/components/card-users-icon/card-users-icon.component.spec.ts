import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsersIconComponent } from './card-users-icon.component';

describe('CardUsersIconComponent', () => {
  let component: CardUsersIconComponent;
  let fixture: ComponentFixture<CardUsersIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUsersIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUsersIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
