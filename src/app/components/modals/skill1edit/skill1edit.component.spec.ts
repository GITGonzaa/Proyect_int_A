import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skill1editComponent } from './skill1edit.component';

describe('Skill1editComponent', () => {
  let component: Skill1editComponent;
  let fixture: ComponentFixture<Skill1editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Skill1editComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skill1editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
