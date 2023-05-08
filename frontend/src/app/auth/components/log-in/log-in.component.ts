import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../services/log-in/log-in.service';
import { AuthService } from '../../services/log-in/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {


  constructor(private myService:LogInService,private authService: AuthService){  }

  Add( email:any, password:any){
    let logInUser = { email, password};
    this.myService.LOGIN(logInUser).subscribe(
      (response)=>{
        this.authService.setToken(response);
        console.log(this.authService.getToken());
      }
    ,(err)=>{console.log(err)

  });


  }

}
