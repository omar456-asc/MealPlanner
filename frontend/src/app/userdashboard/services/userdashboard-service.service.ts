import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserdashboardServiceService {
  private readonly Base_URL = 'http://localhost:7400/api/order';
  constructor(private readonly HttpClient: HttpClient) {}

  getOrdersByUserId(id: any) {
    return this.HttpClient.get(this.Base_URL + '/' + id);
  }
}
