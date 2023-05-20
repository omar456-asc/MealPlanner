import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../services/log-in/log-in.service';
import { AuthService } from '../../services/log-in/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllMealsService } from 'src/app/meals/services/all-meals.service';
import { SharedService } from 'src/app/shared/services/shared.service';

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
    private router: Router,
    private usercart: AllMealsService,
    private shared: SharedService
  ) {}
  cart: any;
  Login(email: any, password: any) {

    let logInUser = { email, password };
    this.myService.LOGIN(logInUser).subscribe((response: any) => {
      this.authService.setToken(response.token);
      this.authService.setUserID(response.id);
      this.Add(email, password);
      this.router.navigateByUrl('');
      this.getcart();

    });
  }

  Add(email: any, password: any) {
    let logInUser = { email, password };
    this.myService.LOGIN(logInUser).subscribe(
      (response: any) => {
        this.authService.setToken(response.token);
        this.checkRole();
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
  getcart() {
    var id = this.authService.getUserID();

    this.myService.GetUserCart(id).subscribe({
      next: (data: any) => {
        this.cart = data.cart;
        if (this.cart[0].id) {
          this.usercart.setCart(JSON.stringify(this.cart));
          var cartlength:any= this.usercart.getCart()
          this.shared.cartLength =JSON.parse(cartlength).length
          console.log(this.shared.cartLength)
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
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
