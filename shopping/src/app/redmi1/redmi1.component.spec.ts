import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Redmi1Component } from './redmi1.component';

describe('Redmi1Component', () => {
  let component: Redmi1Component;
  let fixture: ComponentFixture<Redmi1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Redmi1Component]
    });
    fixture = TestBed.createComponent(Redmi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
