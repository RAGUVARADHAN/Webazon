import { Component } from '@angular/core';
import { CheckdetailService } from '../services/checkdetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent 
{
  constructor(private check:CheckdetailService,private router:Router){}

  email='';
  password='';
  url="/Login";
  login=false;
    getdetail(name:any,email:any,pass:any)
    {
      console.log(name);
      
      if(name!='' && email!='' && pass!='')
      {
        this.check.getSignUp(this.email,this.password);
        this.router.navigateByUrl('Login');
      }
      else
      {
        alert("Enter details");
      }
    }
    changelogin()
    {
      this.login=true;
      this.check.loginValue(this.login);
    }
}
