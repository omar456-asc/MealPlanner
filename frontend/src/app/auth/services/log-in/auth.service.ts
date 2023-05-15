import { Injectable } from '@angular/core';
// import jwt_decode from 'jwt-decode';
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
    let token = localStorage.getItem('Token');
  }

  // getRole(): any {
  //   // var object = {exp: 1684445802, iat: 1684186602, user:{email: "nehad1@gmail.com",fname: "Nehad",is_admin: true,lname: "Osman"
  //   // ,password: "$2b$10$6y/q//YAsF5ikBJZszIxTucFw6okS4J1KY6N5Hl.rxZq37CkpW.se",__v: 0,_id: "645eac7cd3a248afb1bae05a"} }
  //   // return object.user.is_admin;
  //   // Decode token and extract role information
  //   const token = localStorage.getItem('Token');
  //   console.log('user token', token);
  //   if (token) {
  //     var decoded = jwt_decode(token);
  //   }
  //   // return decoded.user.is_admin;
  //   return decoded;
  // }
}
