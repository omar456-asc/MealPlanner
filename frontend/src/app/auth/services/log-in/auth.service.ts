import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: any;
  private id: any;

  constructor() {}
//useridregion
  setUserID(id: any) {
    this.id = id;
    localStorage.setItem('id', id);
  }

  getUserID() {
    return this.id;
  }
  //endregion
  //tokenregion
  setToken(token: any) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    return this.token;
  }

  isLoggedIn() {
    return !!this.token;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');

  }

  isUserLoggedIn() {
    return localStorage.getItem('token');
  }
  //endregion
}
