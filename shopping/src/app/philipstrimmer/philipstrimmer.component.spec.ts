import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilipstrimmerComponent } from './philipstrimmer.component';

describe('PhilipstrimmerComponent', () => {
  let component: PhilipstrimmerComponent;
  let fixture: ComponentFixture<PhilipstrimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhilipstrimmerComponent]
    });
    fixture = TestBed.createComponent(PhilipstrimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
