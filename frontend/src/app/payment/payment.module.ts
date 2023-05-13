import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './components/payment/payment.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    PaymentComponent
  ],
})
export class PaymentModule { }
