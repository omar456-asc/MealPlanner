import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminMealsServiceService } from '../../services/admin-meals-service.service';

@Component({
  selector: 'app-show-meal',
  templateUrl: './show-meal.component.html',
  styleUrls: ['./show-meal.component.css']
})
export class ShowMealComponent {


  ID: any;
  meal: any;
  constructor(myRoute: ActivatedRoute, public mealService: AdminMealsServiceService) {
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.mealService.GetMealByID(this.ID).subscribe(
      {
        next: (data) => {
          this.meal = data;
          console.log(this.meal[0])
        },
        error: (err) => { console.log(err) }
      }
    );
  }
}
