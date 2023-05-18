import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private readonly Base_URL = "http://localhost:7400/api/cart";
  constructor(private readonly myClient:HttpClient) { }
//#region GetAllMeals
  GetCart(id:any){
    //method[Get-Delete-Put-Patch]

    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddToUserCart(cart:any,userID:any){
    return this.myClient.post(this.Base_URL+"/"+userID,cart);
  }

}
