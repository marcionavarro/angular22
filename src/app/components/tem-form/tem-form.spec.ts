import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemForm } from './tem-form';

describe('TemForm', () => {
  let component: TemForm;
  let fixture: ComponentFixture<TemForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TemForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
