import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IngredientsServiceService {
  private readonly Base_URL = 'http://localhost:7400/api/ingredients';
  constructor(private readonly HttpClient: HttpClient) {}
  GetAllIngredients() {
    return this.HttpClient.get(this.Base_URL);
  }
  GetIngredientByID(id: any) {
    return this.HttpClient.get(this.Base_URL + '/' + id);
  }
  addNewIngredient(newIngredient: any) {
    return this.HttpClient.post(this.Base_URL, newIngredient);
  }
}
