import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vivo1Component } from './vivo1.component';

describe('Vivo1Component', () => {
  let component: Vivo1Component;
  let fixture: ComponentFixture<Vivo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vivo1Component]
    });
    fixture = TestBed.createComponent(Vivo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
