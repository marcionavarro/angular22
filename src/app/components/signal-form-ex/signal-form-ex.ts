import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required, schema } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-ex',
  imports: [FormField],
  templateUrl: './signal-form-ex.html',
  styleUrl: './signal-form-ex.css',
})
export class SignalFormEx {
  employeeModel = signal({
    empName: '',
    empCity: '',
    empState: '',
  });

  employeeForm = form(this.employeeModel, (schema) => {
    (required(schema.empName, { message: 'Nome é obrigatório' }),
      minLength(schema.empName, 4, { message: 'Min 4 caracteres' }),
      required(schema.empCity, { message: 'Cidade é obrigatória' }));
  });

  onSaveEmp() {
    const formValue = this.employeeForm().value();
    debugger;
  }
}
