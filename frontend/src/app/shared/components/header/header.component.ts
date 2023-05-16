import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/auth/services/log-in/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn: any;
  constructor(private authService: AuthService) {
    // console.log(this.authService.isUserLoggedIn());
    // console.log(this.authService.isUserLoggedIn());
    // console.log("role of user",this.authService.getRole());

    this.isLoggedIn = this.authService.isUserLoggedIn();
    // this.checkRole = this.authService.;
  }
  logout() {
    this.authService.logout();
    this.isLoggedIn = null;
  }
}
