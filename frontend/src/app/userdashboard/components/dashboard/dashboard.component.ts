import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }
  //Bar Chart
  type = 'line';
  type2 = 'bar';
  dataa = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 45, 81, 56, 55, 40],
        backgroundColor: ['#f38b4a'],
      },
      {
        label: 'My Second dataset',
        data: [80, 59, 75, 81, 85, 55, 40],
        backgroundColor: ['#6970d5'],
      },
    ],
  };
  options = {
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            max: 90,
            min: 30,
          },
        },
      ],
    },
  };
}
