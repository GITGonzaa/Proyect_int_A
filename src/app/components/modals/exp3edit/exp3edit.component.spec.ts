import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp3editComponent } from './exp3edit.component';

describe('Exp3editComponent', () => {
  let component: Exp3editComponent;
  let fixture: ComponentFixture<Exp3editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exp3editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exp3editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
