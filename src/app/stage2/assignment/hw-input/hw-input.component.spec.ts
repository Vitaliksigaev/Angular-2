import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwInputComponent } from './hw-input.component';

describe('HwInputComponent', () => {
  let component: HwInputComponent;
  let fixture: ComponentFixture<HwInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
