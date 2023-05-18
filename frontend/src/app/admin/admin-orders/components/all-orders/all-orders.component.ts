import { Component } from '@angular/core';
import { AdminOrdersServiceService } from '../../services/admin-orders-service.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
  orders: any
  constructor(public mealService: AdminOrdersServiceService) { }

  ngOnInit(): void {
    this.mealService.getAllOrders().subscribe(
      {
        next: (data: any) => {
          this.orders = data;
        },
        error: (err) => { console.log(err) }
      }
    )

    console.log(this.orders);
  }

  getStatusClass(status: string) :string {
    if (status === 'pending') {
      return 'badge badge-warning';
    } else if (status === 'confirmed'){
      return 'badge badge-success';

    } else if (status === 'rejected'){
      return 'badge badge-danger';

    }
    return 'badge ';

  }

}
