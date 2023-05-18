import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomizeMealComponent } from './components/customize-meal/customize-meal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CheckoutComponent, ShoppingCartComponent, CustomizeMealComponent],
  imports: [CommonModule, SharedModule, FormsModule,RouterModule],
  exports: [CheckoutComponent, ShoppingCartComponent,CustomizeMealComponent],
})
export class CheckoutModule {}
