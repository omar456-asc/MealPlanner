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
  cartLength$: Observable<number>;
  isLoggedIn: any;

  cartLength: any;
  cartid:any;
  ID: any = localStorage.getItem('id');
  constructor(private authService: AuthService,
    private shared:SharedService,
    private mymeals:AllMealsService,
    public myService: ShoppingCartService,) {
    console.log(this.authService.isUserLoggedIn());
    this.isLoggedIn = this.authService.isUserLoggedIn();
    this.cartLength$ = this.shared.cartLength$;
    }
  ngOnInit(): void {

  }
  logout() {
    this.authService.logout();
    this.isLoggedIn = null;
    var cart:any=this.mymeals.getCart()
    this.cartid = JSON.parse(cart)
    this.myService.AddToUserCart(this.cartid, this.ID).subscribe(
      (data: any) => {
        console.log("done");
        localStorage.removeItem('cart');
      },
      (err) => {
     console.log("error")
      }
    );
  }
}
