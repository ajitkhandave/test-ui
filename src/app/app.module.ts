import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeFeebackListComponent } from './components/employee-feeback-list/employee-feeback-list.component';
import { Routes } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CapitalizeLetter } from './directive/capitalize-letter';
import { EmpoyeeService } from './services/employee.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Constant } from './modal/constant';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeFeebackListComponent,
    StarRatingComponent,
    CapitalizeLetter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmpoyeeService, Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
