import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from "./employee-create/employee.component";
import {EmployeeReadComponent} from "./employee-read/employee-read.component";
import {EmployeeDeleteComponent} from "./employee-delete/employee-delete.component";

const routes: Routes = [
  { path: 'create', component: EmployeeComponent },
  { path: 'read', component: EmployeeReadComponent },
  { path: 'employee/delete/:id', component: EmployeeDeleteComponent},
  // { path: 'employee/delete', component: EmployeeDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
