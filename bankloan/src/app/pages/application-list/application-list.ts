import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { IApiResponseModel } from '../../models/API.Response';
import { ILoanApplicationList, IUserModel } from '../../models/Uses.Model';
import { Master } from '../../service/master';
import { RouterLink } from '@angular/router';

@Component({
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, RouterLink],
  selector: 'app-application-list',
  styleUrl: './application-list.css',
  templateUrl: './application-list.html',
})
export class ApplicationList {
  loggedUser!: IUserModel;
  applicationList = signal<ILoanApplicationList[]>([]);
  masterService = inject(Master);

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
      next: (res: IApiResponseModel) => this.applicationList.set(res.data),
    });
  }

  getAssignedApplications() {
    this.masterService.getAssignedApplications(this.loggedUser.userId).subscribe({
      next: (res: IApiResponseModel) => this.applicationList.set(res.data),
    });
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
}
