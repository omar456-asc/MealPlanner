import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardComponent } from './dashboard.component';
import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { LatestOrdersComponent } from './latest-orders/latest-orders.component';



@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    AdminSharedModule
  ]
})
export class DashboardModule { }
