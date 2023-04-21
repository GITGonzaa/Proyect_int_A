import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carr1editComponent } from './carr1edit.component';

describe('Carr1editComponent', () => {
  let component: Carr1editComponent;
  let fixture: ComponentFixture<Carr1editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carr1editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carr1editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
