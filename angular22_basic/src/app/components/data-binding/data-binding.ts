import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './data-binding.css',
})
export class DataBinding implements OnInit {
  productName: string = 'Headphone';
  productPrice: number = 1200;
  maxAllowedQuantity: number = 5;
  isProductActive = false;

  myDynamicType = 'button';

  http = inject(HttpClient);
  userList = signal<any[]>([]);

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get('https://api.freeprojectapi.com/api/UserApp/GetAllUsers').subscribe({
      next: (res: any) => (this.userList = res.data),
    });
  }

  showWelcomeText() {
    alert('Bem vindo v22');
  }

  onDropdownChange() {
    alert('Dropdown has changed');
  }

  onMouseEnter() {
    console.log('Mouse Enytered');
  }

  onMouseLeft() {
    console.log('Mouse Left Div');
  }
}
