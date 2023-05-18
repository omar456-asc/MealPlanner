import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly baseURL = environment.baseURL;

  constructor(private readonly myClient:HttpClient) { }

  uploadProfilePic(body: any){
    const url = this.baseURL + '/users/upload-profile-pic';
    return this.myClient.post(url, body);
  }

  getProfileInfo(userId: string) {
    const url = this.baseURL + `/users/${userId}`;
    return this.myClient.get(url);
  }

}
