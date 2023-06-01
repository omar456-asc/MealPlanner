import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartModule } from 'angular2-chartjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [UserdashboardComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ChartModule,
    NgxPaginationModule,
    RouterLink,
  ],
  exports: [UserdashboardComponent, DashboardComponent],
})
export class UserdashboardModule {}
