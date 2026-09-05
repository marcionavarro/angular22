import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmployeeModel } from '../model/classes/Employee.model';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  http = inject(HttpClient);

  constructor() {}

  onCreateEmployee(obj: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(environment.API_URL + '/CreateEmployee', obj);
  }
}
