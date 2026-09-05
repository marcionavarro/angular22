import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../../core/services/project-service';
import { IProject, NewProjectModel } from '../../core/model/interfaces/User.Model';
import { DatePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projectForm!: FormGroup;

  projectService = inject(ProjectService);
  projectList = signal<IProject[]>([]);
  isFormVisible: boolean = false;

  constructor() {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  showFormPanel() {
    this.isFormVisible = true;
  }

  loadProjects() {
    this.projectService.getAllProjetct().subscribe({
      next: (res: IProject[]) => {
        this.projectList.set(res);
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

  saveProject() {
    const formValue: NewProjectModel = this.projectForm.value;
    this.projectService.createProject(formValue).subscribe({
      next: (res: NewProjectModel) => {
        alert('Projeto criado com sucesso');
      },
      error: (err: any) => console.log('Erro ao criar projeto', err),
    });
  }
}
