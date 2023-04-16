import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsdashComponent } from './skillsdash.component';

describe('SkillsdashComponent', () => {
  let component: SkillsdashComponent;
  let fixture: ComponentFixture<SkillsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
