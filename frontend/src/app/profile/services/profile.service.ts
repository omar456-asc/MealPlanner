import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly Base_URL: string;

  constructor(
    private readonly myClient: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('users');
  }

  uploadProfilePic(body: any) {
    const url = this.Base_URL + '/upload-profile-pic';
    return this.myClient.post(url, body);
  }

  UpdateUserProfileData(body: any) {
    const url = this.Base_URL + '/update-data';
    return this.myClient.post(url, body);
  }

  getProfileInfo(userId: string) {
    const url = this.Base_URL + `/${userId}`;
    return this.myClient.get(url);
  }
  //#region favourite
  // api/users/:userId/favorite/:mealId'
  AddToFavorite(userId:any,mealId: any) {
    return this.myClient.post(this.Base_URL +'/'+ userId + '/favorite/' + mealId,{})
  }
  //#endregion
}
