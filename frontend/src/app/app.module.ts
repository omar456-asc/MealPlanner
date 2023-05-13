import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { LogInComponent } from './auth/components/log-in/log-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';

import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { CheckoutModule } from './checkout/checkout.module';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/services/log-in/auth.service';
import { TokenInterceptor } from './auth/services/log-in/Token Interceptor/TokenInterceptor';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './meals/components/meals/meals.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
  AppComponent,
  ProfileComponent,
MealsComponent],


  imports: [
    BrowserModule,
    SharedModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    CheckoutModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
