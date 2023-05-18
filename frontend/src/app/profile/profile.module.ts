import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [UserProfileComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [ProfileComponent, UserProfileComponent],
})
export class ProfileModule {}
