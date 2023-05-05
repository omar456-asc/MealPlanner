import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactUsComponent,
    LatestBlogComponent,
    HeroComponent,
    TeamMemberComponent,
    HomeComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ContactUsComponent,
    LatestBlogComponent,
    HeroComponent,
    TeamMemberComponent,
    HomeComponent,
  ],
})
export class HomeModule {}
