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
import { ProfileComponent } from './profile/components/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactFormComponent } from './home/components/contact-form/contact-form.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
