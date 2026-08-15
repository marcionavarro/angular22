import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  studentName: string = 'Marcio Navarro';
  rollNo: number = 121;
  istStudentActive: boolean = false;
  currentDate: Date = new Date();

  teacherName = 'Carlos Eduardo';

  cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  rollNoList: number[] = [101, 102, 103, 104, 105];

  student = {
    studentName: 'Marcio Navarro',
    rollNo: 121,
    city: 'Los Angeles',
  };

  studentList = [
    { studentName: 'Marcio Navarro', rollNo: 121, city: 'Los Angeles' },
    { studentName: 'Carlos Eduardo', rollNo: 122, city: 'New York' },
    { studentName: 'John Doe', rollNo: 123, city: 'Chicago' },
  ];

  employee: any = 'Chetan';

  constructor() {
    debugger;
    console.log(this.studentName);
    console.log(this.studentList);
    console.log(this.studentList[1]);
    //this.rollNo = "abcd";

    this.employee = 'Marcio Navarro';
    this.employee = 122;
    this.employee = false;
    this.employee = [];

    this.studentName = 'Cristian';

    console.log('After Change: ' + this.studentName);
  }
}
