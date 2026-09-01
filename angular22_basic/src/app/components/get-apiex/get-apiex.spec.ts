import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAPIEx } from './get-apiex';

describe('GetAPIEx', () => {
  let component: GetAPIEx;
  let fixture: ComponentFixture<GetAPIEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAPIEx],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAPIEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
