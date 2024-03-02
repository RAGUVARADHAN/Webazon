import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  prodid: any;
  cartproduct:any=[];
  products:any=[];
  constructor(private prodservice:ProductsService,private activerouter:ActivatedRoute,private router:Router) 
  { 

  }
  AddCart()
  {
    this.cartproduct=localStorage.getItem("cart"); 
    this.cartproduct=JSON.parse(this.cartproduct);
    this.cartproduct.length;
    if(this.router.url.split('/')[1]=='cart')
      {
        location.reload();
        console.log(this.router.url);
      }
  }
  
}
