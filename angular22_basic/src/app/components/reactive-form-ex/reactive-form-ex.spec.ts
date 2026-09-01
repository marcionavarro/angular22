import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormEx } from './reactive-form-ex';

describe('ReactiveFormEx', () => {
  let component: ReactiveFormEx;
  let fixture: ComponentFixture<ReactiveFormEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormEx],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
