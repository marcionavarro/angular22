import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IUserModel } from '../../models/Uses.Model';
import { Master } from '../../service/master';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  // Dentro da classe Navbar:
  loggedUserData = signal<IUserModel | null>(null);

  router = inject(Router);
  masterService = inject(Master);

  constructor() {
    this.readLoggedUserData();
    this.masterService.loginSubject$.subscribe({
      next: () => {
        this.readLoggedUserData();
      },
    });
  }

  readLoggedUserData() {
    const localData = localStorage.getItem('bankloanuser');
    this.loggedUserData.set(localData ? (JSON.parse(localData) as IUserModel) : null);
  }

  onLogOff() {
    localStorage.removeItem('bankloanuser');
    this.loggedUserData.set(null);
    this.router.navigate(['/home']);
  }
}
