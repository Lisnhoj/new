import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lgtv2Component } from './lgtv2.component';

describe('Lgtv2Component', () => {
  let component: Lgtv2Component;
  let fixture: ComponentFixture<Lgtv2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lgtv2Component]
    });
    fixture = TestBed.createComponent(Lgtv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
