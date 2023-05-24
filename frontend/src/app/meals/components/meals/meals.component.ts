import { Component, OnInit } from '@angular/core';
import { AllMealsService } from '../../services/all-meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  Meals:any;
  errorMessage: string | undefined;
  card={
    active:true
  };
  constructor(public mealService:AllMealsService){

  }
  ngOnInit(): void {
    this.mealService.GetAllMeals().subscribe(
      {
        next:(data:any)=>{
          this.Meals = data;
          for (let i = 0; i < this.Meals.length; i++) {
            this.Meals[i].favourite = false;
          }
          console.log(this.Meals)
        },
        error:(err)=>{console.log(err)}
      }
    )
  }

  SearchMeal(key:HTMLInputElement){
    const searchQuery = key.value;
    console.log(searchQuery);
    //let searchKey = { key };
    this.mealService.SearchMeal(searchQuery).subscribe({
      next:(value:any)=>{
         this.Meals=value
      },
      error:(err)=> {
        console.log(err)
      },
    }

    )
  }

  AddToFav(id:any){
    const result = this.Meals.find(function (obj:any) {
        return obj.id === id;
      });
    result.favourite=!result.favourite;
  }

}
