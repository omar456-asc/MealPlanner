import { Component } from '@angular/core';
import { AdminOrdersServiceService } from '../../admin-orders/services/admin-orders-service.service';

@Component({
  selector: 'app-latest-orders',
  templateUrl: './latest-orders.component.html',
  styleUrls: ['./latest-orders.component.css']
})
export class LatestOrdersComponent {
  orders: any

  constructor(public mealService: AdminOrdersServiceService) { }

  ngOnInit(): void {
    this.mealService.getAllOrders().subscribe(
      {
        next: (data: any) => {
          this.orders = data;
          this.orders = data.filter((order: any) => order.status === 'pending');

        },
        error: (err) => { console.log(err) }
      }
    )

    console.log(this.orders);
  }


  getStatusClass(status: string): string {
    if (status === 'pending') {
      return 'badge badge-warning';
    } else if (status === 'confirmed') {
      return 'badge badge-success';

    } else if (status === 'rejected') {
      return 'badge badge-danger';

    }
    return 'badge ';

  }
}
