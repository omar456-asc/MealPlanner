import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/log-in/auth.service';
import { ShoppingCartService } from 'src/app/checkout/service/shopping-cart.service';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { OrderService } from 'src/app/order/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(public mymeals: AllMealsService,
    public myService: ShoppingCartService,
    private UserService: ProfileService,
    private authService: AuthService,
    private orderService: OrderService
     ){}
    ID: any = localStorage.getItem('id');
    localcart:any;
    Meal:any=[];
    cartid: any = this.mymeals.getCart();
    userID:any;
    user: any;
    totalPrice=0
    now = new Date();
    ordernum=(this.ID+this.cartid[0]).slice(5 ,15);
  ngOnInit(): void {
//geting user cart from local storage
    this.getUserCart()
    //get user information using id
    this.getUser()
    }


//delete cart from local storage and database when confirm the order
  order(){
    this.createOrder()
    this.cartid = [{}]
    this.myService.AddToUserCart(this.cartid, this.ID).subscribe(
      (data: any) => {
        localStorage.removeItem('cart');
        location.reload();
      },
      (err) => {
     console.log("error")
      }
    );

  }
  getUser(){
    this.UserService.getProfileInfo(this.ID).subscribe(
      (data: any) => {
        this.user=data;
      },
      (error) => console.log('Error', error)
    );

  }
  //getting cart
  getUserCart(){
    this.localcart=this.mymeals.getCart();
    this.cartid = JSON.parse(this.localcart);
    //use regex to get price as number to compute total price
    const myRegex = /\d+/;
    if(this.cartid.length>0){
    for (let i = 0; i < this.cartid.length; i++) {
      this.mymeals.GetMealByID(this.cartid[i].id).subscribe({
        next: (data: any) => {
          this.Meal.push(data)
        data.quantity=this.cartid[i].quantity
         this.totalPrice+=data.quantity*parseInt(data[0].price.match(myRegex)[0]);

        },
        error: (err) => {
          console.log(err);
        },
      });
    }}

  }
createOrder(){
  [{MealID:"",ingredients:[{}],amount:Number}]
  var newOrder:any={}
  newOrder.userID=this.ID
  newOrder.totalPrice=this.totalPrice
  newOrder.status="pending"
  newOrder.meals=this.cartid.map((meal: { id: any; ingredients: any; quantity: any; }) => {
    return {
      mealID: meal.id,
      ingredients: meal.ingredients,
      quantity: meal.quantity
    };
  })
  this.orderService.CreateOrder(newOrder).subscribe((response: any) => {
console.log("Order created")
  },
  (err) => {
console.log("Error creating order")
  }
  );
}

}
