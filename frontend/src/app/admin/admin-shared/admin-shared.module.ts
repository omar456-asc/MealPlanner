import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';



@NgModule({
  declarations: [

    AdminSideNavComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    AdminSideNavComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ]
})
export class AdminSharedModule { }
