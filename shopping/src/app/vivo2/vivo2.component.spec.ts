import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vivo2Component } from './vivo2.component';

describe('Vivo2Component', () => {
  let component: Vivo2Component;
  let fixture: ComponentFixture<Vivo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vivo2Component]
    });
    fixture = TestBed.createComponent(Vivo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
