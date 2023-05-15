import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';

@NgModule({
  declarations: [PaymentFormComponent, PaymentComponent],

  imports: [CommonModule, SharedModule, FormsModule],
  exports: [PaymentFormComponent, PaymentComponent],
})
export class PaymentModule {}
