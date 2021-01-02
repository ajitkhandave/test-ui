import { Project } from './../../modal/project-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  showForm: boolean;
  user: string;
  currentProject: Project;
  isEdit: boolean = false;
  constructor() { }

  ngOnInit() {
    this.showForm = true;
    this.user = localStorage.getItem('user');
  }

  tabCliked() {
    this.showForm = !this.showForm;
  }
  editProductDetail(project) {
    this.showForm = true;
    this.currentProject = project
    this.isEdit = true;
  }
  showList(event) {
    if(event) this.showForm = false;
  }
}
