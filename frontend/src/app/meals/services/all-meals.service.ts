import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllMealsService {


  private readonly Base_URL = "http://localhost:7400/api/products";
  constructor(private readonly myClient:HttpClient) { }
  //Methods [All Requests]
  GetAllMeals(){
    //method[Get-Delete-Put-Patch]
    return this.myClient.get(this.Base_URL);
  }


  getLatest6products() {
    return this.myClient.get(this.Base_URL +'/latest6products');
  }
}
