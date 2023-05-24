import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root',
})
export class AllMealsService {

  private readonly Base_URL: string;

  constructor(
    private readonly myClient: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('products');
  }

  //#region SearchMeal
  SearchMeal(key:any){
    return this.myClient.get(this.Base_URL + '/search' + '/' + key )
  }
  //#endregion
  //#region rateMeal

  RateMeal(id: any,rate: any){
    return this.myClient.post(this.Base_URL + '/' + id,rate)
  }
  //#endregion

  //#region GetAllMeals
  GetAllMeals() {
    //method[Get-Delete-Put-Patch]
    return this.myClient.get(this.Base_URL);
  }

  getLatest6products() {
    return this.myClient.get(this.Base_URL + '/latest6products');
  }
  //#endregion
  //#region GetMealByID
  GetMealByID(id: any) {
    return this.myClient.get(this.Base_URL + '/' + id);
  }
  //#endregion

  //#region MealLocalStorage
  setCart(cart: any) {
    localStorage.setItem('cart', cart);
  }
  getCart() {
    return localStorage.getItem('cart');
  }

  //#endregion
}
