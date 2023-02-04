import { Component } from '@angular/core';
import {EmployeeModel} from "../models/employee.model";
import {EmployeeService} from "../services/employee.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent {

  constructor(private employeeService: EmployeeService) {
  }



}
