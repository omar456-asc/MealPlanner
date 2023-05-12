import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/admin/users/services/users.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {

  id: any;
  user: any;
  constructor(myRoute: ActivatedRoute, public userApiService: UsersService) {
    this.id = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.userApiService.getUserByID(this.id).subscribe(
      {
        next: (data) => {
          this.user = data;
        },
        error: (err) => { console.log(err) }
      }
    );
  }
}
