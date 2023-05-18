import { Component } from '@angular/core';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';
import { UsersService } from 'src/app/admin/users/services/users.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  products: any
  users:any
  constructor(public mealsService: AllMealsService, public UsersService: UsersService) {

  }

  ngOnInit(): void {
    this.mealsService.GetAllMeals().subscribe(
      {
        next: (data) => {
          this.products = data;
        },
        error: (err) => { console.log(err) }
      }
    )

    this.UsersService.getLatest8users().subscribe(
      {
        next: (data) => {
          this.users = data;
        },
        error: (err) => { console.log(err) }
      }
    )
  }

}
