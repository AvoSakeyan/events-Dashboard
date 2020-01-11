import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthoService} from '../Service/autho.service';
import {Router} from '@angular/router';
import {error} from 'util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  errMessage: any;

  constructor(private mainService: AuthoService, private router: Router) { }

  ngOnInit() {
    this.formValidation();
  }

  formValidation() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const logInData = {...this.form.value};
    if (this.form.valid) {
      this.mainService.login(logInData)
        .subscribe(
          (response: any) => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('username', response.user.name);
            if (response.user.isAdmin) {
              localStorage.setItem('isAdmin', 'admin');
              this.router.navigate(['adminDashboard']);
            } else {
              this.router.navigate(['clientDashboard']);
            }
          },
          // tslint:disable-next-line:no-shadowed-variable
          error => {
            this.errMessage = error.error.message;
          });
     }
  }
}




