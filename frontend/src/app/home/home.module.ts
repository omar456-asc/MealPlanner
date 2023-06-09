import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactUsComponent,
    LatestBlogComponent,
    HeroComponent,
    TeamMemberComponent,
    HomeComponent,
    WhyUsComponent,
    ContactFormComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ContactUsComponent,
    LatestBlogComponent,
    HeroComponent,
    TeamMemberComponent,
    HomeComponent,
    WhyUsComponent,
  ],
})
export class HomeModule {}
