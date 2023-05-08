import { Component } from '@angular/core';
import { SignUpService } from '../../services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  authUser:any;

  constructor(private myUser:SignUpService){  }

  AddNewUser(fname:any, lname:any, email:any, password:any){
    let signupUser = { fname, lname, email, password};
    this.myUser.AddNewUser(signupUser).subscribe(
      (data)=>{
        this.authUser=data;
        console.log(this.authUser);
      },
      (err)=>{
        console.log('There is a probblem');
      }

    )}

}
