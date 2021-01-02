import { Injectable } from '@angular/core';
import { projectList } from '../mock-data/employee-info';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpoyeeService {

  constructor() {
  }

  getProjectList() {
    return of(projectList)
  }

 
}
