import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [ContactUsComponent, HeroComponent],
  imports: [CommonModule],
  exports: [ContactUsComponent,HeroComponent],
  
})
export class HomeModule {}
