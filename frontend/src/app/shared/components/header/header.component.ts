import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/auth/services/log-in/auth.service';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn: any;
  public  cart: [{"id":string,"quantity":number}];
  public oldcart: string | null;
  cartLength: number;
  constructor(private authService: AuthService,
    private mymeals:AllMealsService) {
    console.log(this.authService.isUserLoggedIn());
    this.isLoggedIn = this.authService.isUserLoggedIn();
    this.oldcart = localStorage.getItem('cart');
    if (this.oldcart) {
      this.cart = JSON.parse(this.oldcart);
      this.cartLength=this.cart.length;
    } else {
      this.cart =[{"id":"0","quantity":0}];
      this.cartLength=0
    }
  }
  logout() {
    this.authService.logout();
    this.isLoggedIn = null;
  }
}
