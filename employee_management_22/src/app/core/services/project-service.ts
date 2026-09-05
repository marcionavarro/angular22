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

  createProject(obj: NewProjectModel): Observable<NewProjectModel> {
    return this.http.post<NewProjectModel>(
      environment.API_URL + GlobalConstant.API_METHOD.CREATE_NEW_PROJECT,
      obj,
    );
  }
}
