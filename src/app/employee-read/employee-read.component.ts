import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../models/employee.model";
import {EmployeeService} from "../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements OnInit{

  employees: EmployeeModel[]
  displayedColumns = ['id', 'employeeName', 'address', 'mobile', 'action']

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employees = []
  }

  ngOnInit(): void {
    this.employeeService.read().subscribe(employees => {
      this.employees = employees
      console.log(employees)
    })
  }
}
