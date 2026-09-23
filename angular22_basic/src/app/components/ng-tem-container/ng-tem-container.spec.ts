import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgTemContainer } from './ng-tem-container';

describe('NgTemContainer', () => {
  let component: NgTemContainer;
  let fixture: ComponentFixture<NgTemContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(NgTemContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
