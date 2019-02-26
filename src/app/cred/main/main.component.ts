import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  people;
  peoplee;
  recent;
  isLiked:boolean=false;
  isRandom:boolean=true;
  isRecent:boolean=false;
  constructor(private uData:DataService) { 
      this.people=this.uData.user;
      this.peoplee=this.people;
      
  }
  liked(id:number){
    if(this.isRandom===true){
      this.people[id].likes+=1;
      this.people[id].isLiked==true;
      this.isLiked ==false;
    }else if(this.isRecent===true){
      this.recent[id].likes+=1;
      this.people[id].isLiked==false;
    this.isLiked ==false;
    }
  }
  getColor(){
    return this.isLiked ==true? 'red' : 'white';
  }
  ngOnInit(){
    //console.log(this.people);
   // this.showRecent();   
  }
  showRandom(){
    
    this.recent=this.peoplee.sort(function(a,b){
      let c:any = new Date(a.postedon);
      let d:any = new Date(b.postedon);
      return c-d;
      });
     // console.log(this.recent);
     this.isRecent=false;
     this.recent.reverse();
    this.isRandom=true;

  }
  showRecent(){
      this.isRandom=false;
      this.isRecent=true;
      
  }
  

}
