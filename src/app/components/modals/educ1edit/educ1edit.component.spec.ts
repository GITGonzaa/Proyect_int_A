import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Educ1editComponent } from './educ1edit.component';

describe('Educ1editComponent', () => {
  let component: Educ1editComponent;
  let fixture: ComponentFixture<Educ1editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Educ1editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Educ1editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
