import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { EmployeeComponent } from './employee-create/employee.component';
import {HttpClientModule} from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EmployeeReadComponent } from './employee-read/employee-read.component';
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDeleteComponent,
    EmployeeReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
