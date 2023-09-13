import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsungtv1Component } from './samsungtv1.component';

describe('Samsungtv1Component', () => {
  let component: Samsungtv1Component;
  let fixture: ComponentFixture<Samsungtv1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Samsungtv1Component]
    });
    fixture = TestBed.createComponent(Samsungtv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
