import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/user.model'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
registerForm : FormGroup;
userModelObj : User = new User();
  constructor(private formBuilder : FormBuilder,
    private router : Router,
    private userService : UserService, private http : HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name:[null,Validators.required],
      last_name:[null,Validators.required],
      email:[null,Validators.compose([Validators.required,Validators.email])],
      password:[null,Validators.required],

    });
  }
  register(){
  this.userModelObj.first_name = this.registerForm.value.first_name;
  this.userModelObj.last_name = this.registerForm.value.last_name;
  this.userModelObj.email = this.registerForm.value.email;
  this.userModelObj.password = this.registerForm.value.password;

   this.userService.register(this.userModelObj)
    .subscribe(res=>{
      this.registerForm.reset();
      this.router.navigate(['login'])
    },err=>{
      console.log(err);
    });
   
  }

}
