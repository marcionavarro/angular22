import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCrud } from './client-crud';

describe('ClientCrud', () => {
  let component: ClientCrud;
  let fixture: ComponentFixture<ClientCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
