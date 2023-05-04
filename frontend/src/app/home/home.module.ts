import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';

@NgModule({
  declarations: [ContactUsComponent, LatestBlogComponent, TeamMemberComponent],
  imports: [CommonModule],
  exports: [ContactUsComponent, LatestBlogComponent, TeamMemberComponent],
})
export class HomeModule {}
