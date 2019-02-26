import { NgModule} from '@angular/core';
import { Routes, RouterModule,ActivatedRoute, Router } from '@angular/router';
import { SignupComponent } from './cred/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './cred/login/login.component';
import { MainComponent } from './cred/main/main.component';
import { RegtwoComponent } from './cred/regtwo/regtwo.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"main",component:MainComponent},
  {path:"regto",component:RegtwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router:Router,private route:ActivatedRoute){ }
  gotoSignUp(){
    this.router.navigate(['/signup']);
  }
  gotoLogin(){
    this.router.navigate(['/login']);
  }
  gotoMain(){
    this.router.navigate(['/main']);
  }
}
export const routedComp=[HomeComponent,LoginComponent,SignupComponent,MainComponent,RegtwoComponent];