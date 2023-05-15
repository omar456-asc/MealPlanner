import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {

  quantityInput = 1;
  ID:any=localStorage.getItem('id')
  cart:any
  constructor(

    public myService: ShoppingCartService){}
  ngOnInit(): void {
    this.myService.GetCart(this.ID).subscribe(
      {
        next:(data)=>{
          this.cart=data
          console.log(this.cart)


        },
        error:(err)=>{console.log(err)}
      }
    );
  }

  minus() {
    let currentValue = this.quantityInput;
    if (currentValue > 1) {
      this.quantityInput = currentValue - 1;
    }
  }

  plus() {
    let currentValue = this.quantityInput;

    this.quantityInput = currentValue + 1;
  }
}
