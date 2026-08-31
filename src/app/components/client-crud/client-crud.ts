import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IClient {
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

interface IClientGet {
  message?: string;
  result?: boolean;
  data: IClient[];
}

@Component({
  selector: 'app-client-crud',
  imports: [FormsModule, DatePipe],
  templateUrl: './client-crud.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './client-crud.css',
})
export class ClientCrud {
  http = inject(HttpClient);
  clientList: WritableSignal<IClient[]> = signal([]);
  newClientObj: IClient = {
    clientId: 0,
    clientName: '',
    businessName: '',
    contactPerson: '',
    contactNo: '',
    altContactNo: '',
    email: '',
    createdDate: new Date(),
    logo: '',
  };

  constructor() {
    this.getAllClients();
  }

  getAllClients() {
    this.http
      .get<IClientGet>('https://api.freeprojectapi.com/api/SmartParking/GetAllClients')
      .subscribe({
        next: (res) => this.clientList.set(res.data),
        error: (err) => console.log(err),
      });
  }

  onSaveClient() {
    debugger;
    this.http
      .post<IClientGet>(
        'https://api.freeprojectapi.com/api/SmartParking/AddClient',
        this.newClientObj,
      )
      .subscribe({
        next: (res) => {
          debugger;
          if (res.result) {
            alert('cliente criado com sucesso!');
            this.getAllClients();
          } else {
            alert(res.message);
          }
        },
      });
  }

  onEditClient(data: IClient) {
    this.newClientObj = data;
  }

  onUpdateClient() {
    this.http
      .post<IClientGet>(
        'https://api.freeprojectapi.com/api/SmartParking/UpdateClient',
        this.newClientObj,
      )
      .subscribe({
        next: (res) => {
          if (res.result) {
            alert('cliente atualizado com sucesso!');
            this.getAllClients();
          } else {
            alert(res.message);
          }
        },
      });
  }

  onDeleteClient(clientId: number) {
    const isConfirm = confirm('Tem certeza que deseja excluir o cliente: ' + clientId);
    if (isConfirm) {
      this.http
        .post<IClientGet>(
          'https://api.freeprojectapi.com/api/SmartParking/DeleteClient?id=' + clientId,
          {},
        )
        .subscribe({
          next: (res) => {
            if (res.result) {
              alert('cliente deletado com sucesso!');
              this.getAllClients();
            } else {
              alert(res.message);
            }
          },
        });
    }
  }

  // https://api.freeprojectapi.com/api/SmartParking/DeleteClient
}
