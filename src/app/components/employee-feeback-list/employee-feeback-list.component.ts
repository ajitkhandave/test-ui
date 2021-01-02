import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/modal/project-info';
import { Constant } from 'src/app/modal/constant';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-feeback-list',
  templateUrl: './employee-feeback-list.component.html',
  styleUrls: ['./employee-feeback-list.component.scss']
})
export class EmployeeFeebackListComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  projectList: Project[];
  @Output() editProjectDetail = new EventEmitter<Project>()
  constructor(private toastr: ToastrService, 
    private constant: Constant) { }

  ngOnInit() {
    this.projectList = JSON.parse(localStorage.getItem('projectList'));
  }
  editProject(project) {
    this.editProjectDetail.emit(project);
  }
  deleteProject(project) {
    let findIndex: number = this.search(project.name, this.projectList);
    if(findIndex !== undefined) {
      this.projectList.splice(findIndex,1);
      localStorage.removeItem('projectList');
      localStorage.setItem('projectList', JSON.stringify(this.projectList))
      this.projectList = [];
      this.projectList = JSON.parse(localStorage.getItem('projectList'));
      this.toastr.success(this.constant.SUCCESS_FEEDBACK_DELETED);
    }
  }
  search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return i;
        }
    }
  }
}
