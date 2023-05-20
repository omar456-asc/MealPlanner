import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

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
  trueAlert: boolean = false;
  showConfirmationPrompt: boolean = false;
  mealIdToDelete: number|undefined; 
  constructor(
    public myService: ShoppingCartService,
    public mymeals: AllMealsService,
    myRoute:ActivatedRoute,
   private shared: SharedService
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
    this.trueAlert=false;
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

  delete(ID: number|undefined) {
    console.log(ID);
    let index = this.cartid.findIndex((item: { id: any; }) => item.id == ID);
    this.cartid.splice(index, 1);
    this.mymeals.setCart(JSON.stringify(this.cartid))
    this.Meal.splice(index, 1);
    this.shared.removeFromCart()
    if(this.cartid.length==0){
      localStorage.removeItem('cart');
    }
  }
deleteConfirmation(ID: number): void {
  this.mealIdToDelete = ID;
  console.log(this.mealIdToDelete);
  this.showConfirmationPrompt = true;
}

confirmDelete(): void {
  console.log(this.mealIdToDelete);
  this.delete(this.mealIdToDelete);
  this.trueAlert = true;
  this.showConfirmationPrompt = false;
  this.mealIdToDelete = undefined;
}

cancelDelete(): void {
  this.showConfirmationPrompt = false;
}
  minus(index: number) {
    if(this.cartid[index].quantity>1){
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
