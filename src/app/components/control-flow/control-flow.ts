import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isDiv1Visible: boolean = true;
  isOffer = false;
  orderStatus = 'new';

  cityList = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  studentList = [
    { studentId: 322, name: 'John', city: 'New York', rollNo: 101 },
    { studentId: 150, name: 'Alice', city: 'Los Angeles', rollNo: 102 },
    { studentId: 541, name: 'Bob', city: 'Chicago', rollNo: 103 },
    { studentId: 321, name: 'Eve', city: 'Houston', rollNo: 104 },
    { studentId: 123, name: 'Charlie', city: 'Phoenix', rollNo: 105 },
    { studentId: 987, name: 'David', city: 'New York', rollNo: 106 },
    { studentId: 654, name: 'Grace', city: 'Los Angeles', rollNo: 107 },
  ];
  selectedStudent = '';

  toggleDiv1() {
    this.isDiv1Visible = !this.isDiv1Visible;
  }
}
