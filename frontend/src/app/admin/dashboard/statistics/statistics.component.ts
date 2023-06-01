import { Component } from '@angular/core';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';
import { UsersService } from 'src/app/admin/users/services/users.service';
import { AdminOrdersServiceService } from '../../admin-orders/services/admin-orders-service.service';
import { IngredientsServiceService } from '../../ingredients/services/ingredients-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  products: any;
  users: any;
  orders: any;
  ingredient: any;

  orderLength: any;
  ingredientLength: any;

  constructor(
    public mealsService: AllMealsService,
    public UsersService: UsersService,
    public OrderService: AdminOrdersServiceService,
    public ingredientService: IngredientsServiceService

  ) {}

  ngOnInit(): void {
    this.mealsService.GetAllMeals().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.UsersService.getLatest8users().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.OrderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.orderLength = this.orders.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
     this.ingredientService.GetAllIngredients().subscribe({
      next: (data) => {
        this.ingredient = data;
        this.ingredientLength = this.ingredient.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
