import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ILoanApplication, UserLoginModel } from '../models/Uses.Model';
import { Observable, Subject, SubjectLike } from 'rxjs';
import { IApiResponseModel } from '../models/API.Response';

@Service()
export class Master {
  http = inject(HttpClient);
  apiUrl: string = 'https://projectapi.gerasim.in/api/BankLoan';
  loginSubject$: Subject<void> = new Subject<void>();

  onRegisterCustomer(obj: any) {
    return this.http.post(`${this.apiUrl}/RegisterCustomer`, obj);
  }

  onLogin(loginObj: UserLoginModel): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(`${this.apiUrl}/login`, loginObj);
  }

  saveLoanApplication(obj: ILoanApplication): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(`${this.apiUrl}/AddNewApplication`, obj);
  }

  getMyApplications(id: number): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(`${this.apiUrl}/GetMyApplications?customerId=${id}`);
  }

  getAssignedApplications(id: number): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      `${this.apiUrl}/GetApplicationAssigneedToMe?bankEmployeeId=${id}`,
    );
  }

  changeStatus(panNo: string, status: string): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      `${this.apiUrl}/CheckApplicationStatus?panNo=${panNo}&status=${status}`,
    );
  }
}
