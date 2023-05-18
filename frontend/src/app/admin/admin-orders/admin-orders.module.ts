import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { ShowOrderComponent } from './components/show-order/show-order.component';



@NgModule({
  declarations: [
    AllOrdersComponent,
    ShowOrderComponent
  ],
  imports: [
    CommonModule,
    AdminSharedModule,
  ],exports:[
    AllOrdersComponent

  ]
})
export class AdminOrdersModule { }
