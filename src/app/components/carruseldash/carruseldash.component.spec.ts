import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruseldashComponent } from './carruseldash.component';

describe('CarruseldashComponent', () => {
  let component: CarruseldashComponent;
  let fixture: ComponentFixture<CarruseldashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruseldashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruseldashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
