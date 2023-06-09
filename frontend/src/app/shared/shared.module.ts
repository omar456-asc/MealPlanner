import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], exports: [
    FooterComponent,
    HeaderComponent,
    ErrorComponent,

  ]
})
export class SharedModule { }
