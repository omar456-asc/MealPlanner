import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root',
})
export class AdminMealsServiceService {
  private readonly Base_URL: string;

  constructor(
    private readonly HttpClient: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('products');
  }
  //Methods [All Requests]
  GetAllMeals() {
    //method[Get-Delete-Put-Patch]
    return this.HttpClient.get(this.Base_URL);
  }
  GetMealByID(id: any) {
    return this.HttpClient.get(this.Base_URL + '/' + id);
  }
  addNewMeal(newMeal: FormData) {
    return this.HttpClient.post(this.Base_URL, newMeal,
      // { reportProgress: true, observe: 'events' }
      );
  }
}
