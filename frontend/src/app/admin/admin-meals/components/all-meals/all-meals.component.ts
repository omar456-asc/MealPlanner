import { Component } from '@angular/core';
import { AdminMealsServiceService } from 'src/app/admin/admin-meals/services/admin-meals-service.service';

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.css']
})
export class AllMealsComponent {
  meals: any;

  constructor(public mealService: AdminMealsServiceService) {}

  ngOnInit(): void {
    this.mealService.GetAllMeals().subscribe(
      {
        next: (data: any) => {
          this.meals = data;
        },
        error: (err) => { console.log(err) }
      }
    )
  }

}
