import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducaciondashComponent } from './educaciondash.component';

describe('EducaciondashComponent', () => {
  let component: EducaciondashComponent;
  let fixture: ComponentFixture<EducaciondashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducaciondashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducaciondashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
