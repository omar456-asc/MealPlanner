import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  quantityInput = 1;
  ID: any = localStorage.getItem('id');
  localcart: any = this.mymeals.getCart();
  cartid: any = [];
  Meal: any = [];
  constructor(
    public myService: ShoppingCartService,
    public mymeals: AllMealsService
  ) {}

  ngOnInit(): void {
    this.cartid = JSON.parse(this.localcart);
    for (let i = 0; i < this.cartid.length; i++) {
      this.mymeals.GetMealByID(this.cartid[i].id).subscribe({
        next: (data: any) => {
          console.log(data);
          this.Meal.push(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  checkout() {
   var cart:any=this.mymeals.getCart()
    this.cartid = JSON.parse(cart)
    this.myService.AddToUserCart(this.cartid, this.ID).subscribe(
      (data: any) => {
        localStorage.removeItem('cart')
        console.log("done");
      },
      (err) => {
     console.log("error")
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
