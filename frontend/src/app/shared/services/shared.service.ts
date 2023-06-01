import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cart:any=localStorage.getItem('cart')
 public cartLength:  any
  constructor() {
    if(this.cart){
     this.cartLength=JSON.parse(this.cart).length}
     else{
      this.cartLength=0
     }
  }

}




