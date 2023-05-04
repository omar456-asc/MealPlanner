import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './users/components/all-users/all-users.component';
import { ShowUserComponent } from './users/components/show-user/show-user.component';

const routes: Routes = [
  { path: '', component: AllUsersComponent },
  { path: 'show/user', component: ShowUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
