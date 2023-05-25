import { Component } from '@angular/core';
import { UsersService } from 'src/app/admin/users/services/users.service';

@Component({
  selector: 'app-latest-members',
  templateUrl: './latest-members.component.html',
  styleUrls: ['./latest-members.component.css']
})
export class LatestMembersComponent {
  users: any;

  constructor(public UsersService: UsersService) {
  }

  ngOnInit(): void {
    this.UsersService.getLatest8users().subscribe(
      {
        next: (data) => {
          this.users = data;
          console.log(this.users);

        },
        error: (err) => { console.log(err) }
      }
    )
  }

}
