import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { RouterModule } from '@angular/router';
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [

    AdminSideNavComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    AdminSideNavComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    PreloaderComponent

  ]
})
export class AdminSharedModule { }
