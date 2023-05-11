import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: any;

  constructor() { }

  setToken(token: any) {
    this.token = token;
    localStorage.setItem('jwtToken', token.token);
  }

  getToken() {
    return this.token;
  }

  isLoggedIn() {
    return !!this.token;
  }
}