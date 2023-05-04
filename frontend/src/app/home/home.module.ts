import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [ContactUsComponent, LatestBlogComponent, HeroComponent],
  imports: [CommonModule],
  exports: [ContactUsComponent, LatestBlogComponent, HeroComponent],
})
export class HomeModule {}
