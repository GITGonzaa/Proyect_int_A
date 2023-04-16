import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosobremidashComponent } from './infosobremidash.component';

describe('InfosobremidashComponent', () => {
  let component: InfosobremidashComponent;
  let fixture: ComponentFixture<InfosobremidashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosobremidashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosobremidashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
