import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllMealsService } from '../../services/all-meals.service';
import { ShoppingCartComponent } from 'src/app/checkout/components/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from 'src/app/checkout/service/shopping-cart.service';




@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent  implements OnInit {
 public  cart: [{"id":string,"quantity":number}];
 cartAlert=false;
 public postcart:any
  public oldcart: string | null;
  userID=localStorage.getItem('id');
  maxRating = 5;
  stars = Array.from({ length: this.maxRating }, (_, i) => i + 1);
  rating = 0;

  rate(star: number) {
    this.rating = star;}
  ID:any;
  Meal:any;
  constructor(
    myRoute:ActivatedRoute,
    public myService: AllMealsService,
    public cartService:ShoppingCartService,
    private router: Router){
    this.ID = myRoute.snapshot.params["id"];
     this.oldcart = localStorage.getItem('cart');
    if (this.oldcart) {
      this.cart = JSON.parse(this.oldcart);
    } else {
      this.cart =[{"id":"0","quantity":0}];
    }

  }
  ngOnInit(): void {
    this.myService.GetMealByID(this.ID).subscribe(
      {
        next:(data)=>{

          this.Meal = data;
          this.rating=Number(this.Meal[0].rate);

        },
        error:(err)=>{console.log(err)}
      }
    );
  }
  AddToCart(){
    if(this.cart[0].quantity===0){
      this.cart = [...this.cart];
      this.cart[0] ={"id":this.ID,"quantity":1} ;
      }else{
        let index = this.cart.findIndex(item => item.id == this.ID);
        if(index ==-1){
         this.cart.push({"id":this.ID,"quantity":1});}
        else{

         this.cart[index].quantity=Number(this.cart[index].quantity)+1;}

      }

    this.cartService.AddToUserCart(this.cart,this.userID).subscribe((data:any)=>{



      this.myService.setCart(JSON.stringify(this.cart));
      this.cartAlert=true;
    },
    (err)=>{
      this.router.navigateByUrl('login');
    }
    );
  }

}
