import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoeditComponent } from './infoedit.component';

describe('InfoeditComponent', () => {
  let component: InfoeditComponent;
  let fixture: ComponentFixture<InfoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
