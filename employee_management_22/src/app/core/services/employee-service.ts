import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmployeeModel } from '../model/classes/Employee.model';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { GlobalConstant } from '../globalConstant/Global.constant';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  http = inject(HttpClient);

  constructor() {}

  getAllEmployee(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(
      environment.API_URL + GlobalConstant.API_METHOD.GET_ALL_EMPLOYEE,
    );
  }

  getEmployeeById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(
      environment.API_URL + GlobalConstant.API_METHOD.GET_EMPLOYEE_BY_ID + id,
    );
  }

  onCreateEmployee(obj: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(
      environment.API_URL + GlobalConstant.API_METHOD.CREATE_EMPLOYEE,
      obj,
    );
  }

  onUpdateEmployee(id: number, obj: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(
      environment.API_URL + GlobalConstant.API_METHOD.UPDATE_EMPLOYEE + id,
      obj,
    );
  }

  onDeleteEmployee(id: number): Observable<EmployeeModel> {
    return this.http.delete<EmployeeModel>(
      environment.API_URL + GlobalConstant.API_METHOD.DELETE_EMPLOYEE + id,
    );
  }
}
