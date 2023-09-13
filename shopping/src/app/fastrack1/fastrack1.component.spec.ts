import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fastrack1Component } from './fastrack1.component';

describe('Fastrack1Component', () => {
  let component: Fastrack1Component;
  let fixture: ComponentFixture<Fastrack1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Fastrack1Component]
    });
    fixture = TestBed.createComponent(Fastrack1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
