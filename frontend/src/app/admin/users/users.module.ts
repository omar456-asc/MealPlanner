import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';



@NgModule({
  declarations: [
    AddUserComponent,
    ShowUserComponent,
    UpdateUserComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddUserComponent,
    ShowUserComponent,
    UpdateUserComponent,
    AllUsersComponent
  ]
})
export class UsersModule { }
