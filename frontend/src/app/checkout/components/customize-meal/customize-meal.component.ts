import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';

@Component({
  selector: 'app-customize-meal',
  templateUrl: './customize-meal.component.html',
  styleUrls: ['./customize-meal.component.css'],
})
export class CustomizeMealComponent implements OnInit {
  constructor(public myService: AllMealsService,
    myRoute:ActivatedRoute,
    ) {
      this.ID = myRoute.snapshot.params["id"];

    this.totalMealPrice = 3000;
  }
  matchedIngredients:any=[]
  ingrediants:any=[]
  totalMealPrice: number | undefined;
  meal :any;
  ID:any

  ngOnInit(): void {

    this.myService.GetMealByID(this.ID).subscribe(
      {
        next:(data:any)=>{

          this.meal = data;
          this.ingrediants=this.meal[0].ingredients_details
          const cart: any = this.myService.getCart();
const cartItems = JSON.parse(cart);

const ingredientIds = cartItems.flatMap((item: { ingredients: any; }) => item.ingredients);
 const matchedIngredients = this.ingrediants.filter((ingredient: { _id: any; }) => ingredientIds.includes(ingredient._id));
this.ingrediants=matchedIngredients;

        },
        error:(err)=>{console.log(err)}
      }
    );

  }
  delete(ID:any,index: number) {
    this.ingrediants.splice(index, 1);
    const ingrediantsid = this.ingrediants.map((obj: { _id: any; }) => obj._id);
    var cart:any=this.myService.getCart()
    cart=JSON.parse(cart)
    // cart[index].ingredients=this.ingrediants
    const mealindex = cart.findIndex((obj: { id: any; }) => obj.id === ID);
    if (mealindex !== -1) {
      cart[mealindex].ingredients=ingrediantsid
    }
    this.myService.setCart(JSON.stringify(cart))
    // this.matchedIngredients=this.ingrediants
  }

}

