import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Educ2editComponent } from './educ2edit.component';

describe('Educ2editComponent', () => {
  let component: Educ2editComponent;
  let fixture: ComponentFixture<Educ2editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Educ2editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Educ2editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
