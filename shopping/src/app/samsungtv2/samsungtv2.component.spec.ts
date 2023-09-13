import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsungtv2Component } from './samsungtv2.component';

describe('Samsungtv2Component', () => {
  let component: Samsungtv2Component;
  let fixture: ComponentFixture<Samsungtv2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Samsungtv2Component]
    });
    fixture = TestBed.createComponent(Samsungtv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
