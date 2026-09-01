import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalFormEx } from './signal-form-ex';

describe('SignalFormEx', () => {
  let component: SignalFormEx;
  let fixture: ComponentFixture<SignalFormEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalFormEx],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalFormEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
