import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { LogInComponent } from './auth/components/log-in/log-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';

import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { CheckoutModule } from './checkout/checkout.module';
import { ProfileModule } from './profile/profile.module';
import { AboutusModule } from './aboutus/aboutus.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/services/log-in/auth.service';
import { TokenInterceptor } from './auth/services/log-in/Token Interceptor/TokenInterceptor';
import { ConfigService } from './config.service';

import { MealsComponent } from './meals/components/meals/meals.component';
import { PaymentModule } from './payment/payment.module';
import { MealDetailsComponent } from './meals/components/meal-details/meal-details.component';
import { PaymentFormComponent } from './payment/components/payment-form/payment-form.component';

import { UserdashboardModule } from './userdashboard/userdashboard.module';
import { OrderModule } from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    MealsComponent,
    MealDetailsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CheckoutModule,
    ProfileModule,
    PaymentModule,
    OrderModule,
    UserdashboardModule,
    AboutusModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ConfigService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
