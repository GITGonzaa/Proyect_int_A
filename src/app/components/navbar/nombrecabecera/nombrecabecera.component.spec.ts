import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombrecabeceraComponent } from './nombrecabecera.component';

describe('NombrecabeceraComponent', () => {
  let component: NombrecabeceraComponent;
  let fixture: ComponentFixture<NombrecabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombrecabeceraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombrecabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
