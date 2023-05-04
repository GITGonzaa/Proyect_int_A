import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesdashComponent } from './redesdash.component';

describe('RedesdashComponent', () => {
  let component: RedesdashComponent;
  let fixture: ComponentFixture<RedesdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
