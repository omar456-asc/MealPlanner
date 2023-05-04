import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';

@NgModule({
  declarations: [ContactUsComponent, LatestBlogComponent],
  imports: [CommonModule],
  exports: [ContactUsComponent, LatestBlogComponent],
})
export class HomeModule {}
