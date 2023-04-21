import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carr2editComponent } from './carr2edit.component';

describe('Carr2editComponent', () => {
  let component: Carr2editComponent;
  let fixture: ComponentFixture<Carr2editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carr2editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carr2editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
