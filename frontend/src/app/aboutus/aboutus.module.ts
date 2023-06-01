import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AboutusComponent, AboutComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [AboutusComponent, AboutComponent],
})
export class AboutusModule {}
