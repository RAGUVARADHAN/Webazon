import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent 
{
    constructor(private activeroute:ActivatedRoute, private prodservice:ProductsService , private cart:CartService,private router:Router)
    {
        
    }

    title="hi";
    prodid:any;
    cartproduct:any=[];
    price:any=0;
    quan:number=1;
    id:any;
    index:number=0;
    subtotal:number=1;
    amttot:number=0;
    coupon:boolean=false;
    @ViewChild("subtot") subtot!:HTMLTableCellElement;
    ngOnInit()
    {
      this.cartproduct=localStorage.getItem("cart");
      this.cartproduct=JSON.parse(this.cartproduct);
      console.log(this.cartproduct);
      this.cartproduct.forEach((prod:any)=>
        { 
            this.amttot+=prod.price;
            this.amttot=+this.amttot.toFixed(2);
        })
        this.cartproduct.forEach((prod:any)=>
        {
           prod.rating.count=1;
        })
        
      }

    ApplyCoupon()
    {
      this.coupon=true;
    }

    validateInput(event:any,ind:number,quantity:any)
    {
      console.log(quantity.value);
      
        this.cartproduct.find((product:any,i:number)=>
        {
           this.index=i;
           
           if(ind==i)
           {
             if(product.rating.count<event.target.value)
             {
                this.amttot= this.amttot-(product.price * product.rating.count);
                this.amttot=this.amttot+(product.price * event.target.value);                
                this.amttot=+this.amttot.toFixed(2);
             }
              else
              {
                this.amttot= this.amttot+(product.price * event.target.value);
                this.amttot=this.amttot-(product.price * product.rating.count);
                this.amttot=+this.amttot.toFixed(2);
              }
              product.rating.count=event.target.value;
              this.quan=product.rating.count;
            }
        })
    }
    removeProd(id:number)
    {
       let temp=this.cartproduct.filter((prod:any) => prod.id !=id)
       this.cartproduct=temp;
       console.log(this.cartproduct);
       localStorage.setItem("cart",JSON.stringify(temp));
       location.reload();
    }
    Checkout()
    {
        this.router.navigateByUrl('cart/buy');
    }
}

