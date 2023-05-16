import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly Base_URL: string;

  constructor(
    private readonly HttpClient: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('users');
  }
  getAllUsers() {
    return this.HttpClient.get(this.Base_URL);
  }
  getUserByID(id: any) {
    return this.HttpClient.get(this.Base_URL + '/' + id);
  }

  addNewUser(newUser: any) {
    return this.HttpClient.post(this.Base_URL, newUser);
  }
  updateUser(id: any, newUserData: any) {
    console.log('id', id);

    return this.HttpClient.put(this.Base_URL + '/' + id, newUserData);
  }
  deleteUser(id: any) {
    return this.HttpClient.delete(this.Base_URL + '/' + id);
  }
}
