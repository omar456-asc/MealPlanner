import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private cart:any=localStorage.getItem('cart')
  public cartLength= new BehaviorSubject<number>(0);
  constructor() { this.loadCart()}
 get cartLength$(): Observable<number> {
  return this.cartLength.asObservable();
}

removeFromCart() {
  var cart:any=localStorage.getItem('cart')
  this.cartLength.next(JSON.parse(cart).length)
}


  private loadCart() {
    if (this.cart !== null) {
      this.cartLength.next(JSON.parse(this.cart).length);
    } else {
      this.cartLength.next(0);
    }

  }

}
