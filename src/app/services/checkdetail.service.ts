import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckdetailService {

  constructor(private router:Router) { }
  signupemail:string='';
  signuppassword:string='';
  loginemail:string='';
  loginpassword:string='';
  login=false;
  getSignUp(email:any,password:any)
  {
      this.signupemail=email;
      this.signuppassword=password;
  }
  getLogin(email:any,password:any)
  {
      this.loginemail=email;
      this.loginpassword=password;
      this.isValid(this.login);
  }
  loginValue(login:boolean)
  {
    this.login=login;
    this.router.navigateByUrl('/Login');
  }
  
  isValid(login:boolean)
  {
    if(!login)
    {
      if(this.signupemail.toUpperCase()===this.loginemail.toUpperCase() && this.signuppassword==this.loginpassword)
      {
        this.router.navigateByUrl('/Home');
      }
      else
      {
        alert("Enter correct detail");
      }
    }
    else
    {
      this.router.navigateByUrl('/Home');
    }
  }
}
