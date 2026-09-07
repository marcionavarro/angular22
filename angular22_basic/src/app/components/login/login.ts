import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginObj: LoginModel = new LoginModel();
  router = inject(Router);

  onLogin() {
    debugger;
    if (this.loginObj.email == 'admin@email.com' && this.loginObj.senha == 'admin123') {
      localStorage.setItem('angular22User', this.loginObj.email);
      this.router.navigateByUrl('/admin/databinding');
    } else {
      alert('Credenciais incorretas');
    }
  }
}

class LoginModel {
  email: string;
  senha: string;

  constructor() {
    ((this.email = ''), (this.senha = ''));
  }
}
