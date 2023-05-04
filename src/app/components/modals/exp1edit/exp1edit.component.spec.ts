import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp1editComponent } from './exp1edit.component';

describe('Exp1editComponent', () => {
  let component: Exp1editComponent;
  let fixture: ComponentFixture<Exp1editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exp1editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exp1editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
