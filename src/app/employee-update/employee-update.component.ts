import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeModel} from "../models/employee.model";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit{

  employee: EmployeeModel
  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.employee = {
      id: null as unknown as number,
      employeeName: '',
      address: '',
      mobile: null as unknown as number
    }
  }

  updateEmployee(): void {
    this.employeeService.update(this.employee).subscribe(() => {
      this.employeeService.showMessage('Employee updated.')
      this.router.navigate(['/read'])
    })
  }

  cancel() {
    this.router.navigate(['/read'])
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.employeeService.readById(id).subscribe(employee => {
      this.employee = employee
    })
  }
}
