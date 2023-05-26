import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/auth/services/log-in/auth.service';
import { ShoppingCartService } from 'src/app/checkout/service/shopping-cart.service';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';
import { SharedService } from '../../services/shared.service';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any;
  cartLength=0;
  getRole: any;
  cartid: any;
  ID: any = localStorage.getItem('id');
  constructor(
    private authService: AuthService,
    private shared: SharedService,
    private mymeals: AllMealsService,
    public myService: ShoppingCartService
  ) {
    console.log(this.authService.isUserLoggedIn());
    this.isLoggedIn = this.authService.isUserLoggedIn();
    this.getRole = this.authService.getRole();
  }
  ngOnInit(): void {
    var cart:any=localStorage.getItem('cart')
    this.cartLength=JSON.parse(cart).length|0

}
  logout() {
    var cart: any = this.mymeals.getCart();
    this.cartid = JSON.parse(cart);
    if(!cart){
      return console.log("No Cart");
    }
    this.myService.AddToUserCart(this.cartid, this.ID).subscribe(
      (data: any) => {
        console.log('done');
        localStorage.removeItem('cart');
        this.authService.logout();
        this.isLoggedIn = null;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
