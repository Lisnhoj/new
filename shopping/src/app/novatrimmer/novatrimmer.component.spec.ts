import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovatrimmerComponent } from './novatrimmer.component';

describe('NovatrimmerComponent', () => {
  let component: NovatrimmerComponent;
  let fixture: ComponentFixture<NovatrimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovatrimmerComponent]
    });
    fixture = TestBed.createComponent(NovatrimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
