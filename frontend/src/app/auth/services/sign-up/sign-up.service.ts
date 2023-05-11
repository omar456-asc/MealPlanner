import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private readonly SignupUrl = 'http://localhost:7400/api/users/signup';

  constructor(private readonly myUser:HttpClient) { }
  AddNewUser(signupUser:any){
    return this.myUser.post(this.SignupUrl, signupUser);
  }
}
