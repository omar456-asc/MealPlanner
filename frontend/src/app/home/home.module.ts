import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    ContactUsComponent,
    LatestBlogComponent,
    TeamMemberComponent,
    HeroComponent,
  ],
  imports: [CommonModule],
  exports: [
    ContactUsComponent,
    LatestBlogComponent,
    TeamMemberComponent,
    HeroComponent,
  ],
})
export class HomeModule {}
