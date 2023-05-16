import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowUserComponent } from './users/components/show-user/show-user.component';
import { AdminComponent } from './admin.component';
import { AllUsersComponent } from './users/components/all-users/all-users.component';
import { AllMealsComponent } from './admin-meals/components/all-meals/all-meals.component';
import { ShowMealComponent } from './admin-meals/components/show-meal/show-meal.component';

const routes: Routes = [


  { path: 'admin', component: DashboardComponent },
  { path: 'admin/users', component: AdminComponent },
  { path: 'admin/users/:id', component: ShowUserComponent },

  { path: 'admin/meals', component: AllMealsComponent },
  { path: 'admin/meals/:id', component: ShowMealComponent },
  { path: 'admin/meals', component: AllMealsComponent },


  // {
  //   path: 'admin',
  //   children: [{
  //     path: '',
  //     component: DashboardComponent
  //   }, {
  //     path: 'users',
  //     component: AllUsersComponent
  //   }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
