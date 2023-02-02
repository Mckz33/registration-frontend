import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeModel} from "./employee.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  name: string = "";
  address: string = "";
  mobile: string = "";

  constructor(private httpClient: HttpClient) {
  }

  register(){
    let bodyData = {
      "employeeName": this.name,
      "address": this.address,
      "mobile": this.mobile
    };
    this.httpClient.post("http://localhost:8080/employee", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Employee Registered Successfully")

      this.name = "";
      this.address = "";
      parseInt(this.mobile)
    })
  }
  save() {
    this.register()
  }
}
