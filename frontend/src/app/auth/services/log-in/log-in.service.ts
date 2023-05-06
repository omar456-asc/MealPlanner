import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private readonly loginUrl = 'http://localhost:7400/api/users';

  constructor(private readonly myClient:HttpClient) { }

  GetAllUsers(){
    //method[Get-Delete-Put-Patch]
    return this.myClient.get(this.loginUrl);
  }

}
