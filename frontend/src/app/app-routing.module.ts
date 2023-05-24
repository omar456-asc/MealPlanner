import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './auth/components/log-in/log-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { HomeModule } from './home/home.module';
import { CheckoutModule } from './checkout/checkout.module';
import { ContactUsComponent } from './home/components/contact-us/contact-us.component';
import { HeroComponent } from './home/components/hero/hero.component';
import { LatestBlogComponent } from './home/components/latest-blog/latest-blog.component';
import { TeamMemberComponent } from './home/components/team-member/team-member.component';
import { ProfileComponent } from './profile/profile.component';

import { HomeComponent } from './home/home.component';
import { MealsComponent } from './meals/components/meals/meals.component';
import { MealDetailsComponent } from './meals/components/meal-details/meal-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactFormComponent } from './home/components/contact-form/contact-form.component';
import { PaymentComponent } from './payment/payment.component';
import { CustomizeMealComponent } from './checkout/components/customize-meal/customize-meal.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { UserGuard } from './auth/guards/user.guard';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [UserGuard] },
  { path: 'cart', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserdashboardComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'mealdetails/:id', component: MealDetailsComponent },
  {
    path: 'customize/:id',
    component: CustomizeMealComponent,
    canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
