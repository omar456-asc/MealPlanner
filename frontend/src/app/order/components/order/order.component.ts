import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/checkout/service/shopping-cart.service';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(public mymeals: AllMealsService,
    public myService: ShoppingCartService,){}
  ID: any = localStorage.getItem('id');
  cartid: any = [];
  order(){
    this.cartid = [{}]
    this.myService.AddToUserCart(this.cartid, this.ID).subscribe(
      (data: any) => {
        console.log("done");
        localStorage.removeItem('cart');
      },
      (err) => {
     console.log("error")
      }
    );
  }

}
