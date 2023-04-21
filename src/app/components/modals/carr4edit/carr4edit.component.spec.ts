import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carr4editComponent } from './carr4edit.component';

describe('Carr4editComponent', () => {
  let component: Carr4editComponent;
  let fixture: ComponentFixture<Carr4editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carr4editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carr4editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
