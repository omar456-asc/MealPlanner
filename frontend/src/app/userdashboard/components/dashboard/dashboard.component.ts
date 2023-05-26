import { Component } from '@angular/core';
import { UserdashboardServiceService } from '../../services/userdashboard-service.service';
import { ActivatedRoute } from '@angular/router';
import { AdminOrdersServiceService } from 'src/app/admin/admin-orders/services/admin-orders-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  ID: any = localStorage.getItem('id');
  orders: any;
  category: any;
  totalPrice: any;
  totalPriceValues: any;
  totalOrdersPrice: any;
  totalCategory: any;
  rate: any;
  allRates: any;
  highestRate: any;
  highestRateCategory: any;
  data: any;
  orderDetails: any;
  options: any;
  data1: any;
  data2: any;
  type2: any;
  type1: any;

  //
  ingredients: any;
  summary: any;

  constructor(
    myRoute: ActivatedRoute,
    public UserdashboardServiceService: UserdashboardServiceService,
    private AdminOrdersServiceService: AdminOrdersServiceService
  ) {
    this.totalPrice = 0.0;
    this.orders = [];
    this.totalPriceValues = [];
    this.totalCategory = [];
    this.totalOrdersPrice = 0.0;
    this.allRates = [];
    this.highestRate = 0;
    this.highestRateCategory = '';
    this.orderDetails = [];
  }

  ngOnInit(): void {
    this.UserdashboardServiceService.getOrdersByUserId(this.ID).subscribe({
      next: (data: any) => {
        this.data = data;
        console.log(this.data);
        for (let i = 0; i < data.orders.length; i++) {
          for (let j = 0; j < data.orders[i].meals.length; j++) {
            let meal = data.orders[i].meals[j];

            this.totalPrice += parseFloat(meal.price);
            this.rate = parseFloat(meal.rate);
            this.category = meal.category;
            //
            this.ingredients = meal.ingredients;
            this.summary = meal.summary;
            if (this.rate > this.highestRate) {
              this.highestRate = this.rate;
              this.highestRateCategory = this.category;
            }
          }
          this.orders.push(`Order ${i + 1}`);
          this.totalPriceValues.push(this.totalPrice);
          this.totalCategory.push(this.category);
          this.totalOrdersPrice += this.totalPrice;
          this.allRates.push(this.rate);
          this.orderDetails.push({
            orderId: data.orders[i].order._id,
            status: data.orders[i].order.status,
            totalPrice: this.totalPrice,
          });
          // console.log(this.orderDetails);
          // console.log(
          //   ` ${this.orders[i]}: Total price = ${this.totalPrice}, Category = ${this.category}`
          // );
        }

        //Bar Chart
        this.type2 = 'line';
        this.type1 = 'bar';
        this.data1 = {
          labels: this.orders,
          datasets: [
            {
              label: 'total price per order',
              data: this.totalPriceValues,
              backgroundColor: ['black'],
            },
          ],
        };
        this.data2 = {
          labels: this.totalCategory,
          datasets: [
            {
              label: 'category per rate',
              data: this.allRates,
              backgroundColor: ['#d4af37'],
            },
          ],
        };
        this.options = {
          maintainAspectRatio: true,
          responsive: true,
          // maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        };
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getStatusClass(status: string): string {
    if (status === 'pending') {
      return 'badge badge-warning';
    } else if (status === 'confirmed') {
      return 'badge badge-success';
    } else if (status === 'rejected') {
      return 'badge badge-danger';
    } else if (status === 'cancelled') {
      return 'badge badge-secondary';
    }else if (status === 'payed') {
      return 'badge badge-primary';
    }
    return 'badge ';
  }
  openModal(): void {
    const modal = document.querySelector('.modal-overlay') as HTMLElement;
    if (modal) {
      modal.style.display = 'flex';
    }
  }
  closeModal(): void {
    const modal = document.querySelector('.modal-overlay') as HTMLElement;
    if (modal) {
      modal.style.display = 'none';
    }
  }
  updateOrderStatus(id: any, status: any) {
    this.AdminOrdersServiceService.updateOrderStatus(id, status).subscribe(
      () => this.ngOnInit(),
      (err) => {
        console.log(err);
      }
    );
    console.log(id, status);
  }
}
