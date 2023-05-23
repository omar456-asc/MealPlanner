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
      this.count = myRoute.snapshot.queryParamMap.get('count');
      console.log(this.count)
    this.totalMealPrice = 3000;
  }
  matchedIngredients:any=[]
  ingrediants:any=[]
  ingrediantsid:any
  totalMealPrice: number | undefined;
  meal :any;
  ID:any
  count:any;

  ngOnInit(): void {

    this.myService.GetMealByID(this.ID).subscribe(
      {
        next:(data:any)=>{
          this.meal = data;
          this.ingrediants=this.meal[0].ingredients_details
          const cart: any = this.myService.getCart();
          const cartItems = JSON.parse(cart);
          const ingredientIds = cartItems.filter((obj: { id: any,count:any; }) =>obj.count==this.count && obj.id == this.ID ).flatMap((item: { ingredients: any; }) => item.ingredients)
          const matchedIngredients = this.ingrediants.filter((ingredient: { _id: any; }) => ingredientIds.includes(ingredient._id));
          this.ingrediants=matchedIngredients;

        },
        error:(err)=>{console.log(err)}
      }
    );

  }
  delete(ID:any,index: number) {
    this.ingrediants.splice(index, 1);
     this.ingrediantsid = this.ingrediants.map((obj: { _id: any; }) => obj._id);
    var cart:any=this.myService.getCart()
    cart=JSON.parse(cart)
    // cart[index].ingredients=this.ingrediants
    const mealindex = cart.findIndex((obj: any ) => obj.id === ID && obj.count==this.count );
    if (mealindex !== -1) {
      cart[mealindex].ingredients=this.ingrediantsid
      cart[mealindex].count=cart[mealindex].count - 1
    }
    this.myService.setCart(JSON.stringify(cart))
    // this.matchedIngredients=this.ingrediants
  }

}

