import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp2editComponent } from './exp2edit.component';

describe('Exp2editComponent', () => {
  let component: Exp2editComponent;
  let fixture: ComponentFixture<Exp2editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exp2editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exp2editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
