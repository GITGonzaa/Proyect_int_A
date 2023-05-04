import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadadashComponent } from './portadadash.component';

describe('PortadadashComponent', () => {
  let component: PortadadashComponent;
  let fixture: ComponentFixture<PortadadashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadadashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadadashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
