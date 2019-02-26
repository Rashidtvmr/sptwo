import { Component, OnInit, Injectable, ViewChild, ElementRef, Input } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute, Router } from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginBtn') loginBtn:ElementRef;
  @Input() isLogged:boolean=false;
  //declarations
  loginForm:FormGroup;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loginForm =new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      passwd:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(14)])
    });
  }
  logMeIn(){
    this.isLogged=true;
  this.router.navigate(['/main']);
 }

}
