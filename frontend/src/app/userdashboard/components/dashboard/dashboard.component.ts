import { Component } from '@angular/core';
import { UserdashboardServiceService } from '../../services/userdashboard-service.service';
import { ActivatedRoute } from '@angular/router';

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
  data: any;
  options: any;
  data1: any;
  data2: any;
  type2: any;
  type1: any;

  constructor(
    myRoute: ActivatedRoute,
    public UserdashboardServiceService: UserdashboardServiceService
  ) {
    this.totalPrice = 0.0;
    this.orders = [];
    this.totalPriceValues = [];
    this.totalCategory = [];
    this.totalOrdersPrice = 0.0;
    this.allRates = [];
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
          }
          this.orders.push(`Order ${i + 1}`);
          this.totalPriceValues.push(this.totalPrice);
          this.totalCategory.push(this.category);
          this.totalOrdersPrice += this.totalPrice;
          this.allRates.push(this.rate);
          console.log(
            ` ${this.orders[i]}: Total price = ${this.totalPrice}, Category = ${this.category}`
          );
        }

        //   //Bar Chart
        //   this.type2 = 'line';
        //   this.type1 = 'bar';
        //   this.data1 = {
        //     labels: this.orders,
        //     datasets: [
        //       {
        //         label: 'total price per order',
        //         data: this.totalPriceValues,
        //         backgroundColor: ['black'],
        //       },
        //     ],
        //   };
        //   this.data2 = {
        //     labels: this.totalCategory,
        //     datasets: [
        //       {
        //         label: 'category per rate',
        //         data: this.allRates,
        //         backgroundColor: ['#d4af37'],
        //       },
        //     ],
        //   };
        //   this.options = {
        //     maintainAspectRatio: true,
        //     responsive: true,
        //     // maintainAspectRatio: false,
        //     scales: {
        //       yAxes: [
        //         {
        //           ticks: {
        //             beginAtZero: true,
        //           },
        //         },
        //       ],
        //     },
        //   };
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
