import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../models/employee.model";
import {EmployeeService} from "../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit{

  employee: EmployeeModel

  constructor(private employeeService: EmployeeService, private router: Router, private activateRoute: ActivatedRoute) {
    this.employee = {
      id: null as unknown as number,
      employeeName: '',
      address: '',
      mobile: null as unknown as number
    }
  }
  deleteEmployee(): void {
    this.employeeService.delete(this.employee.id).subscribe(() => {
      this.employeeService.showMessage('Employee deleted.')
      this.router.navigate([''])
    })
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')
    this.employeeService.readById(id).subscribe(employee => {
      this.employee = employee
    })
  }

  cancel(): void {
    this.router.navigate(['/read'])
  }
}
