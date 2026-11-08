import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IApiResponseModel } from '../../models/API.Response';
import { IUserModel } from '../../models/Uses.Model';
import { Master } from '../../service/master';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-application-form',
  styleUrl: './application-form.css',
  templateUrl: './application-form.html',
})
export class ApplicationForm {
  applicationForm!: FormGroup;
  masterService = inject(Master);
  router = inject(Router);
  loggedUserData!: IUserModel;

  constructor() {
    const local = localStorage.getItem('bankloanuser');
    if (local != null) this.loggedUserData = JSON.parse(local);
    this.initializeForm();
  }

  initializeForm() {
    this.applicationForm = new FormGroup({
      applicantID: new FormControl(0),
      customerId: new FormControl(this.loggedUserData.userId),
      fullName: new FormControl(''),
      applicationStatus: new FormControl(''),
      panCard: new FormControl(''),
      dateOfBirth: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(''),
      annualIncome: new FormControl(0),
      employmentStatus: new FormControl(''),
      creditScore: new FormControl(0),
      assets: new FormControl(''),
      dateApplied: new FormControl(new Date()),
      Loans: new FormArray([]),
    });
    this.addNewLoanForm();
  }

  addNewLoanForm() {
    this.loanDetails.push(this.addNewLoan());
  }

  get loanDetails(): FormArray {
    return this.applicationForm.get('Loans') as FormArray;
  }

  addNewLoan(): FormGroup {
    return new FormGroup({
      loanID: new FormControl(0),
      applicantID: new FormControl(0),
      bankName: new FormControl(''),
      loanAmount: new FormControl(0),
      emi: new FormControl(0),
    });
  }

  onSaveApplication() {
    debugger;
    const formValue = this.applicationForm.value;
    this.masterService.saveLoanApplication(formValue).subscribe({
      next: (res: IApiResponseModel) => {
        if (res.result) {
          alert('Aplicativo cadastrado com sucesso!');
          this.router.navigateByUrl('/application-list');
        } else {
          alert(res.message);
        }
      },
      error: (err) => console.log('Erro ao salvar aplicativo: ', err),
    });
  }
}
