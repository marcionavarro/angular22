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

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnInit {
  employeeObj: EmployeeModel = new EmployeeModel();

  employeeService = inject(EmployeeService);
  masterService = inject(MasterService);

  parentDepartmentsList: WritableSignal<IParentDepartment[]> = signal([]);
  childDepartmentsList: WritableSignal<IChildDepartment[]> = signal([]);

  ngOnInit() {
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
        alert('Funcionário criado com sucesso!');
      },
      error: (err: any) => console.error('Erro ao criar funcionário:', err),
    });
  }
}
