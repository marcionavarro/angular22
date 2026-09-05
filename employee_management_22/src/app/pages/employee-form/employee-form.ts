import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { EmployeeModel } from '../../core/model/classes/Employee.model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee-service';
import { MasterService } from '../../core/services/master-service';
import {
  IApiResponseModel,
  IChildDepartment,
  IParentDepartment,
} from '../../core/model/interfaces/User.Model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnInit {
  employeeObj: EmployeeModel = new EmployeeModel();

  employeeService = inject(EmployeeService);
  masterService = inject(MasterService);
  activetedRoute = inject(ActivatedRoute);

  parentDepartmentsList: WritableSignal<IParentDepartment[]> = signal([]);
  childDepartmentsList: WritableSignal<IChildDepartment[]> = signal([]);

  currentEditEmployeeId: number = 0;

  ngOnInit() {
    this.activetedRoute.params.subscribe({
      next: (res: any) => {
        this.currentEditEmployeeId = res.id;
        if (this.currentEditEmployeeId != 0) {
          this.getEmployeeDetails();
        }
      },
      error: (err: any) => console.error('Erro ao obter parâmetros da rota:', err),
    });
    this.getParentDepartments();
  }

  getParentDepartments() {
    this.masterService.getAllParenetDepartments().subscribe({
      next: (res: IApiResponseModel) => {
        this.parentDepartmentsList.set(res.data);
      },
      error: (err: any) => console.error('Erro ao obter departamentos:', err),
    });
  }

  getEmployeeDetails() {
    this.employeeService.getEmployeeById(this.currentEditEmployeeId).subscribe({
      next: (res: EmployeeModel) => {
        this.employeeObj = res;
      },
      error: (err: any) => console.error('Erro ao obter detalhes do funcionário:', err),
    });
  }

  onChangeParent(event: any) {
    const id = event.target.value;

    this.masterService.getAllChildDepartments(id).subscribe({
      next: (res: IApiResponseModel) => {
        this.childDepartmentsList.set(res.data);
      },
      error: (err: any) => console.error('Erro ao obter departamentos filhos:', err),
    });
  }

  onSaveEmployee() {
    this.employeeService.onCreateEmployee(this.employeeObj).subscribe({
      next: (res: EmployeeModel) => {
        alert(`Funcionário ${res.employeeName}  criado com sucesso!`);
      },
      error: (err: any) => console.error('Erro ao criar funcionário:', err),
    });
  }

  onEditEmployee() {
    this.employeeService.onUpdateEmployee(this.currentEditEmployeeId, this.employeeObj).subscribe({
      next: () => {
        alert(`Funcionário atualizado com sucesso!`);
      },
      error: (err: any) => console.error('Erro ao criar funcionário:', err),
    });
  }
}
