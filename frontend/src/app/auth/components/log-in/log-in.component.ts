import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../services/log-in/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  Users:any;
  constructor(public myService:LogInService){

  }
  ngOnInit(): void {
    this.myService.GetAllUsers().subscribe(
      {
        next:(data)=>{
          this.Users = data;
          console.log(this.Users);
        },
        error:(err)=>{console.log(err)}
      }
    )
  }
  // ngOnInit(): void {
    // this.myService.GetAllUsers().subscribe(
    //   {
    //     next:(data)=>{
    //       this.Users = data;
    //     },
    //     error:(err)=>{console.log(err)}
    //   }
    // )
  // }
//   deleteUser(id: any) {
//     if (confirm(`Are you Sure you want delete user number ${id}`)) {

//       this.myService.deleteUser(id).subscribe(
//         () => this.ngOnInit()
//         ,
//         (err) => console.log(err)
//       );
//     }
//   }
}







