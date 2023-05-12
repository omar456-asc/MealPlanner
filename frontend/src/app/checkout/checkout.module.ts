import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckoutComponent, ShoppingCartComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [CheckoutComponent, ShoppingCartComponent],
})
export class CheckoutModule {}
