import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  quantityInput:any
  ID: any = localStorage.getItem('id');
  localcart: any ;
  cartid: any = [];
  Meal: any = [];
  constructor(
    public myService: ShoppingCartService,
    public mymeals: AllMealsService,
    myRoute:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.localcart=this.mymeals.getCart();
    this.cartid = JSON.parse(this.localcart);
    for (let i = 0; i < this.cartid.length; i++) {

      this.mymeals.GetMealByID(this.cartid[i].id).subscribe({
        next: (data: any) => {
        data.quantity=this.cartid[i].quantity
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
console.log(data)

      },
      (err) => {
     console.log("error")
      }
    );
  }

  delete(index: number) {
    this.cartid.splice(index, 1);
    this.mymeals.setCart(JSON.stringify(this.cartid))
    this.Meal.splice(index, 1);
  }

  minus(index: number) {
    if(this.cartid[index].quantity>0){
   this.cartid[index].quantity--
   this.mymeals.setCart(JSON.stringify(this.cartid))
   this.Meal[index].quantity=this.cartid[index].quantity

  }
  }

  plus(index: number) {
    this.cartid[index].quantity++;
      this.mymeals.setCart(JSON.stringify(this.cartid))
      this.Meal[index].quantity=this.cartid[index].quantity

  }
}
