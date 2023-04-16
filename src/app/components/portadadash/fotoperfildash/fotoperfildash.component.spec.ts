import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoperfildashComponent } from './fotoperfildash.component';

describe('FotoperfildashComponent', () => {
  let component: FotoperfildashComponent;
  let fixture: ComponentFixture<FotoperfildashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoperfildashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoperfildashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
