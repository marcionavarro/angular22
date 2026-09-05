import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IUser } from '../../core/model/interfaces/User.Model';
import { GlobalConstant } from '../../core/globalConstant/Global.constant';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isSidebarOpen: boolean = true;
  loggedUserData!: IUser;
  router = inject(Router);

  constructor() {
    const localData = localStorage.getItem(GlobalConstant.LOGIN_LOCAL_KEY);
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  onLogout() {
    localStorage.removeItem(GlobalConstant.LOGIN_LOCAL_KEY);
    this.router.navigate(['/login']);
  }
}
