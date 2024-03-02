import { Component } from '@angular/core';
import { CheckdetailService } from '../services/checkdetail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  constructor(private check:CheckdetailService){}
    
  email='';
  password='';
    getDetail()
    {
        this.check.getLogin(this.email,this.password);
    }
}
