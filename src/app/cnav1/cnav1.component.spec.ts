import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnav1Component } from './cnav1.component';

describe('Cnav1Component', () => {
  let component: Cnav1Component;
  let fixture: ComponentFixture<Cnav1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cnav1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cnav1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
