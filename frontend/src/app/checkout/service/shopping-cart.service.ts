import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private readonly Base_URL: string;

  constructor(
    private readonly myClient: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('cart');
  }
  //#region GetAllMeals
  GetCart(id: any) {
    //method[Get-Delete-Put-Patch]

    return this.myClient.get(this.Base_URL + '/' + id);
  }
  AddToUserCart(cart: any, userID: any) {
    return this.myClient.post(this.Base_URL + '/' + userID, cart);
  }
}
