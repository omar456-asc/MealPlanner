import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutusComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [AboutusComponent],
})
export class AboutusModule {}
