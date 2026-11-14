import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ILoanApplicationList } from '../../models/Uses.Model';
import { Master } from '../../service/master';
import { ApplicationList } from './application-list';

registerLocaleData(localePt);

describe('ApplicationList', () => {
  let component: ApplicationList;
  let fixture: ComponentFixture<ApplicationList>;
  const applications: ILoanApplicationList[] = [
    {
      applicantID: 1,
      dateApplied: '2026-11-12',
      applicationStatus: 'New',
      fullName: 'Ana Silva',
      email: 'ana@example.com',
      employmentStatus: 'Employed',
      customerPhone: '11999999999',
      assignedToBankEmployee: 'Atendente',
      panCard: 'card-number-001',
    },
    {
      applicantID: 2,
      dateApplied: '2026-11-11',
      applicationStatus: 'Approve',
      fullName: 'Bruno Lima',
      email: 'bruno@example.com',
      employmentStatus: 'Employed',
      customerPhone: '11888888888',
      assignedToBankEmployee: 'Atendente',
      panCard: '1234 5678-9012',
    },
    {
      applicantID: 3,
      dateApplied: '2026-11-10',
      applicationStatus: 'Reject',
      fullName: 'Carla Souza',
      email: 'carla@example.com',
      employmentStatus: 'Self-employed',
      customerPhone: '11777777777',
      assignedToBankEmployee: 'Atendente',
      panCard: 'card-number-003',
    },
  ];

  beforeEach(async () => {
    localStorage.setItem('bankloanuser', JSON.stringify({ userId: 1, role: 'Customer' }));

    await TestBed.configureTestingModule({
      imports: [ApplicationList],
      providers: [
        provideRouter([]),
        {
          provide: Master,
          useValue: {
            getMyApplications: () => of({ data: applications }),
            getAssignedApplications: () => of({ data: applications }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters by card number and status only after clicking the filter button', () => {
    fixture.detectChanges();
    const search = fixture.nativeElement.querySelector('#application-search') as HTMLInputElement;
    const status = fixture.nativeElement.querySelector('#status-filter') as HTMLSelectElement;
    const filterButton = fixture.nativeElement.querySelector('.filter-button') as HTMLButtonElement;

    search.value = '123456789012';
    status.value = 'Approved';
    expect(component.filteredApplications()).toHaveLength(3);

    filterButton.click();

    expect(component.filteredApplications().map((application) => application.applicantID)).toEqual([
      2,
    ]);
  });

  it('filters by email regardless of letter case', () => {
    fixture.detectChanges();
    const search = fixture.nativeElement.querySelector('#application-search') as HTMLInputElement;
    const status = fixture.nativeElement.querySelector('#status-filter') as HTMLSelectElement;
    const filterButton = fixture.nativeElement.querySelector('.filter-button') as HTMLButtonElement;

    search.value = 'CARLA@EXAMPLE.COM';
    status.value = '';
    filterButton.click();

    expect(component.filteredApplications().map((application) => application.applicantID)).toEqual([
      3,
    ]);
  });

  it('sorts applications from newest to oldest and back', () => {
    component.filteredApplications.set([...applications].reverse());

    component.sortApplications(false);

    expect(component.filteredApplications().map((application) => application.applicantID)).toEqual([
      1, 2, 3,
    ]);

    component.sortApplications(true);

    expect(component.filteredApplications().map((application) => application.applicantID)).toEqual([
      3, 2, 1,
    ]);
  });

  it('handles API records without an email or card number', () => {
    const applicationWithoutEmail = { ...applications[0] };
    Reflect.deleteProperty(applicationWithoutEmail, 'email');
    component.applicationList.set([applicationWithoutEmail]);

    expect(() => component.filterApplications('not-found', '')).not.toThrow();
    expect(component.filteredApplications()).toHaveLength(0);

    const applicationWithoutCardNumber = { ...applications[2] };
    Reflect.deleteProperty(applicationWithoutCardNumber, 'panCard');
    component.applicationList.set([applicationWithoutCardNumber]);

    expect(() => component.filterApplications('carla@example.com', '')).not.toThrow();
    expect(component.filteredApplications().map((application) => application.applicantID)).toEqual([
      3,
    ]);
  });
});
