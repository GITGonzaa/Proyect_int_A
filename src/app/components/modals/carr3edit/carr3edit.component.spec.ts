import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carr3editComponent } from './carr3edit.component';

describe('Carr3editComponent', () => {
  let component: Carr3editComponent;
  let fixture: ComponentFixture<Carr3editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carr3editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carr3editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
