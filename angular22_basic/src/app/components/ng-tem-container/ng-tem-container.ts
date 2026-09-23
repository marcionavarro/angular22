import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-ng-tem-container',
  styleUrl: './ng-tem-container.css',
  templateUrl: './ng-tem-container.html',
})
export class NgTemContainer {
  studentList = [
    { studentId: 322, isActive: true, name: 'John', city: 'New York', rollNo: 101 },
    { studentId: 150, isActive: false, name: 'Alice', city: 'Los Angeles', rollNo: 102 },
    { studentId: 541, isActive: true, name: 'Bob', city: 'Chicago', rollNo: 103 },
    { studentId: 321, isActive: false, name: 'Eve', city: 'Houston', rollNo: 104 },
    { studentId: 123, isActive: false, name: 'Charlie', city: 'Phoenix', rollNo: 105 },
    { studentId: 987, isActive: true, name: 'David', city: 'New York', rollNo: 106 },
    { studentId: 654, isActive: false, name: 'Grace', city: 'Los Angeles', rollNo: 107 },
  ];

  loggedUserName = 'Rodrigo';
}
