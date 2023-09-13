import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lgtv1Component } from './lgtv1.component';

describe('Lgtv1Component', () => {
  let component: Lgtv1Component;
  let fixture: ComponentFixture<Lgtv1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lgtv1Component]
    });
    fixture = TestBed.createComponent(Lgtv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
