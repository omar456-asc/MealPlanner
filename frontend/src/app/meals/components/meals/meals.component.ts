import { Component, OnInit } from '@angular/core';
import { AllMealsService } from '../../services/all-meals.service';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'] 
})
export class MealsComponent implements OnInit {
  Meals:any;
  LocalStorageId:any = localStorage.getItem('id');
  filteredCategories:any;
  favorite:any;
  errorMessage: string | undefined;
  card={
    active:true
  };
  constructor(public mealService:AllMealsService, public getProfile:ProfileService){

  }
  ngOnInit(): void {
    this.getFavorite();
    this.mealService.GetAllMeals().subscribe(
      {
        next:(data:any)=>{
          this.Meals = data;

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
         this.filteredCategories=value
      },
      error:(err)=> {
        this.filteredCategories=null;
        console.log(err)
      },
    }

    )
  }

  getFavorite(){

    this.getProfile.getProfileInfo(this.LocalStorageId).subscribe({
      next:(value:any)=>{
        this.favorite = value.favorite;
        console.log(this.favorite);
      },
      error:(err)=>{
        this.favorite =null;
        console.log(err);
      }
    })
  }

  AddToFav(Id:any){
    const userId=this.LocalStorageId
    const mealId=Id
    console.log(mealId);
    this.getProfile.AddToFavorite(userId,mealId).subscribe({
      next:(value:any)=>{
        console.log(value);
        // this.ngOnInit();
        this.getFavorite()
      },
      error:(err)=>{
        this.getFavorite()
        console.log(err);
      }
    })
  }
  isFavorite(mealId: number) {
    const fav=this.favorite.includes(mealId);
    return fav
  }


  filter(event: MouseEvent,categoryy:string){
    const links = document.querySelectorAll('.suggestion-wrap a');
    links.forEach(link => link.classList.remove('active'));
    const targetElement = event.target as HTMLElement; // cast event.target to the HTMLElement type
    if (HTMLElement) { // use optional chaining to check if event.target is not null
      targetElement.classList.add('active'); // add the 'active' class to the clicked link
    }

    if(categoryy){
     this.filteredCategories = this.Meals.filter((category: any) => category.category.toLowerCase().includes(categoryy.toLowerCase()))

    }
    else{
      this.filteredCategories = null
    }
  }

}
