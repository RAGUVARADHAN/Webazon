import { Component, ViewChild } from '@angular/core';
import { BuyService } from '../services/buy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent 
{
    coupon=false;
    buy_product:any=[];
    quantity:number=1;
    constructor(private buy:BuyService,private router:Router){

    }
    ngOnInit()
    {
      this.buy_product=(localStorage.getItem('product'));
      this.buy_product=JSON.parse(this.buy_product);
      this.quantity= this.buy.quan;
    }
    ApplyCoupon()
    {
      this.coupon=true;
    }
    orderPlace(fname:any,lname:any,addr:any,apart:any,city:any,phone:any,email:any,bank:any)
    {
      console.log(bank);
      
      if(fname!='' && lname!='' && addr!='' && apart!='' && city!='' && phone!='' && email!='' && bank=='on')
      {
        alert("Order placed");
        this.router.navigateByUrl("Home");
      }
      else
      {
        alert("Please fill all the details");
      }
    }
}
