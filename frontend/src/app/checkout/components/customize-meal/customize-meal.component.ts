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
  ingrediants:any=[]
  totalMealPrice: number | undefined;
  meal :any;
  ID:any

  ngOnInit(): void {
    console.log(this.ID);
    this.myService.GetMealByID(this.ID).subscribe(
      {
        next:(data:any)=>{

          this.meal = data;
          this.ingrediants=this.meal[0].ingredients_details


        },
        error:(err)=>{console.log(err)}
      }
    );

  }
  delete(ID:any,index: number) {
    this.ingrediants.splice(index, 1);
    var cart:any=this.myService.getCart()
    cart=JSON.parse(cart)
    // cart[index].ingredients=this.ingrediants
    const mealindex = cart.findIndex((obj: { id: any; }) => obj.id === ID);
    if (mealindex !== -1) {
      cart[mealindex].ingredients=this.ingrediants
    }
    this.myService.setCart(JSON.stringify(cart))
  }
  removeIngredient(ingredient: any) {
    // Implement logic to remove the ingredient from the meal
    // You can update the meal's ingredient array and recalculate the total price
    alert('Removed successfully');
  }
}
