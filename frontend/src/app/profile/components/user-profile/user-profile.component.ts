import { Component, ElementRef, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from 'src/app/auth/services/log-in/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  avatarUrl =
    'http://res.cloudinary.com/dquveo9pl/image/upload/v1684333006/Images/mafkm3yefhk4ccpqeogu.jpg';
  user: any;
  name: string = '';
  email: string = '';
  isPicPicked: boolean = false;
  mobile: string = '';
  address:string = '';
  age:number = 0;
  gender: string ='';
  editable = false;
  dbUser: any;

  constructor(
    private profileService: ProfileService,
    private el: ElementRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.profileService.getProfileInfo(this.user.id).subscribe(
      (data: any) => {
        console.log(data);
        this.dbUser = data;
        this.avatarUrl = data.avatar;
        this.name = data.fname + ' ' + data.lname;
        this.email = data.email;
        this.gender = data.gender;
        this.mobile = data.mobile;
        this.address = data.address;
        this.age = data.age;
      },
      (error) => console.log('Error', error)
    );
  }

  upload() {
    let inputEl: any = this.el.nativeElement.querySelector('#avatar');

    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      // a file was selected
      formData.append('file', inputEl.files.item(0));
      formData.append('userId', this.user.id);

      this.profileService.uploadProfilePic(formData).subscribe(
        (data: any) => {
          this.avatarUrl = data.url;
          console.log('Data', data);
        },
        (error) => console.log('Error', error)
      );
    }
  }

  updateUser() {
    let body = {
      'id': this.user.id,
      'fname': this.dbUser.fname,
      'lname': this.dbUser.lname,
      'email': this.dbUser.email,
      'mobile': this.dbUser.mobile,
      'address': this.dbUser.address,
      'gender': this.dbUser.gender,
      'age': this.dbUser.age,

    }
  
    this.profileService.UpdateUserProfileData(body).subscribe(
      (data: any) => {
        console.log('User profile data updated successfully!', data);
        this.name = this.dbUser.fname + ' ' + this.dbUser.lname;
        this.email = this.dbUser.email;
        this.mobile = this.dbUser.mobile;
        this.address = this.dbUser.address;
        this.gender = this.dbUser.gender;
        this.age = this.dbUser.age;
      },
      (error) => console.log('Error updating user profile data:', error)
    );
  }

  onFilePicked(target: any) {
    if (target.files.length) this.isPicPicked = true;
    else this.isPicPicked = false;
  }

  changeEditable () {
    this.editable = !this.editable
  }
}
