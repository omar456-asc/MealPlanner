import { Component } from '@angular/core';
import { AdminOrdersServiceService } from '../../admin-orders/services/admin-orders-service.service';

@Component({
  selector: 'app-latest-orders',
  templateUrl: './latest-orders.component.html',
  styleUrls: ['./latest-orders.component.css']
})
export class LatestOrdersComponent {
  orders: any

  constructor(public orderService: AdminOrdersServiceService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
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

  updateOrderStatus(id: any, status: any) {
    if (confirm(`Are you Sure you want to ${status} this Order `)) {
      this.orderService.updateOrderStatus(id, status).subscribe(
        () => this.ngOnInit()
        ,
        (err) => console.log(err)
      );
    }
  }

}
