import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tem-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './tem-form.html',
  styleUrl: './tem-form.css',
})
export class TemForm {
  companyObj: any = {
    companyId: 0,
    companyName: '',
    pinCode: '',
    address: '',
    phone: '',
  };

  onSaveCompany(fromRef: NgForm) {
    debugger;
    if (fromRef.invalid) {
      alert('Preencha todos os campos obrigatórios');
      debugger;
    } else {
      confirm('Deseja salvar os dados da empresa?');
      const formValue = this.companyObj;
    }
  }

  onPinchange() {
    console.log('Pin code changed');
  }
}
