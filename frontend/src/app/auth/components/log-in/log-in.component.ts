import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../services/log-in/log-in.service';
import { AuthService } from '../../services/log-in/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  isRegistred: boolean = false;
  emailMsg: string = '';
  passwordMsg: string = '';
  validationForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  get isEmailValid() {
    return this.validationForm.controls['email'].valid;
  }
  get isPasswordValid() {
    return this.validationForm.controls['password'].valid;
  }
  add() {
    if (!this.validationForm.valid) {
    }
  }

  constructor(
    private myService: LogInService,
    private authService: AuthService,
    private router: Router
  ) {}

  Add(email: any, password: any) {
    let logInUser = { email, password };
    this.myService.LOGIN(logInUser).subscribe(
      (response: any) => {
        this.authService.setToken(response.token);
        this.checkRole();
        // this.router.navigateByUrl('');
      },
      (err) => {
        if (email == '') {
          this.emailMsg = 'please enter your email';
        } else if (err.error.message.email != '') {
          this.emailMsg = err.error.message.email;
        } else {
          this.emailMsg = '';
        }
        if (password == '') {
          this.passwordMsg = 'Please enter your password';
        } else if (err.error.message.password == '') {
          this.passwordMsg = '';
        } else {
          this.passwordMsg = 'Incorrect password , please try again';
        }
      }
    );
  }

  checkRole() {
    let isAdmin = this.authService.getRole();
    if (isAdmin === true) {
      this.router.navigate(['/admin']);
    } else if (isAdmin === false) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
