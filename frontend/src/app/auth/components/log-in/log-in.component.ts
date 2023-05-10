import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../services/log-in/log-in.service';
import { AuthService } from '../../services/log-in/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  isRegistred: boolean = false;
  emailMsg:string = '';
  passwordMsg:string = '';
  validationForm= new FormGroup({
    email: new FormControl(null, [Validators.email,Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  get isEmailValid() {
    return this.validationForm.controls["email"].valid;
  }
  get isPasswordValid() {
    return this.validationForm.controls["password"].valid;
  }
  add(){
    if(!this.validationForm.valid){

    }

  }


  constructor(private myService:LogInService,private authService: AuthService){  }

  Add( email:any, password:any){
    let logInUser = { email, password};
    this.myService.LOGIN(logInUser).subscribe(
      (response:any)=>{
        this.authService.setToken(response.token);

      }
    ,(err)=>{

      if(email==''){
        this.emailMsg = 'please enter your email'
      }

      else{
        this.emailMsg = err.error.message.email;
      }
      if(password==''){
      this.passwordMsg="Please enter your password"
    }
      else{this.passwordMsg="Incorrect password , please try again"}
  });


  }

}
