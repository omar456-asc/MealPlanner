import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: any;
  private id: any;
  constructor() {}

  setToken(token: any) {
    this.token = token;
    localStorage.setItem('Token', token);
  }

  getToken() {
    this.token = localStorage.getItem('Token') || null;
    return this.token;
  }

  isLoggedIn() {
    this.token = localStorage.getItem('Token') || null;
    return !!this.token;
  }

  setUserID(id: any) {
    this.id = id;
    localStorage.setItem('id', id);
  }

  getUserID() {
    return localStorage.getItem('id');
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('id');
  }

  isUserLoggedIn() {
    return localStorage.getItem('Token');
  }

  getUserToken() {
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

  getRole() {
    const token = localStorage.getItem('Token');
    console.log('user token', token);
    if (token) {
      const decoded = jwt_decode(token) as {
        id: string;
        is_admin: boolean;
      };
      const isAdmin = decoded.is_admin;
      return isAdmin;
    }
    return false;
  }
}
