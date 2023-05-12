import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  quantityInput = 1;

  minus() {
    let currentValue = this.quantityInput;
    if (currentValue > 1) {
      this.quantityInput = currentValue - 1;
    }
  }

  plus() {
    let currentValue = this.quantityInput;

    this.quantityInput = currentValue + 1;
  }
}
