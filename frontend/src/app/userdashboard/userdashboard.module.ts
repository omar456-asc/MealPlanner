import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [UserdashboardComponent, DashboardComponent],
  imports: [CommonModule, SharedModule, FormsModule, ChartModule],
  exports: [UserdashboardComponent, DashboardComponent],
})
export class UserdashboardModule {}
