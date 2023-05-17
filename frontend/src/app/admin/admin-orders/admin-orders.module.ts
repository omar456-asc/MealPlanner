import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { AdminSharedModule } from '../admin-shared/admin-shared.module';



@NgModule({
  declarations: [
    AllOrdersComponent
  ],
  imports: [
    CommonModule,
    AdminSharedModule,
  ],exports:[
    AllOrdersComponent

  ]
})
export class AdminOrdersModule { }
