import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { finalize, Observable } from 'rxjs';
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

  isLoading = signal(false);

  constructor() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.isLoading.set(true);

    this.employeeList$ = this.employeeService
      .getAllEmployee()
      .pipe(finalize(() => this.isLoading.set(false)));
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
    }
  }
}
