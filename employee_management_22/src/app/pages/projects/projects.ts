import { AsyncPipe, DatePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../core/model/classes/Employee.model';
import { IProject, NewProjectModel } from '../../core/model/interfaces/User.Model';
import { EmployeeService } from '../../core/services/employee-service';
import { ProjectService } from '../../core/services/project-service';

@Component({
  selector: 'app-projects',
  imports: [ReactiveFormsModule, FormsModule, DatePipe, AsyncPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projectForm!: FormGroup;

  projectService = inject(ProjectService);
  employeeService = inject(EmployeeService);

  isLoading = signal(true);
  projectList = signal<IProject[]>([]);
  projectEmployeList = signal<any[]>([]);
  currentSelectedProjectEmployee: WritableSignal<any> = signal<any[]>([]);

  isFormVisible: boolean = false;
  empList$: Observable<EmployeeModel[]> = new Observable<EmployeeModel[]>();
  @ViewChild('employeeModal') modalForm!: ElementRef;
  currentProjectId: number = 0;

  assignEmployeeObj: any = {
    empProjectId: 0,
    projectId: 0,
    empId: 0,
    assignedDate: '',
    role: '',
    isActive: false,
  };

  constructor() {
    this.initializeForm();
    this.empList$ = this.employeeService.getAllEmployee();
  }

  ngOnInit(): void {
    this.loadProjects();
    this.loadProjectEmployees();
  }

  showFormPanel() {
    this.isFormVisible = true;
    this.projectForm.reset({
      projectId: 0,
    });
  }

  openEmployeeModal(projectId: number) {
    this.currentProjectId = projectId;
    this.assignEmployeeObj.projectId = projectId;
    this.currentSelectedProjectEmployee.set(
      this.projectEmployeList().filter((m) => m.projectId == projectId),
    );

    if (this.modalForm) {
      this.modalForm.nativeElement.style.display = 'block';
    }
  }

  closeEmployeeModal() {
    if (this.modalForm) {
      this.modalForm.nativeElement.style.display = 'none';
    }
  }

  assignEmployee() {
    this.projectService.assignEmployee(this.assignEmployeeObj).subscribe({
      next: (res: any) => {
        alert(`Funcionario adicionado ao projeto com sucesso`);
        this.loadProjectEmployees();
        this.assignEmployeeObj = {};
      },
      error: (err: any) => console.log('Erro ao adicionar funcionário no projeto', err),
    });
  }

  loadProjects() {
    this.isLoading.set(true);
    this.projectService.getAllProjetct().subscribe({
      next: (res: IProject[]) => {
        this.projectList.set(res);
        this.isLoading.set(false);
      },
      error: (err: any) => console.log('Erro ao listar projetos', err),
    });
  }

  loadProjectEmployees() {
    this.projectService.getAllProjectEmployees().subscribe({
      next: (res: any[]) => {
        this.projectEmployeList.set(res);
        if (this.currentProjectId != 0) {
          this.currentSelectedProjectEmployee.set(
            this.projectEmployeList().filter((m) => m.projectId == this.currentProjectId),
          );
        }
      },
      error: (err: any) => console.log('Erro ao listar projetos', err),
    });
  }

  initializeForm() {
    this.projectForm = new FormGroup({
      projectId: new FormControl(0),
      projectName: new FormControl(''),
      clientName: new FormControl(''),
      startDate: new FormControl(''),
      leadByEmpId: new FormControl(''),
      contactPerson: new FormControl(''),
      contactNo: new FormControl(''),
      emailId: new FormControl(''),
    });
  }

  getProjectNameInitials(projectName: string): string {
    if (!projectName) {
      return '';
    }

    const parts = projectName
      .trim()
      .split(/[\s-]+/)
      .filter(Boolean);

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return parts
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase();
  }

  getProjectDetails(projectId: number, isFormVisible: boolean) {
    this.isFormVisible = isFormVisible;
    this.projectService.getProjectId(projectId).subscribe({
      next: (res: IProject) => {
        this.currentProjectId = res.projectId;
        if (this.currentProjectId != 0) {
          const startDate = res.startDate ? res.startDate.substring(0, 10) : '';
          this.projectForm.patchValue({
            ...res,
            startDate,
          });
        }
      },
      error: (err: any) => console.error('Erro ao obter detalhes do funcionário:', err),
    });
  }

  saveProject() {
    const formValue: NewProjectModel = this.projectForm.value;
    this.projectService.createProject(formValue).subscribe({
      next: (res: NewProjectModel) => {
        alert(`Projeto ${res.projectName} criado com sucesso`);
        this.projectForm.reset();
        this.loadProjects();
      },
      error: (err: any) => console.log('Erro ao criar projeto', err),
    });
  }

  editProject() {
    this.projectService.updateProject(this.currentProjectId, this.projectForm.value).subscribe({
      next: () => {
        alert('Projeto atualizado com sucesso');
        this.loadProjects();
      },
      error: (err: any) => console.log('Erro ao editar o projeto', err),
    });
  }

  deleteProject(projectId: number) {
    const isConfirm = confirm('Tem certeza que deseja excluir o projeto: ' + projectId);
    if (isConfirm) {
      this.projectService.deleteProject(projectId).subscribe({
        next: () => {
          this.loadProjects();
        },
        error: (err: any) => console.log('Erro ao editar o projeto', err),
      });
    }
  }

  deleteProjectEmployee(id: number) {
    this.projectService.deleteAssignEmployee(id).subscribe({
      next: () => {
        this.loadProjectEmployees();
      },
      error: (err: any) => console.log('Erro ao excluir o funcionario do projeto', err),
    });
  }
}
