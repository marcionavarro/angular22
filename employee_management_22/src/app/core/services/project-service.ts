import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { GlobalConstant } from '../globalConstant/Global.constant';
import { Observable } from 'rxjs';
import { IProject, NewProjectModel } from '../model/interfaces/User.Model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  http = inject(HttpClient);

  getAllProjetct(): Observable<IProject[]> {
    return this.http.get<IProject[]>(
      environment.API_URL + GlobalConstant.API_METHOD.GET_ALL_PROJECTS,
    );
  }

  getProjectId(id: number): Observable<IProject> {
    return this.http.get<IProject>(
      environment.API_URL + GlobalConstant.API_METHOD.GET_PROJECT + id,
    );
  }

  createProject(obj: NewProjectModel): Observable<NewProjectModel> {
    return this.http.post<NewProjectModel>(
      environment.API_URL + GlobalConstant.API_METHOD.CREATE_NEW_PROJECT,
      obj,
    );
  }

  updateProject(id: number, obj: NewProjectModel) {
    return this.http.put<NewProjectModel>(
      environment.API_URL + GlobalConstant.API_METHOD.UPDATE_PROJECT + id,
      obj,
    );
  }

  deleteProject(id: number) {
    return this.http.delete<IProject>(
      environment.API_URL + GlobalConstant.API_METHOD.DELETE_PROJECT + id,
    );
  }

  getAllProjectEmployees() {
    return this.http.get<any[]>(
      environment.API_URL + GlobalConstant.API_METHOD.GET_ALL_PROJECT_EMPLOYEES,
    );
  }

  assignEmployee(obj: any): Observable<any> {
    return this.http.post<any>(
      environment.API_URL + GlobalConstant.API_METHOD.CREATE_PROJECT_EMPLOYEE,
      obj,
    );
  }

  deleteAssignEmployee(id: number) {
    return this.http.delete<any>(
      environment.API_URL + GlobalConstant.API_METHOD.DELETE_PROJECT_EMPLOYEE + id,
    );
  }
}
