import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../models/employee.model";
import {EmployeeService} from "../services/employee.service";

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements OnInit{

  employees: EmployeeModel[]
  displayedColumns = ['id', 'employeeName', 'address', 'mobile']

  constructor(private employeeService: EmployeeService) {
    this.employees = []
  }

  ngOnInit(): void {
    this.employeeService.read().subscribe(employees => {
      this.employees = employees
      console.log(employees)
    })
  }
}
