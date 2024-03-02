import { Component, ViewChild, inject} from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{
    products:any=[];

   constructor(private prod:ProductsService, private router:Router, private activeroute:ActivatedRoute,private cart:CartService,)
   {
      prod.getData().subscribe((data:any)=>
      {
          this.products= data;
          //console.log(this.products);
          for(let i of this.products)
          {
            i.title="Product";
          }
          prod.getproduct(this.products);
      })
   }

   ngOnInit()
   {
      if(!localStorage.getItem("cart"))
      {
         localStorage.setItem("cart","[]");
      }
   }


   //View all products
   viewbtnValue:any;
   viewAllProducts(viewbtn:any)
   {
      this.viewbtnValue=viewbtn.innerHTML;
      if(viewbtn.innerHTML==="View All Products")
      {
         viewbtn.innerHTML="View Less Products";
      }
      else
      {
         viewbtn.innerHTML="View All Products";
      }
   }
   cartproducts:any=[];
   
   addToCart(prodid:any)
   {
      this.cartproducts=(localStorage.getItem("cart"));
      this.cartproducts=JSON.parse(this.cartproducts);
      
      let product=this.prod.product.find((prod)=>
      {
         return prod.id===prodid;
      });
      
      if(this.cartproducts.length==0)
      {
         this.cartproducts.push(product);
      }
      else 
      {
         let res=this.cartproducts.find((ele:any)=>ele.id==prodid);
         if(res===undefined)
         {
            this.cartproducts.push(product);
         }
      }
      localStorage.setItem("cart",JSON.stringify(this.cartproducts));
      this.cart.AddCart();
   }

   StoreProduct(id:number)
   {
      this.prod.product.find((prod)=>
      {
         if(prod.id===id)
         {
            localStorage.setItem('product',JSON.stringify(prod));
         }
      })
   }
}
