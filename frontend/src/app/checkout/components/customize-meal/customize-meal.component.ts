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

  totalMealPrice: number | undefined;
  meal :any;
  ID:any

  ngOnInit(): void {
    console.log(this.ID);
    this.myService.GetMealByID(this.ID).subscribe(
      {
        next:(data:any)=>{

          this.meal = data;
console.log(this.meal);

        },
        error:(err)=>{console.log(err)}
      }
    );
  }

  removeIngredient(ingredient: any) {
    // Implement logic to remove the ingredient from the meal
    // You can update the meal's ingredient array and recalculate the total price
    alert('Removed successfully');
  }
}
