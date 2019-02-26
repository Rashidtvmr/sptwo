import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  g:['Male','Female','Other'];
  signupForm:FormGroup;
  constructor(private router:Router) { }

  ngOnInit() {
    this.signupForm=new FormGroup({
      fname:new FormControl(null,[Validators.required]),
      sname:new FormControl(null),
      gender:new FormControl(null),
      semail:new FormControl(null,[Validators.required,Validators.email]),
      pswd1:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
      pswd2:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),

    });
  }
  onSignup(){
    
    this.router.navigate(['/regto']);
  }

}
