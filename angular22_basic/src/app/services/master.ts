import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { LoginModelApi } from '../components/login/login';

export interface IClient {
  clientId: number;
  clientName: string;
  businessName: string;
  contactPerson: string;
  contactNo: string;
  altContactNo: string;
  email: string;
  createdDate: Date;
  logo: string;
}

export interface IClientGet {
  message?: string;
  result?: boolean;
  data: IClient[];
}

@Service()
export class Master {
  loggedUser: string = '';
  http = inject(HttpClient);

  getClients() {
    return this.http.get<IClientGet>(
      'https://api.freeprojectapi.com/api/SmartParking/GetAllClients',
    );
  }

  saveClient(client: IClient) {
    return this.http.post<IClientGet>(
      'https://api.freeprojectapi.com/api/SmartParking/AddClient',
      client,
    );
  }

  updateClient(client: IClient) {
    return this.http.put<IClientGet>(
      'https://api.freeprojectapi.com/api/SmartParking/UpdateClient',
      client,
    );
  }

  deleteClient(clientId: number) {
    return this.http.post<IClientGet>(
      `https://api.freeprojectapi.com/api/SmartParking/DeleteClient?id=${clientId}`,
      {},
    );
  }

  getFormatedCardNo(cardNo: string) {
    debugger;
    const asterisctDat = '**** **** ****';
    return asterisctDat + ' ' + cardNo.substring(12);
  }

  loginUser(obj: LoginModelApi) {
    return this.http.post<LoginModelApi>('https://api.freeprojectapi.com/api/UserApp/login', obj);
  }
}
