import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cart:any=localStorage.getItem('cart')
 public cartLength:  any
  constructor() {
     this.cartLength=JSON.parse(this.cart)
  }

}




