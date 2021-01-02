import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/modal/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  userCredential = {username: 'ajit', password: 'ajit'};

  constructor(private router: Router, private toastr: ToastrService, private constant: Constant) { }

  ngOnInit() {
  }

  login() {
    if(this.username && this.password) {
      if(this.username === this.userCredential.username && this.password === this.userCredential.password) {
        this.navigateUser();
        this.toastr.success(this.constant.SUCCESS_LOGIN);
      }else {
        this.toastr.error(this.constant.INCORRECT_CREDENTIAL);
      }
    } else {
      this.toastr.error(this.constant.EMPTY_CREDENTIAL);
    }
  }

  navigateUser() {
    localStorage.setItem('user', this.username);
    localStorage.setItem('empID', '123');
    this.router.navigate(['employee']);
  }
}


