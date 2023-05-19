import { Component } from '@angular/core';
import { AdminOrdersServiceService } from '../../services/admin-orders-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css'],
})
export class ShowOrderComponent {
  ID: any;
  data: any;
  order: any;
  user: any;
  meals: any;

  constructor(
    myRoute: ActivatedRoute,
    public mealService: AdminOrdersServiceService
  ) {
    this.ID = myRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mealService.getOrderByID(this.ID).subscribe({
      next: (data: any) => {
        this.data = data;
        this.order = data[0].order;
        this.user = data[1].user;
        this.meals = data[2].meals;
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log(this.data);
  }
}
