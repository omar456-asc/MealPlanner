import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    AdminSideNavComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    AdminSideNavComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ]
})
export class AdminSharedModule { }
