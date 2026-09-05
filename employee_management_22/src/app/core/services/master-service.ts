import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IApiResponseModel } from '../model/interfaces/User.Model';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  getAllParenetDepartments(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(environment.API_URL + '/GetParentDepartment');
  }

  getAllChildDepartments(id: number): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      environment.API_URL + '/GetChildDepartmentByParentId?deptId=' + id,
    );
  }
}
