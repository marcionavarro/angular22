import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../service/master';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-register-customer',
  styleUrl: './register-customer.css',
  templateUrl: './register-customer.html',
})
export class RegisterCustomer {
  newUserObj: any = {
    userId: 0,
    userName: '',
    emailId: '',
    fullName: '',
    password: '',
  };

  masterService = inject(Master);
  router = inject(Router);

  onSaveCustomer() {
    this.masterService.onRegisterCustomer(this.newUserObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          alert(
            'Cadastro de cliente realizado com sucesso. Utilize a página de login para acessar sua conta agora.',
          );
          this.router.navigateByUrl('/login');
        } else {
          alert('res.message');
        }
      },
      error: (err: any) => {
        alert('Erro na API');
      },
    });
  }
}
