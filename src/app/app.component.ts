import { Component, ViewEncapsulation } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent 
{
  title = 'ecommerce';
  length:number=0;
  cartproducts:any=[];
  constructor(private cart:CartService){}
  ngOnInit()
  {
    this.cartproducts=localStorage.getItem("cart");
    this.cartproducts=JSON.parse(this.cartproducts)
    this.length=this.cartproducts.length;
  }
  Updatecart(len:number)
  {
    this.cart.AddCart();
    this.ngOnInit();
  }
}
