import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../core/model/classes/Employee.model';
import { EmployeeService } from '../../core/services/employee-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeList$: Observable<EmployeeModel[]> = new Observable<EmployeeModel[]>();

  employeeService = inject(EmployeeService);

  constructor() {
    this.employeeList$ = this.employeeService.getAllEmployee();
  }

  onDeleteEmployee(employeeId: number) {
    const isDeleteEmployee = confirm(`Deseja deletar o funcionário ?`);
    if (isDeleteEmployee) {
      this.employeeService.onDeleteEmployee(employeeId).subscribe({
        next: () => {
          alert(`Funcionário excluído com sucesso!`);
          this.employeeService.getAllEmployee();
        },
        error: (err: any) => console.error('Erro ao excluir funcionário:', err),
      });
    } else {
    }
  }
}
