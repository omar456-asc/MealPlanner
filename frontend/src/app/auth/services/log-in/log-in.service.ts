import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private readonly Base_URL: string;

  constructor(
    private readonly myClient: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('users');
  }

  LOGIN(logInUser: any) {
    return this.myClient.post(this.Base_URL + '/login', logInUser);
  }
  GetUserCart(ID: any) {
    return this.myClient.get(this.Base_URL + '/' + ID);
  }
}
