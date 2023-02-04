import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "../models/employee.model";
import {catchError, EMPTY, map, Observable, throwError} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "http://localhost:8080/employee"
  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'close', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
  create(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.httpClient.post<EmployeeModel>(this.baseUrl, employee).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  read(): Observable<any>{
    return this.httpClient.get<EmployeeModel[]>(this.baseUrl)
  }


  delete(id: number | undefined): Observable<EmployeeModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<EmployeeModel>(url).pipe(
      catchError(error => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  readById(id: string | null): Observable<any>{
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<EmployeeModel>(url)
  }

  update(employee: EmployeeModel): Observable<any> {
    const url = `${this.baseUrl}/${employee.id}`
    return this.httpClient.put<EmployeeModel>(url, employee)
  }
}
