import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';

@Component({
  selector: 'app-customize-meal',
  templateUrl: './customize-meal.component.html',
  styleUrls: ['./customize-meal.component.css'],
})
export class CustomizeMealComponent implements OnInit {
  constructor(
    public myService: AllMealsService,
    private router: Router,
    myRoute: ActivatedRoute
  ) {
    this.ID = myRoute.snapshot.params['id'];
    this.count = myRoute.snapshot.queryParamMap.get('count');
    this.totalMealPrice = 3000;
  }
  matchedIngredients: any = [];
  ingrediants: any = [];
  ingrediantsid: any;
  totalMealPrice: number | undefined;
  meal: any;
  ID: any;
  count: any;
  showConfirmationPrompt: boolean = false;
  mealIndex: number | undefined;

  ngOnInit(): void {
    this.myService.GetMealByID(this.ID).subscribe({
      next: (data: any) => {
        this.meal = data;
        //getting ingredients details from database
        this.ingrediants = this.meal[0].ingredients_details;
        const cart: any = this.myService.getCart();
        //getting cart from local storage
        const cartItems = JSON.parse(cart);
        //filter the cart to get the meal i want to customize,then getting only the ingredients
        const ingredientIds = cartItems
          .filter(
            (obj: { id: any; count: any }) =>
              obj.count == this.count && obj.id == this.ID
          )
          .flatMap((item: { ingredients: any }) => item.ingredients);
        // filter our ingredients array, make it contain only the ingredients inside the localstorage
        const matchedIngredients = this.ingrediants.filter(
          (ingredient: { _id: any }) => ingredientIds.includes(ingredient._id)
        );
        this.ingrediants = matchedIngredients;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  delete(ID: any, index: number) {
    var cart: any = this.myService.getCart();
    cart = JSON.parse(cart);
    // cart[index].ingredients=this.ingrediants
    const mealindex = cart.findIndex(
      (obj: any) => obj.id === ID && obj.count == this.count
    );
    if (mealindex !== -1) {
      if (cart[mealindex].count == 1) {
        const confirmDelete = confirm(
          'Are you sure you want to delete this meal?'
        );
        if (confirmDelete) {
          this.ingrediants.splice(index, 1);
          this.ingrediantsid = this.ingrediants.map(
            (obj: { _id: any }) => obj._id
          );
          cart[mealindex].ingredients = this.ingrediantsid;
          let mealIndex = cart.findIndex((item: { id: any }) => item.id == ID);
          cart.splice(mealIndex, 1);
          cart[mealindex].count = cart[mealindex].count - 1;
        }
      } else {
        this.ingrediants.splice(index, 1);
        const ingrediantsid = this.ingrediants.map(
          (obj: { _id: any }) => obj._id
        );
        cart[mealindex].ingredients = ingrediantsid;
        cart[mealindex].count = cart[mealindex].count - 1;
        cart[mealindex].customized = true;
      }
      this.myService.GetMealByID(this.ID).subscribe({
        next: (data: any) => {
          this.meal = data;
          this.ingrediants = this.meal[0].ingredients_details;
          const cart: any = this.myService.getCart();
          const cartItems = JSON.parse(cart);
          const ingredientIds = cartItems
            .filter(
              (obj: { id: any; count: any }) =>
                obj.id === this.ID && obj.count == this.count
            )
            .flatMap((item: { ingredients: any }) => item.ingredients);
          const matchedIngredients = this.ingrediants.filter(
            (ingredient: { _id: any }) => ingredientIds.includes(ingredient._id)
          );
          this.ingrediants = matchedIngredients;
        },
        error: (err) => {
          console.log(err);
        },
      });
      if (cart[mealindex].count === 0) {
        this.router.navigateByUrl('/cart');
        location.reload();
      }
    }
  }
}
