import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExp } from './directive-exp';

describe('DirectiveExp', () => {
  let component: DirectiveExp;
  let fixture: ComponentFixture<DirectiveExp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveExp],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveExp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
