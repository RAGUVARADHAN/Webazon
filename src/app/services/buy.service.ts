import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  quan:number=1;
  constructor() {}

  QuantityUpdate(value:number)
  {
    this.quan=value;
    console.log(this.quan);
    
  }
}
