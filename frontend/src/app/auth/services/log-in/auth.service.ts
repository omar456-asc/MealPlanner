import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: any;

  constructor() {}

  setToken(token: any) {
    this.token = token;
    localStorage.setItem('Token', token);
  }

  getToken() {
    return this.token;
  }

  isLoggedIn() {
    return !!this.token;
  }

  logout() {
    localStorage.removeItem('Token');
  }

  isUserLoggedIn() {
    return localStorage.getItem('Token');
  }

  getUser() {
    const token = localStorage.getItem('Token');
    if (!token) {
      return undefined;
    }
    const decoded: any = jwt_decode(token) as {
      id: string;
      is_admin: boolean;
    };
    return decoded;
  }

  getRole(): boolean | undefined {
    const token = localStorage.getItem('Token');
    console.log('user token', token);
    if (!token) {
      return undefined;
    }
    const decoded = jwt_decode(token) as {
      id: string;
      is_admin: boolean;
    };
    const isAdmin = decoded.is_admin;
    return isAdmin;
  }
}
