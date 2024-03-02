import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartbuy',
  templateUrl: './cartbuy.component.html',
  styleUrls: ['./cartbuy.component.css']
})
export class CartbuyComponent 
{
  coupon:boolean=false;
  cart:any=[];
  constructor(private router:Router){}
  ngOnInit()
  {
    this.cart=localStorage.getItem("cart");
    this.cart=JSON.parse(this.cart);
    console.log(this.cart);
    
  }
  ApplyCoupon()
    {
      //this.coupon=true;
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
