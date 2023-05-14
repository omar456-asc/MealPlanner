import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllMealsService } from '../../services/all-meals.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent  implements OnInit {
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
          console.log(this.Meal)
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}
