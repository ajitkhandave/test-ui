import { projectList } from './../../mock-data/employee-info';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpoyeeService } from 'src/app/services/employee.service';
import { Project } from 'src/app/modal/project-info';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/modal/constant';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  employeeForm: FormGroup;
  projectList: string[];
  stars: number[] = [1, 2, 3, 4, 5];
  selectedRating: number;
  editedChanges: any;
  @Input() editable:boolean;
  @Input() currentProject:Project;
  @Output() showList = new EventEmitter<boolean>()

  constructor(private formBuilder: FormBuilder, 
    private employeeService: EmpoyeeService,
    private toastr: ToastrService, 
    private constant: Constant) { }

  ngOnInit() {
    this.getProject();
    this.setInitialForm();
  }
  setInitialForm(){
    this.createForm();
    this.selectedRating = 1;  
    this.employeeForm.controls.name.setValue(localStorage.getItem('user'));
    this.employeeForm.controls.empID.setValue(localStorage.getItem('empID'));
    this.employeeForm.controls.project.setValue(null);
    if(this.editedChanges) this.updateChanges(this.editedChanges.currentProject.currentValue)
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.editable.currentValue) {
      this.editedChanges = changes;
    }
  }
  updateChanges(changes) {
    this.employeeForm.controls.project.setValue(changes.name);
    this.employeeForm.controls.comment.setValue(changes.comments);
    this.selectedRating = changes.rating;
  }
  getProject() {
    this.employeeService.getProjectList().subscribe(res=>{
      this.projectList = res;
    })
  }

  createForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      empID: ['', Validators.required],
      project: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }
  countStar(star) {
    this.selectedRating = star;
  }

  submit() {
    let project = new Project();
    project.name = this.employeeForm.get('project').value;
    project.comments = this.employeeForm.get('comment').value;
    project.rating = this.selectedRating;
    if(localStorage.getItem('projectList')) {
      let projectList = JSON.parse(localStorage.getItem('projectList'));
      projectList = this.updateProject(project, projectList);
      localStorage.removeItem('projectList');
      localStorage.setItem('projectList', JSON.stringify(projectList))
      this.clearForm();
      this.toastr.success(this.constant.SUCCESS_FEEDBACK_UPDATED);
    } else {
      let projectList = [];
      projectList.push(project);
      localStorage.setItem('projectList', JSON.stringify(projectList))
      this.clearForm();
      this.toastr.success(this.constant.SUCCESS_FEEDBACK_ADDED);
    }
    this.showList.emit(true);
  }
  clearForm() {
    this.employeeForm.controls.project.setValue(null);
    this.employeeForm.controls.comment.setValue("");
    this.selectedRating = 1;
  }
  updateProject(item:Project, arr) {
    if(this.search(item.name, arr) !== undefined) {
      let index = this.search(item.name, arr);
      arr.splice(index,1,item);
    } else {
      arr.push(item);
    }
    return arr;
  }
  search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return i;
        }
    }
  }
}
