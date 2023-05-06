import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyUsComponent } from './components/why-us/why-us.component';


@NgModule({
  declarations: [ContactUsComponent, LatestBlogComponent, HeroComponent, WhyUsComponent],
  imports: [CommonModule],
  exports: [ContactUsComponent, LatestBlogComponent, HeroComponent, WhyUsComponent],
})
export class HomeModule {}
