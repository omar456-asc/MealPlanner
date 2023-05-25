import { Component } from '@angular/core';
import { AdminOrdersServiceService } from '../../admin-orders/services/admin-orders-service.service';
@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css']
})
export class AdminSideNavComponent {
  orders: any
  pnedingOrdersCount:any

  constructor(public OrderService: AdminOrdersServiceService) { }

  ngOnInit(): void {

    this.OrderService.getAllOrders().subscribe(
      {
        next: (data :any) => {
          this.orders = data;
          this.orders = data.filter((order: any) => order.status === 'pending');

          this.pnedingOrdersCount = this.orders.length

        },
        error: (err) => { console.log(err) }
      }
    )
  }
}
