import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { IApiResponseModel } from '../../models/API.Response';
import { ILoanApplicationList, IUserModel } from '../../models/Uses.Model';
import { Master } from '../../service/master';
import { RouterLink } from '@angular/router';
import type { ApplicationStatus } from './application-status';

@Component({
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, RouterLink],
  selector: 'app-application-list',
  styleUrl: './application-list.css',
  templateUrl: './application-list.html',
})
export class ApplicationList {
  loggedUser!: IUserModel;
  applicationList = signal<ILoanApplicationList[]>([]);
  filteredApplications = signal<ILoanApplicationList[]>([]);
  masterService = inject(Master);
  expandedCard: number | null = null;
  oldestFirst = false;

  constructor() {
    const local = localStorage.getItem('bankloanuser');
    if (local != null) this.loggedUser = JSON.parse(local);

    if (this.loggedUser.role == 'Customer') {
      this.getCustomerApplications();
    } else {
      this.getAssignedApplications();
    }
  }

  getCustomerApplications() {
    this.masterService.getMyApplications(this.loggedUser.userId).subscribe({
      next: (res: IApiResponseModel) => {
        this.applicationList.set(res.data);
        this.filteredApplications.set(this.sortByDate(res.data));
      },
    });
  }

  getAssignedApplications() {
    this.masterService.getAssignedApplications(this.loggedUser.userId).subscribe({
      next: (res: IApiResponseModel) => {
        this.applicationList.set(res.data);
        this.filteredApplications.set(this.sortByDate(res.data));
      },
    });
  }

  filterApplications(searchTerm: string, selectedStatus: string): void {
    const search = searchTerm.trim().toLowerCase();
    const status = this.normalizeStatus(selectedStatus);

    const filtered = this.applicationList().filter((application) => {
      return (
        this.matchesSearch(application, search) &&
        this.matchesStatus(application.applicationStatus, status)
      );
    });

    this.filteredApplications.set(this.sortByDate(filtered));
  }

  sortApplications(oldestFirst: boolean): void {
    this.oldestFirst = oldestFirst;
    this.filteredApplications.set(this.sortByDate(this.filteredApplications()));
  }

  private sortByDate(applications: ILoanApplicationList[]): ILoanApplicationList[] {
    const direction = this.oldestFirst ? 1 : -1;

    return [...applications].sort((first, second) => {
      const firstDate = Date.parse(first.dateApplied ?? '');
      const secondDate = Date.parse(second.dateApplied ?? '');

      if (Number.isNaN(firstDate)) return Number.isNaN(secondDate) ? 0 : 1;
      if (Number.isNaN(secondDate)) return -1;

      return (firstDate - secondDate) * direction;
    });
  }

  private matchesSearch(application: ILoanApplicationList, search: string): boolean {
    if (!search) return true;

    const normalizedSearch = this.normalizeCardNumber(search);
    const normalizedCard = this.normalizeCardNumber(application.panCard ?? '');

    const email = (application.email ?? '').toLowerCase();

    const matchesCard = normalizedSearch.length > 0 && normalizedCard.includes(normalizedSearch);

    const matchesEmail = email.includes(search);

    return matchesCard || matchesEmail;
  }

  private matchesStatus(applicationStatus: string, selectedStatus: string): boolean {
    if (!selectedStatus) return true;

    return this.normalizeStatus(applicationStatus) === selectedStatus;
  }

  private normalizeCardNumber(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  private normalizeStatus(status: string): string {
    const normalizedStatus = status.trim().toLowerCase();
    return normalizedStatus === 'approve' ? 'approved' : normalizedStatus;
  }

  changeStatus(panNo: string, status: string) {
    this.masterService.changeStatus(panNo, status).subscribe({
      next: (res: IApiResponseModel) => {
        if (res.result == true) {
          alert('Status atualizado');
          return;
        }

        alert('Não há nenhum pedido de empréstimo ativo com este número do cartão.');
      },
    });
  }

  showDetails(id: number) {
    console.log(id);
    this.expandedCard = this.expandedCard === id ? null : id;
  }

  mapperStatus(status: string): string {
    return this.statusMap[status as ApplicationStatus] ?? status;
  }

  private readonly statusMap: Record<ApplicationStatus, string> = {
    New: 'Novo',
    Approve: 'Aprovado',
    Reject: 'Rejeitado',
    Closed: 'Encerrado',
  };
}
