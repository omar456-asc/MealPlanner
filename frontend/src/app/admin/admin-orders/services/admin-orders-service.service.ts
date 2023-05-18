import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminOrdersServiceService {


  private readonly Base_URL = "http://localhost:7400/api/orders";
  constructor(private readonly HttpClient: HttpClient) { }
  //Methods [All Requests]
  GetAllMeals() {
    //method[Get-Delete-Put-Patch]
    return this.HttpClient.get(this.Base_URL);
  }
  GetMealByID(id: any) {
    return this.HttpClient.get(this.Base_URL + "/" + id);
  }
}
