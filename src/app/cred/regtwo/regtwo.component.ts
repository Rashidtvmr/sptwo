import { Component, OnInit } from '@angular/core';
//import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import {FormControl,FormGroup, Validators} from '@angular/forms';
//import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@Component({
  selector: 'REACTIVE_FORM_DIRECTIVES',
  templateUrl: './regtwo.component.html',
  styleUrls: ['./regtwo.component.css']
})
export class RegtwoComponent implements OnInit {
  // Decla...
  
  regForm2:FormGroup;
  dat;
  constructor(private router:Router){}
  
  minDate:Date = new Date(1950, 0, 1);
  maxDate:Date = new Date(2018,12,1);


  ngOnInit() {
    console.log("Date:"+this.maxDate);
    this.regForm2=new FormGroup(
      {    
        // Validators.pattern('/.(jpg|gif|jpeg|png)$/')
        imgFile:new FormControl(null,[Validators.required,this.fileValidate.bind(this)]),
        myDate:new FormControl(null,[Validators.required]),
        myAdd:new FormControl(null,[Validators.required]),
        myPno:new FormControl(9952782953,[Validators.minLength(10),Validators.maxLength(10),])
      }
    );
  }
  fileValidate(control:FormControl):boolean{
        let pattern="/.(jpg|gif|doc|pdf)$/";
        if(control.value==pattern)
            return true;
        else
          return null;
  }
  sFormSubmitted(){
    this.router.navigate(['/main']);   
  }
}
