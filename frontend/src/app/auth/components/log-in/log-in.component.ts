import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../services/log-in/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  authUser:any;

  constructor(private myService:LogInService){  }

  Add( email:any, password:any){
    let logInUser = { email, password};
    this.myService.LOGIN(logInUser).subscribe(
      (data)=>{
        this.authUser= data;
        console.log(this.authUser);
      }
    ,(err)=>{console.log("not authenticated user")

  });


  }

}
