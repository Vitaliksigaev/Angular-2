import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp11Component } from './comp11.component';

describe('Comp11Component', () => {
  let component: Comp11Component;
  let fixture: ComponentFixture<Comp11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
