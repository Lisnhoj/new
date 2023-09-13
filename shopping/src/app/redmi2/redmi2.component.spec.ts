import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Redmi2Component } from './redmi2.component';

describe('Redmi2Component', () => {
  let component: Redmi2Component;
  let fixture: ComponentFixture<Redmi2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Redmi2Component]
    });
    fixture = TestBed.createComponent(Redmi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
