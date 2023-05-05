import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllUsersComponent } from './users/components/all-users/all-users.component';
import { ShowUserComponent } from './users/components/show-user/show-user.component';

const routes: Routes = [


  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
