import { Injectable, Input } from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import * as faker from 'faker';
@Injectable({
  providedIn: 'root'
})
export class DataService {
   @Input() user:any;
   
  
   i:number=0;
  constructor( ) {
    this.user=Array(10000)
    .fill(1)
    .map(_ =>{
        return {
          id:this.i++,
          isLiked:false,
          name:faker.Name.firstName(),
          email:faker.Internet.email(),
          age:faker.random.number(18,58),
          likes:faker.random.number(300,100000),
          views:faker.random.number(100,45000),
          postedon:this.getDate(),
          aUrl:faker.Image.avatar(),
          iUrl:faker.Image.imageUrl(),
          desc:faker.Lorem.sentences(),
          pno:faker.PhoneNumber.phoneNumber(),
          add:faker.Address.streetAddress()
        };
    }
    );
  }
  getDate():any{
    let r1=Math.round(Math.random()*10)-2;
    let date=Math.round(Math.random()*10)+10;
    let month=Math.round(Math.random()*10)+1;
    let yr=Math.round(Math.random()*10)+2000+r1;
    let fdate=new Date(yr,month,date);
    return fdate;
  }
}
