import { Component, inject } from '@angular/core';
import { UserLoginModel } from '../../models/Uses.Model';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Master } from '../../service/master';
import { IApiResponseModel } from '../../models/API.Response';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginObj: UserLoginModel = new UserLoginModel();
  masterService = inject(Master);
  router = inject(Router);

  onLoginUser() {
    debugger;
    this.masterService.onLogin(this.loginObj).subscribe({
      next: (res: IApiResponseModel) => {
        if (res.result) {
          alert('Usuário encontrado, realizando login');
          localStorage.setItem('bankloanuser', JSON.stringify(res.data));
          this.masterService.loginSubject$.next();
          this.router.navigateByUrl('/home');
        } else {
          alert(res.message);
        }
      },
      error: () => {},
    });
  }
}
