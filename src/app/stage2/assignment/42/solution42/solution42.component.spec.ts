import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution42Component } from './solution42.component';

describe('Solution42Component', () => {
  let component: Solution42Component;
  let fixture: ComponentFixture<Solution42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solution42Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solution42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
