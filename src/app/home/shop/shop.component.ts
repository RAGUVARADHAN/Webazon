import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { BuyService } from 'src/app/services/buy.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent 
{

    prodId:any;
    product:any={};
    quan:number=1;
    constructor(private activerouter:ActivatedRoute,private prodservice:ProductsService, private route:Router,private buy:BuyService)
    {
    }
    ngOnInit()
    {
      this.product=(localStorage.getItem('product'));
      this.product=JSON.parse(this.product);
    }

    changeValue(value:any)
    {
      this.quan=value.value;
    }
    
    ShopPage()
    {
      this.route.navigateByUrl("Buy");
      this.buy.QuantityUpdate(this.quan);
    }
}
