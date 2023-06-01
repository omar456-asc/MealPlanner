import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllMealsService } from '../../services/all-meals.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

// import { ShoppingCartService } from 'src/app/checkout/service/shopping-cart.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css'],
})
export class MealDetailsComponent implements OnInit {
  @ViewChild(HeaderComponent)
  header: HeaderComponent | any;
  public cart: [{ id: string; quantity: number; ingredients: any; count:any ,price:number;customized:boolean}];
  trueAlert = false;
  falseAlert = false;
  public postcart: any;
  public oldcart: string | null;
  userID = localStorage.getItem('id');
   count:any;
  maxRating = 5;
  stars = Array.from({ length: this.maxRating }, (_, i) => i + 1);
  rating = 0;


  ID: any;
  Meal: any;
  constructor(
    myRoute: ActivatedRoute,
    public myService: AllMealsService,
    private router: Router,
    private shared: SharedService
  ) {
    this.ID = myRoute.snapshot.params['id'];
    this.oldcart = localStorage.getItem('cart');
    if (this.oldcart) {
      this.cart = JSON.parse(this.oldcart);
    } else {
      this.cart = [{ id: '0', quantity: 0, ingredients: [] ,count:0,customized:false,price:0 }];
    }
  }
  ngOnInit(): void {
    this.myService.GetMealByID(this.ID).subscribe({
      next: (data) => {
        this.Meal = data;
        //console.log(this.Meal);
        this.rating = Number(this.Meal[0].rate);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  AddToCart() {
    if (this.userID) {
      if (this.cart[0].quantity === 0) {
        this.cart = [...this.cart];
        this.cart[0] = {
          id: this.ID,
          quantity: 1,
          price: this.Meal[0].price,
          count:this.Meal[0].ingredients_details.length,
          ingredients: this.Meal[0].ingredients_details?.map(
            (ingredient: { _id: any }) => ingredient._id ?? []
          ),
          customized: false,
        };
      } else {
        let index = this.cart.findIndex((item) => item.id == this.ID && item.count == this.Meal[0].ingredients_details.length )
        if (index == -1||this.Meal[0].ingredients.length!=this.cart[index].ingredients.length) {
          this.cart.push({
            id: this.ID,
            quantity: 1,
            price: this.Meal[0].price,
            count:this.Meal[0].ingredients_details.length,
            ingredients: this.Meal[0].ingredients_details?.map(
              (ingredient: { _id: any }) => ingredient._id ?? []
            ),
            customized: false,
          });
        } else {

          this.cart[index].quantity = Number(this.cart[index].quantity) + 1;

      }

      }

      this.myService.setCart(JSON.stringify(this.cart));
      this.trueAlert = true;
      this.header.cartLength=this.cart.length;
    } else {
      this.falseAlert = true;
    }

  }
  //function to get ingredients count from meal to know if the meal customize

  //rating function

  rate(star: number) {
    this.rating = star;
    let value=this.rating
    let userID=this.userID
    let ratebody = { userID, value };
    console.log(ratebody)
    this.myService.RateMeal(this.ID,ratebody).subscribe((response: any) => {
      this.ngOnInit();
    },
    (err) => {
     console.log(err);
    }
    );
  }
  isStarFilled(star: number): boolean {
    if (Math.abs(star-Math.floor(star))<Math.abs(star-Math.ceil(star))) {
      return star <= this.rating;
    } else {
      return star - this.rating <= 0.5
    }
  }

}

