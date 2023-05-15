import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllMealsService } from '../../services/all-meals.service';




@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent  implements OnInit {
  maxRating = 5;
  stars = Array.from({ length: this.maxRating }, (_, i) => i + 1);
  rating = 0;

  rate(star: number) {
    this.rating = star;}
  ID:any;
  Meal:any;
  constructor(myRoute:ActivatedRoute,public myService: AllMealsService){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetMealByID(this.ID).subscribe(
      {
        next:(data)=>{
          //console.log(data);
          this.Meal = data;
this.rating=Number(this.Meal[0].rate);
          console.log(this.Meal)
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}
