import { Component } from '@angular/core';
import { UsersService } from 'src/app/admin/users/services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users: any;

  constructor(public UsersService: UsersService) {
  }

  ngOnInit(): void {
    this.UsersService.getAllUsers().subscribe(
      {
        next: (data) => {
          this.users = data;
        },
        error: (err) => { console.log(err) }
      }
    )
  }

}
