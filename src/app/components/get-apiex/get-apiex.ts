import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-get-apiex',
  imports: [],
  templateUrl: './get-apiex.html',
  styleUrl: './get-apiex.css',
})
export class GetAPIEx {
  http = inject(HttpClient); //16

  userList: WritableSignal<any[]> = signal([]);
  photosList: WritableSignal<any[]> = signal([]);
  vendorList: WritableSignal<any[]> = signal([]);

  constructor() {
    this.getAllUsers();
    this.getPhotos();
    this.getAllVendors();
  }

  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res: any) => {
        debugger;
        this.userList.set(res);
      },
      error: (erro: any) => {},
    });
  }

  getPhotos() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next: (response: any) => {
        this.photosList.set(response);
      },
      error: (erro: any) => {},
    });
  }

  getAllVendors() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe({
      next: (res: any) => {
        this.vendorList.set(res);
      },
    });
  }
}
