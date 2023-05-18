import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private readonly Base_URL: string;

  constructor(
    private readonly myUser: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('users/signup');
  }
  AddNewUser(signupUser: any) {
    return this.myUser.post(this.Base_URL, signupUser);
  }
}
