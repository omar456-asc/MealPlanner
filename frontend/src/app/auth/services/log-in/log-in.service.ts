import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private readonly loginUrl = 'http://localhost:7400/api/users/login';

  constructor(private readonly myClient:HttpClient) { }

  LOGIN(logInUser:any){
    return this.myClient.post(this.loginUrl, logInUser);
  }

}
