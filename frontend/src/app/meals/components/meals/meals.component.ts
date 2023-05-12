import { Component, OnInit } from '@angular/core';
import { AllMealsService } from '../../services/all-meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  Meals:any;
  card={
    active:true
  };
  constructor(public myService:AllMealsService){


  }
  ngOnInit(): void {
    this.myService.GetAllMeals().subscribe(
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




  AddToFav(id:any){
    const result = this.Meals.find(function (obj:any) {
        return obj.id === id;
      });
    result.favourite=!result.favourite;
  }

}
