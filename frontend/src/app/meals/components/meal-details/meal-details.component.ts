import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllMealsService } from '../../services/all-meals.service';




@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent  implements OnInit {
   cart: [{"id":string,"quantity":number}];
  public oldcart: string | null;
  maxRating = 5;
  stars = Array.from({ length: this.maxRating }, (_, i) => i + 1);
  rating = 0;

  rate(star: number) {
    this.rating = star;}
  ID:any;
  Meal:any;
  constructor(myRoute:ActivatedRoute,public myService: AllMealsService){
    this.ID = myRoute.snapshot.params["id"];
     this.oldcart = localStorage.getItem('cart');
    if (this.oldcart) {
      this.cart = JSON.parse(this.oldcart);
    } else {
      this.cart =[{"id":"0","quantity":0}];
    }

  }
  ngOnInit(): void {
    this.myService.GetMealByID(this.ID).subscribe(
      {
        next:(data)=>{
          //console.log(data);
          this.Meal = data;
this.rating=Number(this.Meal[0].rate);
          console.log(this.Meal)
        },
        error:(err)=>{console.log(err)}
      }
    );
  }
  AddToCart(){
    if(this.cart[0].id=="0"){
      this.cart.shift();
    }
    let index = this.cart.findIndex(item => item.id == this.ID);
    if(index ==-1){
   this.cart.push({"id":this.ID,"quantity":1});}
   else{
    this.cart[index].quantity=Number(this.cart[index].quantity)+1;
   }

    this.myService.setCart(JSON.stringify(this.cart));

  }

}
