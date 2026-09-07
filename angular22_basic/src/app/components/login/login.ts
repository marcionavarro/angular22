import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  // loginObj: LoginModel = new LoginModel();
  loginObj: LoginModelApi = new LoginModelApi();
  router = inject(Router);

  masterService = inject(Master);

  onLogin() {
    debugger;
    this.masterService.loginUser(this.loginObj).subscribe({
      next: (res: any) => {
        debugger;
        localStorage.setItem('angular22User', res.data.emailId);
        localStorage.setItem('loginToken', res.data.token);
        this.router.navigateByUrl('/admin/databinding');
      },
      error: (err: any) => {
        debugger;
        if (err.status == 401) {
          alert('Credenciais incorretas');
        } else {
          alert('Erro na API');
        }
      },
    });
    /* if (this.loginObj.email == 'admin@email.com' && this.loginObj.senha == 'admin123') {
      localStorage.setItem('angular22User', this.loginObj.email);
      this.router.navigateByUrl('/admin/databinding');
    } else {
      alert('Credenciais incorretas');
    } */
  }
}

class LoginModel {
  email: string;
  senha: string;

  constructor() {
    ((this.email = ''), (this.senha = ''));
  }
}

export class LoginModelApi {
  EmailId: string;
  Password: string;

  constructor() {
    this.EmailId = '';
    this.Password = '';
  }
}
