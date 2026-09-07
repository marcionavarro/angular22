import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  loggedUserEmail: string = '';
  router = inject(Router);

  constructor() {
    const loggedData = localStorage.getItem('angular22User');

    if (loggedData != null) {
      this.loggedUserEmail = loggedData;
    }
  }

  onLogOff() {
    localStorage.removeItem('angular22User');
    this.router.navigateByUrl('/login');
  }
}
