import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root',
})
export class UserdashboardServiceService {
  private readonly Base_URL: string;
  constructor(
    private readonly HttpClient: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('order');
  }

  getOrdersByUserId(userID: any) {
    return this.HttpClient.get(this.Base_URL + '/' + userID);
  }
}
