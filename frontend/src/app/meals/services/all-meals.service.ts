import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllMealsService {
  private cart: any[]=[];

  private readonly Base_URL = "http://localhost:7400/api/products";
  constructor(private readonly myClient:HttpClient) { }
//#region GetAllMeals
  GetAllMeals(){
    //method[Get-Delete-Put-Patch]
    return this.myClient.get(this.Base_URL);
  }
//#endregion
//#region GetMealByID
  GetMealByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }
//#endregion
//#region MealLocalStorage
  setCart(cart: any) {
    localStorage.setItem('cart', cart);
  }
  getCart(){

    return  localStorage.getItem('cart')
  }

//#endregion
}
