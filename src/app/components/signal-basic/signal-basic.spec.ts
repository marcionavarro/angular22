import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBasic } from './signal-basic';

describe('SignalBasic', () => {
  let component: SignalBasic;
  let fixture: ComponentFixture<SignalBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalBasic],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalBasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
