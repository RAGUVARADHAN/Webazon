import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  product:any[]=[];
  getData()
  {
    let url="https://fakestoreapi.com/products";
    let produts=this.http.get(url);
    return this.http.get(url);
  }
  getproduct(prod:any[])
  {
      this.product=prod;
  }
}
