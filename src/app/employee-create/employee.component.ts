import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../models/employee.model";
import {EmployeeService} from "../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee: EmployeeModel

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employee = {
      employeeName: '',
      address: '',
      mobile: null as unknown as number
    }
  }
  createEmployee(): void {
    this.employeeService.create(this.employee).subscribe(() => {
      this.employeeService.showMessage("Employee create!")
    })
  }

}
