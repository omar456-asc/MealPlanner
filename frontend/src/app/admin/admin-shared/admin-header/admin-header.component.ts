import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/log-in/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

  constructor(
    private authService: AuthService,

  ) {
    console.log(this.authService.isUserLoggedIn());
  }

  logout() {
    this.authService.logout();


  }
}
