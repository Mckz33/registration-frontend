import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "./employee.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee: EmployeeModel = {
    employeeName: "",
    address: "",
    mobile: null as unknown as number
  }

  constructor(private httpClient: HttpClient) {
  }

  register(){
    this.httpClient.post("http://localhost:8080/employee", this.employee).subscribe((resultData: any) => {
      alert("Employee Registered Successfully")
    })
  }
  save() {
    this.register()
  }
}
