import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fastrack2Component } from './fastrack2.component';

describe('Fastrack2Component', () => {
  let component: Fastrack2Component;
  let fixture: ComponentFixture<Fastrack2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Fastrack2Component]
    });
    fixture = TestBed.createComponent(Fastrack2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
