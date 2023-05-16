import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserdashboardComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [UserdashboardComponent],
})
export class UserdashboardModule {}
