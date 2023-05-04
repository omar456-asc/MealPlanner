import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSharedModule } from './admin-shared/admin-shared.module';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { LatestOrdersComponent } from './dashboard/latest-orders/latest-orders.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    LatestOrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminSharedModule
  ]
})
export class AdminModule { }