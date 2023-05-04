import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule],
  exports: [ContactUsComponent],
})
export class HomeModule {}
